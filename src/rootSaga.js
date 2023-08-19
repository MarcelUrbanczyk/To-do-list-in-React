import { all } from "redux-saga/effects";
import { tasksSaga } from "./features/Tasks/tasksSaga";

export function* rootSaga() {
  yield all([tasksSaga()]);
}
