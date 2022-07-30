import { ICharacter } from "../../constants/interfaces";
import {
  FETCH_CHARACTER_REQUEST,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_FAILURE,
} from "./actionTypes";

export interface CharacterState {
  pending: boolean;
  character: ICharacter[];
  error: string | null;
}

export interface FetchCharacterRequestPayload {
  id: number;
}

export interface FetchCharacterSuccessPayload {
  character: ICharacter[];
}

export interface FetchCharacterFailurePayload {
  error: string;
}

export interface FetchCharacterRequest {
  type: typeof FETCH_CHARACTER_REQUEST;
  payload: FetchCharacterRequestPayload;
}

export type FetchCharacterSuccess = {
  type: typeof FETCH_CHARACTER_SUCCESS;
  payload: FetchCharacterSuccessPayload;
};

export type FetchCharacterFailure = {
  type: typeof FETCH_CHARACTER_FAILURE;
  payload: FetchCharacterFailurePayload;
};

export type CharacterActions =
  | FetchCharacterRequest
  | FetchCharacterSuccess
  | FetchCharacterFailure;
