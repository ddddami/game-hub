import { ReactNode } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

interface Props {
  term: string;
  children: ReactNode;
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box marginTop={5}>
      <Heading as={"dt"} fontSize="md" color="gray.600">
        {term}
      </Heading>
      <Text>
        <dd>{children}</dd>
      </Text>
    </Box>
  );
};

export default DefinitionItem;
