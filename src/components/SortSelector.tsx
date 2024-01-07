import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance </MenuItem>
        <MenuItem>Date added </MenuItem>
        <MenuItem>Name </MenuItem>
        <MenuItem>Release date </MenuItem>
        <MenuItem>Popularity </MenuItem>
        <MenuItem>Average rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
