import { useToast } from "@chakra-ui/react";

export default function NotFound() {
  const toast = useToast();
  toast({
    title: "Ooops!.",
    description: "No Results Found!",
    status: "warning",
    duration: 9000,
    position: "top-right",
    isClosable: true,
  });
}
