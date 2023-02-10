import { Flex } from "@chakra-ui/react";
import { Repo } from "./Repo";
import { useSelector } from "react-redux";

export const Feed = () => {
  const repos = useSelector((store) => store.repos);
  return (
    <Flex
      flexDirection={["column", "column", "row", "row"]}
      flexWrap={["nowrap", "nowrap", "wrap", "wrap"]}
    >
      {repos.map((repo, index) => {
        return <Repo key={index} repo={repo} />;
      })}
    </Flex>
  );
};
