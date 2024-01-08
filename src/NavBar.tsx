import { HStack, Image } from "@chakra-ui/react";
import logo from "./assets/logo.webp";
import ColorModeSwitch from "./components/ColorModeSwitch";
import SearchInput from "./components/SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px" gap={{ base: 2, lg: 6 }}>
      <Image src={logo} boxSize={"60px"} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
