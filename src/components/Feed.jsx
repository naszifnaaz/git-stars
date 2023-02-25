import { Flex } from "@chakra-ui/react";
import { Repo } from "./Repo";
import { useSelector } from "react-redux";
import NotFound from "./NotFound";
import Loader from "./Loader";

export const Feed = () => {
  const repos = useSelector((store) => store.repos) || [];
  const viewStyle = useSelector((store) => store.viewStyle);
  const isLoading = useSelector((store) => store.isLoading);

  if (isLoading) return <Loader />;

  if (repos.length === 0) return <NotFound />;

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
