import {
  FETCH_CHARACTER_REQUEST,
  FETCH_CHARACTER_FAILURE,
  FETCH_CHARACTER_SUCCESS,
} from "./actionTypes";
import {
  FetchCharacterRequest,
  FetchCharacterRequestPayload,
  FetchCharacterSuccess,
  FetchCharacterSuccessPayload,
  FetchCharacterFailure,
  FetchCharacterFailurePayload,
} from "./types";

export const fetchCharacterRequest = (
  id: FetchCharacterRequestPayload,
): FetchCharacterRequest => ({
  type: FETCH_CHARACTER_REQUEST,
  payload: id,
});

export const fetchCharacterSuccess = (
  payload: FetchCharacterSuccessPayload,
): FetchCharacterSuccess => ({
  type: FETCH_CHARACTER_SUCCESS,
  payload,
});

export const fetchCharacterFailure = (
  payload: FetchCharacterFailurePayload,
): FetchCharacterFailure => ({
  type: FETCH_CHARACTER_FAILURE,
  payload,
});
