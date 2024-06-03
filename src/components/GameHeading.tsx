import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  genreId?: number;
  platformId?: number;
}

const GameHeading = ({ genreId, platformId }: Props) => {
  const genre = useGenre(genreId);
  const platform = usePlatform(platformId);
  const heading = `${genre?.name || ""} ${platform?.name || ""} Games`;
  return (
    <Heading marginY={4} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
