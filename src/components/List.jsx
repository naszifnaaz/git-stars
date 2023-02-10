import moment from "moment";
import {
  Avatar,
  Flex,
  useColorMode,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";
import { GoIssueOpened, GoRepoForked, GoStar } from "react-icons/go";
export const List = (props) => {
  const { colorMode } = useColorMode();
  const { repo } = props;
  return (
    <Flex
      flexDirection={"row"}
      justifyContent="space-between"
      m={"10px"}
      p={"1.5rem"}
      rounded={"15px"}
      bg={colorMode === "light" ? "gray.200" : "gray.900"}
      w={"75%"}
      alignItems={"center"}
    >
      <Flex flexDirection={"column"}>
        <Flex>
          <Text
            as={"a"}
            href={repo.owner.html_url}
            target="blank"
            fontSize={"26px"}
            fontWeight={"normal"}
            cursor={"pointer"}
            mb={"3px"}
            color={colorMode === "light" ? "black" : "white"}
            _hover={{ textDecoration: "underline" }}
            display={"inline"}
          >
            {`${repo.owner.login}/ `}{" "}
          </Text>
          <Text
            as={"a"}
            href={repo.html_url}
            target="blank"
            fontSize={"26px"}
            fontWeight={"semibold"}
            cursor={"pointer"}
            mb={"3px"}
            color={colorMode === "light" ? "black" : "white"}
            _hover={{ textDecoration: "underline" }}
            display={"inline"}
          >
            {`${repo.name.substr(0, 20)} `}
          </Text>
        </Flex>

        <Text
          fontSize={"0.9rem"}
          color={colorMode === "light" ? "gray.700" : "gray.400"}
          pt={"5px"}
        >
          {`Built by ${repo.owner.login} on ${moment(repo.created_at).format(
            "MMMM D, YYYY"
          )} `}
        </Text>
        <Text
          fontSize={"1rem"}
          color={colorMode === "light" ? "black" : "white"}
          pt={"15px"}
          maxHeight={"4rem"}
          overflow={"hidden"}
          textOverflow={"ellipsis"}
        >
          {repo.description}
        </Text>
        <Stack isInline mt={"1rem"}>
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
      <Avatar
        as={"a"}
        href={repo.owner.html_url}
        target={"_blank"}
        src={repo.owner.avatar_url}
        w={"128px"}
        h={"128px"}
        ml={"2rem"}
      />
    </Flex>
  );
};
