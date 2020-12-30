import Head from "next/head";
import { useAuth } from "@/lib/auth";
import { Button, Flex } from "@chakra-ui/react";

import { LogoIcon } from "@/styles/icons";

const Home = () => {
  const { user, signinWithGitHub, signout } = useAuth();
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
            window.location.href = "/dashboard"
          }
        `,
          }}
        />
        <title>Fast Feedback App</title>
      </Head>

      <LogoIcon boxSize={8} />

      {user ? (
        <Button onClick={signout}>Sign Out</Button>
      ) : (
        <Button mt={4} size="sm" onClick={signinWithGitHub}>
          Sign In
        </Button>
      )}
    </Flex>
  );
};

export default Home;
