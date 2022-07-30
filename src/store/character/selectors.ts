import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.character.pending;

const getCharacter = (state: AppState) => state.character.character;

const getError = (state: AppState) => state.character.error;

export const getCharacterSelector = createSelector(
  getCharacter,
  (character) => character,
);

export const getIsLoadingCharacterSelector = createSelector(
  getPending,
  (pending) => pending,
);

export const getErrorSelector = createSelector(getError, (error) => error);
