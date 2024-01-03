import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import apiClient, { CanceledError } from "../services/api-client";

interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  results: Game[];
  count: number;
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err);
      });

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
