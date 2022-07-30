import { ICharacters } from "../../constants/interfaces";
import {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
} from "./actionTypes";

export interface CharactersState {
  pending: boolean;
  characters: ICharacters[];
  error: string | null;
}

export interface FetchCharactersRequestPayload {
  page: number;
}

export interface FetchCharactersSuccessPayload {
  characters: ICharacters[];
}

export interface FetchCharactersFailurePayload {
  error: string;
}

export interface FetchCharactersRequest {
  type: typeof FETCH_CHARACTERS_REQUEST;
  payload: FetchCharactersRequestPayload;
}

export type FetchCharactersSuccess = {
  type: typeof FETCH_CHARACTERS_SUCCESS;
  payload: FetchCharactersSuccessPayload;
};

export type FetchCharactersFailure = {
  type: typeof FETCH_CHARACTERS_FAILURE;
  payload: FetchCharactersFailurePayload;
};

export type CharactersActions =
  | FetchCharactersRequest
  | FetchCharactersSuccess
  | FetchCharactersFailure;
