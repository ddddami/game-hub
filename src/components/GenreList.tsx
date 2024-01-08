import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../utils/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <Heading marginBottom={3} fontSize="2xl">
        Genres
      </Heading>
      <List>
        {genres.map((genre) => {
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
                  onClick={() => onSelectGenre(genre)}
                  variant="link"
                  fontSize="lg"
                  fontWeight={
                    selectedGenre?.id === genre.id ? "bold" : "normal"
                  }
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
