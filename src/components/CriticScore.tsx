import { Badge } from "@chakra-ui/react";

const CriticScore = ({ score }: { score: number }) => {
  return (
    <Badge
      paddingX={2}
      borderRadius={"3px"}
      colorScheme={score < 50 ? "yellow" : "green"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
