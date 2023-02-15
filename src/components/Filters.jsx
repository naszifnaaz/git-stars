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
  useColorMode,
} from "@chakra-ui/react";
import languages from "../data/languages.json";
import { FaCalendarAlt, FaTable, FaListAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setDateJump, setLanguage, setViewStyle } from "../redux/action";

export const Filters = () => {
  const dateJump = useSelector((store) => store.dateJump);
  const viewStyle = useSelector((store) => store.viewStyle);
  const { colorMode } = useColorMode("dark");
  const dispatch = useDispatch();

  // Temporary Color logic
  let activeColor;
  let passiveColor;
  if (colorMode === "dark") {
    activeColor = "gray.200";
    passiveColor = "whiteAlpha.300";
  } else {
    activeColor = "gray.700";
    passiveColor = "blackAlpha.300";
  }
  return (
    <Flex
      flexDirection={["column", "column", "row", "row"]}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"10px"}
      m={"1rem"}
    >
      <Select
        w={"300px"}
        onChange={(e) => dispatch(setLanguage(e.target.value))}
      >
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
          <MenuItem onClick={() => dispatch(setDateJump("day"))}>
            Daily
          </MenuItem>
          <MenuItem onClick={() => dispatch(setDateJump("week"))}>
            Weekly
          </MenuItem>
          <MenuItem onClick={() => dispatch(setDateJump("month"))}>
            Monthly
          </MenuItem>
          <MenuItem onClick={() => dispatch(setDateJump("year"))}>
            Yearly
          </MenuItem>
        </MenuList>
      </Menu>

      <Stack
        isInline
        spacing={"0"}
        display={["none", "none", "block", "block"]}
      >
        <Button
          leftIcon={<FaTable />}
          roundedRight={0}
          onClick={() => dispatch(setViewStyle("grid"))}
          color={viewStyle === "grid" ? activeColor : passiveColor}
          _focus={{ boxShadow: "none" }}
          border="1px solid gray"
          borderRight={0}
        >
          Grid
        </Button>
        <Button
          leftIcon={<FaListAlt />}
          roundedLeft={0}
          onClick={() => dispatch(setViewStyle("list"))}
          color={viewStyle === "list" ? activeColor : passiveColor}
          _focus={{ boxShadow: "none" }}
          border="1px solid gray"
        >
          List
        </Button>
      </Stack>
    </Flex>
  );
};
