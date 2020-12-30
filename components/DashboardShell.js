import NextLink from "next/link";

import { useAuth } from "@/lib/auth";
import { Flex, Link, Stack, Avatar, Button } from "@chakra-ui/react";
import { LogoIcon } from "@/styles/icons";

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
          <NextLink href="/" passHref>
            <LogoIcon boxSize={6} />
          </NextLink>
          <NextLink href="/dashboard" passHref>
            <Link>Sites</Link>
          </NextLink>
          <NextLink href="/feedback" passHref>
            <Link>Feedback</Link>
          </NextLink>
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
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
