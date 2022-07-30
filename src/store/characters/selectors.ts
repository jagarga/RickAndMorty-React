import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.characters.pending;

const getCharacters = (state: AppState) => state.characters.characters;

const getError = (state: AppState) => state.characters.error;

export const getCharactersSelector = createSelector(
  getCharacters,
  (characters) => characters,
);

export const getIsLoadingCharactersSelector = createSelector(
  getPending,
  (pending) => pending,
);

export const getErrorSelector = createSelector(getError, (error) => error);
