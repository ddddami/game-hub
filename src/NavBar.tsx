import { HStack, Image } from "@chakra-ui/react";
import logo from "./assets/logo.webp";
import ColorModeSwitch from "./components/ColorModeSwitch";
import SearchInput from "./components/SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="10px" paddingBottom={"5px"} gap={{ base: 2, lg: 6 }}>
      <Link to="/home">
        <Image src={logo} boxSize={"60px"} objectFit={"cover"} />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
