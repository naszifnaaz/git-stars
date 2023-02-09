import {
  Button,
  Select,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import languages from "../data/languages";
import { FaCalendarAlt, FaTable, FaListAlt } from "react-icons/fa";

export const Filters = () => {
  const [dateJump, setDateJump] = useState("daily");
  const [viewStyle, setViewStyle] = useState("grid");
  const [language, setLanguage] = useState("");

  console.log(dateJump, viewStyle, language);
  return (
    <Flex
      flexDirection={["column", "column", "row", "row"]}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"10px"}
    >
      <Select w={"300px"} onChange={(e) => setLanguage(e.target.value)}>
        {languages.map((language) => (
          <option key={language.value} value={language.value}>
            {language.label}
          </option>
        ))}
      </Select>
      <Menu>
        <MenuButton as={Button} minWidth="150px">
          <Icon as={FaCalendarAlt} mr="7px" />
          <Box as="span" textTransform="capitalize">
            {dateJump}
          </Box>
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => setDateJump("daily")}>Daily</MenuItem>
          <MenuItem onClick={() => setDateJump("weekly")}>Weekly</MenuItem>
          <MenuItem onClick={() => setDateJump("monthly")}>Monthly</MenuItem>
          <MenuItem onClick={() => setDateJump("yearly")}>Yearly</MenuItem>
        </MenuList>
      </Menu>

      <Stack isInline spacing={"0"}>
        <Button
          leftIcon={<FaTable />}
          roundedRight={0}
          onClick={() => setViewStyle("grid")}
          color={viewStyle === "grid" ? "gray.200" : "whiteAlpha.300"}
          _focus={{ boxShadow: "none" }}
          border="1px solid gray"
          borderRight={0}
        >
          Grid
        </Button>
        <Button
          leftIcon={<FaListAlt />}
          roundedLeft={0}
          onClick={() => setViewStyle("list")}
          color={viewStyle === "list" ? "gray.200" : "whiteAlpha.300"}
          _focus={{ boxShadow: "none" }}
          border="1px solid gray"
        >
          List
        </Button>
      </Stack>
    </Flex>
  );
};
