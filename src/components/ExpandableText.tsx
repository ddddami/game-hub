import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";
interface Props {
  maxChars?: number;
  children: string;
}
const ExpandableText = ({ maxChars = 300, children }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (!children) return null;
  if (children.length <= maxChars) return <Text>{children}</Text>;
  const summary = isExpanded
    ? children
    : children.substring(0, maxChars) + "...";
  return (
    <Text>
      {summary}
      <Button
        colorScheme="pink"
        size="xs"
        marginLeft={1}
        fontWeight={"bold"}
        onClick={() => setExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
