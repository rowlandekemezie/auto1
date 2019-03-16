import { takeLatest, put, call, select } from "redux-saga/effects";
import { carActions } from "../actions";
import { FETCH_ALL_CARS, FETCH_A_CAR } from "../actions/actionTypes";
import { apiCall } from "../api";

const saveToLocalStorage = (state, key) =>
  localStorage.setItem(key, JSON.stringify(state));

export function* fetchCars({ query }) {
  try {
    const data = yield call(apiCall, `/cars/?${query}`);
    yield put(carActions.fetchAllCarsSuccess(data));
    // Persist to localStorage
    const cars = yield select(a => a.cars.cars);
    yield call(saveToLocalStorage, cars, "cars");
  } catch (error) {
    yield put(carActions.fetchAllCarsFailure(error));
  }
}

export function* fetchCar({ carId }) {
  try {
    // access the car from the redux store and only make an API call if it doesn't exist.
    const cars = yield select(a => a.cars.cars);
    const car = cars && cars.find(car => car.id === carId);

    if (car) {
      yield put(carActions.fetchACarSuccess(car));
    } else {
      const data = yield call(apiCall, `/cars/${carId}`);
      yield put(carActions.fetchACarSuccess(data.car));
    }
  } catch (error) {
    yield put(carActions.fetchACarFailure(error));
  }
}

export default function* carSagas() {
  yield takeLatest(FETCH_ALL_CARS, fetchCars);
  yield takeLatest(FETCH_A_CAR, fetchCar);
}
