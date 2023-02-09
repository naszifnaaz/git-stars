import { Flex, Button, Stack, useColorMode } from "@chakra-ui/react";
import { Brand } from "./Brand";
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justifyContent="space-around" alignItems="center" m="1rem">
      <Brand />
      <Stack isInline>
        <Button
          leftIcon={<FaGithub />}
          colorScheme={"red"}
          as="a"
          href="https://github.com/naszifnaaz/git-stars"
          target="_blank"
        >
          View Source
        </Button>
        <Button
          leftIcon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
          colorScheme="purple"
          onClick={toggleColorMode}
        >
          {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
        </Button>
      </Stack>
    </Flex>
  );
};
