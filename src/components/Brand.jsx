import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export const Brand = () => {
  return (
    <Flex alignItems="center">
      <Image src="./logo.png" w="64px" h="64px" />
      <Box textAlign="left" ml="1rem">
        <Heading fontSize="24px">GitStar</Heading>
        <Text color="gray.500">Most starred projects on GitHub</Text>
      </Box>
    </Flex>
  );
};
