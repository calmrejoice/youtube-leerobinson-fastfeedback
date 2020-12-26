import { Box, Heading, Text, Divider } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";

const Feedback = ({ author, text, createdAt }) => {
  return (
    <Box borderRadius={4} maxWidth="700px" w="full">
      <Heading size="sm" as="h3" mb={0}>
        {author}
      </Heading>
      <Text color="gray.500" mb={4} fontSize="xs">
        {format(parseISO(createdAt), "PPpp")}
      </Text>
      <Text>{text}</Text>
      <Divider borderColor="gray.200" backgroundColor />
    </Box>
  );
};

export default Feedback;
