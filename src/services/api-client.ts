import axios, { CanceledError } from "axios";

export interface FetchResponse<T> {
  results: T[];
  count: number;
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWG_API,
  },
});

export { CanceledError };
export default axiosInstance;
