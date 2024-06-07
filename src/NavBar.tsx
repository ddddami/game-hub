import { HStack, Image, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import ColorModeSwitch from "./components/ColorModeSwitch";
import SearchInput from "./components/SearchInput";
import Drawer from "./components/Drawer";
import logo from "./assets/logo.webp";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  const { pathname } = useLocation();

  return (
    <HStack padding="10px" paddingBottom={"5px"} gap={{ base: 2, lg: 6 }}>
      <Link to="/">
        <Image
          onClick={() => {
            if (isMobile && pathname === "/") onOpen();
          }}
          src={logo}
          boxSize={"60px"}
          objectFit={"contain"}
        />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
      <Drawer isOpen={isOpen} onClose={onClose} />
    </HStack>
  );
};

export default NavBar;
