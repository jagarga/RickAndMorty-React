import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchCharacterFailure, fetchCharacterSuccess } from "./actions";
import { FETCH_CHARACTER_REQUEST } from "./actionTypes";
import { getCharacter } from "../../api/api";

/*
  Worker Saga: Fired on FETCH_CHARACTER_REQUEST action
*/
function* fetchCharacterSaga(payload) {
  try {
    const response = yield call(getCharacter, payload?.payload);
    yield put(
      fetchCharacterSuccess({
        character: response.data,
      }),
    );
  } catch (e) {
    yield put(
      fetchCharacterFailure({
        error: e.message,
      }),
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_CHARACTER_REQUEST` action.
  Allows concurrent increments.
*/
function* characterSaga() {
  yield all([takeLatest(FETCH_CHARACTER_REQUEST, fetchCharacterSaga)]);
}

export default characterSaga;
