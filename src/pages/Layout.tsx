import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import "../App.css";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding={5} pb={30}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
