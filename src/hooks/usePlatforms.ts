import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../services/api-client";
import { FetchResponse } from "./useData";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export default () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      axiosInstance
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 24, // 24h
    initialData: { count: platforms.length, results: platforms },
  });
