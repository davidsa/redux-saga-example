import { takeEvery, call, put } from "redux-saga/effects";
import { getUsersSuccessAction } from "./actions";
import { getUsers } from "../api";

export function* watchSagas() {
  yield takeEvery("GET_USERS", getUsersSaga);
  yield takeEvery("GET_TODOS", getTodos);
}

function* getUsersSaga() {
  try {
    yield put({ type: "LOADING" });
    const users = yield call(getUsers);
    yield put(getUsersSuccessAction(users));
  } catch (error) {
    yield put({ type: "ERROR" }, error);
  }
}

function* getTodos() {}
