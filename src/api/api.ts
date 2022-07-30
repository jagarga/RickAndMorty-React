import axios from "axios";
import { ICharacters, ICharacter } from "../constants/interfaces";

import { API_ROUTES } from "./apiRoutes";

export const getCharacters = (page) =>
  axios.get<ICharacters[]>(`${API_ROUTES.getCharacters}${page}`);

export const getCharacter = (id) =>
  axios.get<ICharacter[]>(`${API_ROUTES.getCharacter}${id}`);
