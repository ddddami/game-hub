import useData from "./useData";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export default () => useData<Genre>("genres");
