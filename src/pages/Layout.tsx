import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import "../App.css";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
