import Head from "next/head";
import { useAuth } from "@/lib/auth";
import { Button, Flex } from "@chakra-ui/react";

import { LogoIcon, GithubIcon, GoogleIcon } from "@/styles/icons";

const Home = () => {
  const { user, signinWithGitHub, signinWithGoogle, signout } = useAuth();
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
        <>
          <Button
            onClick={signinWithGitHub}
            backgroundColor="gray.900"
            color="white"
            leftIcon={<GithubIcon boxSize={5} />}
            mt={2}
            h="50px"
            _hover={{ bg: "gray.700" }}
            _active={{
              bg: "gray.800",
              transform: "scale(0.95)",
            }}
          >
            Continue with Github
          </Button>
          <Button
            onClick={signinWithGoogle}
            backgroundColor="white"
            color="gray.900"
            variant="outline"
            leftIcon={<GoogleIcon boxSize={5} />}
            mt={2}
            h="50px"
            _hover={{ bg: "gray.100" }}
            _active={{
              bg: "gray.100",
              transform: "scale(0.95)",
            }}
          >
            Continue with Google
          </Button>
        </>
      )}
    </Flex>
  );
};

export default Home;
