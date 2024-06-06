import { ReactNode } from "react";
import { Heading, Text } from "@chakra-ui/react";

interface Props {
  term: string;
  children: ReactNode;
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Text marginY={5}>
      <Heading as={"dt"} fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Text>
  );
};

export default DefinitionItem;
