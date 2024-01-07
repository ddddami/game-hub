import useData from "./useData";
import { Platform } from "./useGames";

export default () => useData<Platform>("platforms/lists/parents");
