import { Flex, Button, Stack, useColorMode } from "@chakra-ui/react";
import { Brand } from "./Brand";
import { FaGithub, FaSun, FaMoon, FaUserGraduate } from "react-icons/fa";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode("dark");
  return (
    <Flex
      justifyContent="space-around"
      alignItems="center"
      p="1rem"
      mb="1rem"
      flexWrap={"wrap"}
      boxShadow="rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
    >
      <Brand />
      <Stack isInline p={["1rem", 0, 0, 0]}>
        <Button
          leftIcon={<FaGithub />}
          colorScheme={"red"}
          as="a"
          href="https://github.com/naszifnaaz/git-stars"
          target="_blank"
        >
          View Source
        </Button>
        {/* <Button
          leftIcon={<FaUserGraduate />}
          colorScheme={"purple"}
          as="a"
          href="https://github.com/naszifnaaz/"
          target="_blank"
        >
          Portfolio
        </Button> */}
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
