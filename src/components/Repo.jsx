import {
  Avatar,
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { GoIssueOpened, GoRepoForked, GoStar } from "react-icons/go";

export const Repo = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      p={"1.5rem"}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      m={"2rem"}
      bg={colorMode === "light" ? "gray.200" : "gray.900"}
      rounded={"10px"}
      direction={"column"}
      w={["85", "85%", "40%", "20%"]}
    >
      <Flex alignItems={"center"}>
        <Avatar
          src="https://avatars.githubusercontent.com/u/43830688?v=4"
          w={"40px"}
          h={"40px"}
        />
        <Box ml={"15px"}>
          <Heading
            fontSize={"16px"}
            fontWeight={"normal"}
            cursor={"pointer"}
            mb={"3px"}
            color={colorMode === "light" ? "black" : "white"}
          >
            google-research
          </Heading>
          <Text
            fontSize={"13px"}
            color={colorMode === "light" ? "gray.700" : "gray.400"}
            cursor={"pointer"}
          >
            View Profile
          </Text>
        </Box>
      </Flex>

      <Box m={"2rem 0"}>
        <Heading
          as={"a"}
          fontSize={"16px"}
          color={colorMode === "light" ? "black" : "white"}
          textDecoration={"underline"}
        >
          tuning_playbook
        </Heading>
        <Text
          fontSize={"0.7rem"}
          color={colorMode === "light" ? "gray.700" : "gray.400"}
          pt={"5px"}
        >
          Built by · google-research · January 19, 2023
        </Text>

        <Text
          fontSize={"0.8rem"}
          color={colorMode === "light" ? "black" : "white"}
          pt={"15px"}
        >
          A playbook for systematically maximizing the performance of deep
          learning models
        </Text>
      </Box>

      <Stack isInline>
        <Button leftIcon={<GoStar />}>15,143</Button>
        <Button leftIcon={<GoRepoForked />}>1,158</Button>
        <Button leftIcon={<GoIssueOpened />}>23</Button>
      </Stack>
    </Flex>
  );
};
