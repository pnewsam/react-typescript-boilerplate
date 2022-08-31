import { get } from "../service/index";
import { useQuery } from "@tanstack/react-query";

// https://rickandmortyapi.com/documentation
const CHARACTER_URL = "https://rickandmortyapi.com/api/character";

export const useCharacters = () =>
  useQuery(["characters"], () => get(CHARACTER_URL));
