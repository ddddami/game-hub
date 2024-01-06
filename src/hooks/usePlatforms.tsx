import useData from "./useData";

export interface Platfrom {
  id: number;
  name: string;
  slug: string;
}

export default () => useData<Platfrom>("platforms/lists/parents");
