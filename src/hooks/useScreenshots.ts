import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import { Screenshot } from "../entities/Screenshot";
import APIClient from "../services/api-client";

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24h
  });
};

export default useScreenshots;
