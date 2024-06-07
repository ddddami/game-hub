import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGameQueryStore from "../store";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../utils/image-url";

interface Props {
  onClose?: () => void;
}

const GenreList = ({ onClose = () => {} }: Props) => {
  const { data: genres, isLoading, error } = useGenres();

  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <>
      <Heading marginBottom={3} fontSize="2xl">
        Genres
      </Heading>
      <List>
        {genres?.results.map((genre) => {
          return (
            <ListItem paddingY={"6px"} key={genre.id}>
              <HStack>
                <Image
                  objectFit="cover"
                  boxSize={"32px"}
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                ></Image>
                <Button
                  whiteSpace="normal"
                  textAlign="left"
                  onClick={() => {
                    setGenreId(genre.id);
                    onClose();
                  }}
                  variant="link"
                  fontSize="lg"
                  fontWeight={genreId === genre.id ? "bold" : "normal"}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;
