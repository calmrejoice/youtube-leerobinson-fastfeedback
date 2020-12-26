import { useAuth } from "@/lib/auth";
import {
  Flex,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Button,
  Box,
} from "@chakra-ui/react";
import { LogoIcon } from "@/styles/icons";

import AddSiteModal from "./AddSiteModal";

const DashboardShell = ({ children }) => {
  const { user, signout } = useAuth();
  return (
    <Flex flexDirection="column">
      <Flex
        backgroundColor="#ffffff"
        justifyContent="space-between"
        p={4}
        px={8}
      >
        <Stack spacing={4} isInline alignItems="center">
          <LogoIcon boxSize={6} />
          <Link>Feedback</Link>
          <Link>Sites</Link>
        </Stack>
        <Stack spacing={4} isInline alignItems="center" flexDirection="row">
          {user && (
            <Button size="sm" variant="ghost" onClick={signout}>
              Log Out
            </Button>
          )}
          <Avatar size="sm" src={user?.photoUrl} />
        </Stack>
      </Flex>
      <Flex backgroundColor="blackAlpha.50" p={8} h="100vh">
        <Flex direction="column" ml="auto" mr="auto" w="100%" maxW="800px">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink color="gray.700" fontSize="sm">
                Sites
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Flex direction="row" justifyContent="space-between">
            <Heading mb={4}>My Sites</Heading>
            <AddSiteModal>+ Add Site</AddSiteModal>
          </Flex>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
