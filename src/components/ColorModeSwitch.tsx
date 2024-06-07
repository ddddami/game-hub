import { HStack, Icon, Switch, useColorMode } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack paddingRight={2}>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      {colorMode === "dark" ? <Icon as={LuMoon} /> : <Icon as={LuSun} />}
    </HStack>
  );
};

export default ColorModeSwitch;
