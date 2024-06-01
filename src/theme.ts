import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#eef1f9",
      100: "#d2d5df",
      200: "#b5b9c7",
      300: "#979db1",
      400: "#7a809b",
      500: "#616782",
      600: "#4b5066",
      700: "#363949",
      800: "#20222d",
      900: "#0b0b14",
    },
    // gray: {
    //   50: "#eef1fa",
    //   100: "#d1d6e1",
    //   200: "#b3bac9",
    //   300: "#959fb4",
    //   400: "#78839f",
    //   500: "#5e6a85",
    //   600: "#495269",
    //   700: "#343b4b",
    //   800: "#1e232e",
    //   900: "#060c14",
    // },
  },
});
export default theme;
