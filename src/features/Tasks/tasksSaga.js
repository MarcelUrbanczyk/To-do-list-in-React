import {
  takeLatest,
  put,
  call,
  takeEvery,
  select,
  delay,
} from "redux-saga/effects";
import {
  fetchExampleTasksLoading,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
  fetchExampleTasks,
  selectTasks,
} from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveAtLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    yield put(fetchExampleTasksLoading());
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(fetchExampleTasksSuccess(exampleTasks));
  } catch (error) {
    yield put(fetchExampleTasksError(error));
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveAtLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
