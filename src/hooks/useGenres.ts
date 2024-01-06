import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

export default () => useData<Genre>("genres");
