import { Flex } from "@chakra-ui/react";
import { Repo } from "./Repo";
import { useSelector } from "react-redux";

export const Feed = () => {
  const repos = useSelector((store) => store.repos);
  const viewStyle = useSelector((store) => store.viewStyle);
  return (
    <>
      {viewStyle === "grid" ? (
        <Flex
          flexDirection={["column", "column", "row", "row"]}
          flexWrap={["nowrap", "nowrap", "wrap", "wrap"]}
          justifyContent={"center"}
        >
          {repos.map((repo, index) => {
            return <Repo key={index} repo={repo} />;
          })}
        </Flex>
      ) : (
        <Flex
          flexDirection={["column", "column", "column", "column"]}
          flexWrap={["nowrap", "nowrap", "wrap", "wrap"]}
          alignItems={"center"}
        >
          {repos.map((repo, index) => {
            return <Repo key={index} repo={repo} />;
          })}
        </Flex>
      )}
    </>
  );
};
