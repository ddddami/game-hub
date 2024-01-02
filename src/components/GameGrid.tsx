import { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";
import { Text } from "@chakra-ui/react";

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
  const [error, setError] = useState<AxiosError>();
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get<FetchGamesResponse>(
        "https://api.rawg.io/api/games?key=" + import.meta.env.VITE_RAWG_API,
        { signal: controller.signal }
      )
      .then((res) => {
        setGames(res.data.results);
      })
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
      {error && <Text>{error.message}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
