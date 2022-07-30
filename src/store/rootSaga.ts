import { all, fork } from "redux-saga/effects";

import charactersSaga from "./characters/sagas";
import characterSaga from "./character/sagas";

export function* rootSaga() {
  yield all([fork(charactersSaga)]);
  yield all([fork(characterSaga)]);
}
