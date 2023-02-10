import { Flex } from "@chakra-ui/react";
import { Repo } from "./Repo";

export const Feed = () => {
  return (
    <Flex
      flexDirection={["column", "column", "row", "row"]}
      flexWrap={["nowrap", "nowrap", "wrap", "wrap"]}
    >
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
    </Flex>
  );
};
