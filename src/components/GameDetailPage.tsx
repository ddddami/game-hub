import { useParams } from "react-router-dom";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "./ExpandableText";
import GameAttributes from "./GameAttributes";
import useGame from "../hooks/useGame";
import GameTrailer from "../GameTrailer";
import GameScreenshots from "./GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <div>
      <Heading mb={1}>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenshots gameId={game.id} />
    </div>
  );
};

export default GameDetailPage;
