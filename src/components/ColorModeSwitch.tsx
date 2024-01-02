import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text>{colorMode === "dark" ? "Dark Mode" : "Light Mode"}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
