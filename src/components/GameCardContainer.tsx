import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

const GameCardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.02)",
        transition: "transform .12s ease-in",
      }}
      style={{
        transition: "transform .11s ease-in",
      }}
      overflow="hidden"
      borderRadius={9}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
