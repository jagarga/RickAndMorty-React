import {
  FETCH_CHARACTER_REQUEST,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_FAILURE,
} from "./actionTypes";

import { CharacterActions, CharacterState } from "./types";

const initialState: CharacterState = {
  pending: false,
  character: [],
  error: null,
};

export default (state = initialState, action: CharacterActions) => {
  switch (action.type) {
    case FETCH_CHARACTER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        pending: false,
        character: action.payload.character,
        error: null,
      };
    case FETCH_CHARACTER_FAILURE:
      return {
        ...state,
        pending: false,
        character: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
