import { Flex, Spinner } from "@chakra-ui/react";

export default function Loader() {
  return (
    <Flex justifyContent={"center"} mt={"3rem"}>
      <Spinner size="xl" />
    </Flex>
  );
}
