import axios, { AxiosRequestConfig, CanceledError } from "axios";

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
class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (requestConfig?: AxiosRequestConfig) => axiosInstance.get<FetchResponse<T>>(this.endpoint, requestConfig).then(res => res.data)
}
export { CanceledError };
export default APIClient;
