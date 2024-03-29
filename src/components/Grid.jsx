import moment from "moment";
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

export const Grid = (props) => {
  const { repo } = props;
  const { colorMode } = useColorMode();
  return (
    <Flex
      p={"1.5rem"}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      m={"1rem"}
      bg={colorMode === "light" ? "gray.200" : "gray.900"}
      rounded={"10px"}
      direction={"column"}
      w={["85", "85%", "40%", "20%"]}
      justifyContent={"center"}
    >
      <Flex alignItems={"center"}>
        <Avatar src={repo.owner.avatar_url} w={"40px"} h={"40px"} />
        <Box ml={"15px"}>
          <Heading
            fontSize={"16px"}
            fontWeight={"normal"}
            cursor={"pointer"}
            mb={"3px"}
            color={colorMode === "light" ? "black" : "white"}
          >
            {repo.owner.login}
          </Heading>
          <Text
            as={"a"}
            href={repo.owner.html_url}
            target={"_blank"}
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
          href={repo.html_url}
          target={"_blank"}
          fontSize={"16px"}
          color={colorMode === "light" ? "black" : "white"}
          textDecoration={"underline"}
          cursor={"pointer"}
        >
          {repo.name}
        </Heading>
        <Text
          fontSize={"0.7rem"}
          color={colorMode === "light" ? "gray.700" : "gray.400"}
          pt={"5px"}
        >
          {`Built by ${repo.owner.login} on ${moment(repo.created_at).format(
            "MMMM D, YYYY"
          )} `}
        </Text>

        <Text
          fontSize={"0.8rem"}
          color={colorMode === "light" ? "black" : "white"}
          pt={"15px"}
          maxH={"70px"}
          overflow={"hidden"}
        >
          {repo.description}
        </Text>
      </Box>

      <Stack isInline>
        <Button
          as={"a"}
          href={`${repo.html_url}/stargazers`}
          target={"_blank"}
          leftIcon={<GoStar />}
        >
          {repo.stargazers_count}
        </Button>
        <Button
          as={"a"}
          href={`${repo.html_url}/network/members`}
          target={"_blank"}
          leftIcon={<GoRepoForked />}
        >
          {repo.forks_count}
        </Button>
        <Button
          as={"a"}
          href={`${repo.html_url}/issues`}
          target={"_blank"}
          leftIcon={<GoIssueOpened />}
        >
          {repo.open_issues_count}
        </Button>
      </Stack>
    </Flex>
  );
};
