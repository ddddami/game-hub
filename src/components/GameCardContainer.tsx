import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

const GameCardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box overflow="hidden" borderRadius={9}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
