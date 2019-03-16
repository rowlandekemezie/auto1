import { takeLatest, put, call } from "redux-saga/effects";
import { manufacturerActions } from "../actions";
import { FETCH_ALL_MANUFACTURERS } from "../actions/actionTypes";
import { apiCall } from "../api";

export function* fetchManufacturers() {
  try {
    const data = yield call(apiCall, `/manufacturers`);
    yield put(manufacturerActions.fetchAllManufacturersSuccess(data));
  } catch (error) {
    yield put(manufacturerActions.fetchAllManufacturersFailure(error));
  }
}

export default function* ManufacturerSagas() {
  yield takeLatest(FETCH_ALL_MANUFACTURERS, fetchManufacturers);
}
