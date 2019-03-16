import { takeLatest, put, call } from "redux-saga/effects";
import { colorActions } from "../actions";
import { FETCH_ALL_COLORS } from "../actions/actionTypes";
import { apiCall } from "../api";

export function* fetchColors() {
  try {
    const data = yield call(apiCall, `/colors`);
    yield put(colorActions.fetchAllColorsSuccess(data));
  } catch (error) {
    yield put(colorActions.fetchAllColorsFailure(error));
  }
}

export default function* colorSaga() {
  yield takeLatest(FETCH_ALL_COLORS, fetchColors);
}
