import { useState, useRef } from "react";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

import Feedback from "@/components/Feedback";
import { getAllFeedback, getAllSites } from "@/lib/db-admin";
import { useAuth } from "@/lib/auth";
import { createFeedback } from "@/lib/db";

export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const { feedback } = await getAllFeedback(siteId);
  return {
    props: {
      initialFeedback: feedback,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const { sites } = await getAllSites();

  const paths = sites.map((site) => {
    return {
      params: {
        siteId: site.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

const SiteFeedback = ({ initialFeedback }) => {
  const { user } = useAuth();
  const router = useRouter();
  const inputEl = useRef(null);
  const [allFeedback, setAllFeedback] = useState(initialFeedback);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      author: user.name,
      authorId: user.uid,
      siteId: router.query.siteId,
      text: inputEl.current.value,
      createdAt: new Date().toISOString(),
      provider: user.provider,
      status: "pending",
    };

    setAllFeedback([newFeedback, ...allFeedback]);
    createFeedback(newFeedback);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="full"
      maxWidth="700px"
      margin="0 auto"
    >
      <Box as="form" onSubmit={onSubmit}>
        <FormControl my={8}>
          <FormLabel>Comment</FormLabel>
          <Input ref={inputEl} type="comment" id="comment" />
          <Button mt={2} type="submit">
            Add Comment
          </Button>
        </FormControl>
      </Box>
      {allFeedback.map((feedback) => {
        return <Feedback key={feedback.id} {...feedback} />;
      })}
    </Box>
  );
};

export default SiteFeedback;
