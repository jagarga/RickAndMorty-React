import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchCharactersFailure, fetchCharactersSuccess } from "./actions";
import { FETCH_CHARACTERS_REQUEST } from "./actionTypes";
import { getCharacters } from "./../../api/api";

/*
  Worker Saga: Fired on FETCH_CHARACTERS_REQUEST action
*/
function* fetchCharactersSaga(payload) {
  try {
    const response = yield call(getCharacters, payload?.payload);
    yield put(
      fetchCharactersSuccess({
        characters: response.data,
      }),
    );
  } catch (e) {
    yield put(
      fetchCharactersFailure({
        error: e.message,
      }),
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_CHARACTERS_REQUEST` action.
  Allows concurrent increments.
*/
function* charactersSaga() {
  yield all([takeLatest(FETCH_CHARACTERS_REQUEST, fetchCharactersSaga)]);
}

export default charactersSaga;
