import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../services/api-client";
import { FetchResponse } from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      axiosInstance
        .get<FetchResponse<Genre>>("/genres")
        .then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 24, // 24h
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
