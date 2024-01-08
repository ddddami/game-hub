import { Heading } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/useGames";

interface Props {
  genre: Genre | null;
  platform: Platform | null;
}

const GameHeading = ({ genre, platform }: Props) => {
  const heading = `${genre?.name || ""} ${platform?.name || ""} Games`;
  return (
    <Heading marginY={4} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
