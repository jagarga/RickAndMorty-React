import {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_FAILURE,
  FETCH_CHARACTERS_SUCCESS,
} from "./actionTypes";
import {
  FetchCharactersRequest,
  FetchCharactersRequestPayload,
  FetchCharactersSuccess,
  FetchCharactersSuccessPayload,
  FetchCharactersFailure,
  FetchCharactersFailurePayload,
} from "./types";

export const fetchCharactersRequest = (
  page: FetchCharactersRequestPayload,
): FetchCharactersRequest => ({
  type: FETCH_CHARACTERS_REQUEST,
  payload: page,
});

export const fetchCharactersSuccess = (
  payload: FetchCharactersSuccessPayload,
): FetchCharactersSuccess => ({
  type: FETCH_CHARACTERS_SUCCESS,
  payload,
});

export const fetchCharactersFailure = (
  payload: FetchCharactersFailurePayload,
): FetchCharactersFailure => ({
  type: FETCH_CHARACTERS_FAILURE,
  payload,
});
