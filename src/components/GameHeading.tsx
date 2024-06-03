import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  genreId?: number;
  platformId?: number;
}

const GameHeading = ({ genreId, platformId }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === genreId);
  const { data: plaforms } = usePlatforms();
  const platform = plaforms?.results.find((g) => g.id === platformId);
  const heading = `${genre?.name || ""} ${
    platform?.name || ""
  } Games`;
  return (
    <Heading marginY={4} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
