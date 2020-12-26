import { Heading, Flex, Text } from "@chakra-ui/react";
import AddSiteModal from "./AddSiteModal";

const FreePlanEmptyState = () => {
  return (
    <Flex
      width="100%"
      backgroundColor="white"
      borderRadius="8px"
      p={16}
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Heading size="lg" mb={2}>
        You haven't added any sites.
      </Heading>
      <Text mb={4}>Welcome 👋 Let's get started.</Text>
      <AddSiteModal>Add Your First Site</AddSiteModal>
    </Flex>
  );
};

export default FreePlanEmptyState;
