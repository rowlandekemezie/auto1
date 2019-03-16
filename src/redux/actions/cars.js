import {
  FETCH_ALL_CARS,
  FETCH_ALL_CARS_SUCCESS,
  FETCH_ALL_CARS_FAILURE,
  FETCH_A_CAR,
  FETCH_A_CAR_SUCCESS,
  FETCH_A_CAR_FAILURE,
  SAVE_COLLECTION
} from "./actionTypes";

export function fetchAllCars(query) {
  return {
    type: FETCH_ALL_CARS,
    query
  };
}

export function fetchAllCarsSuccess(data) {
  return {
    type: FETCH_ALL_CARS_SUCCESS,
    data
  };
}

export function fetchAllCarsFailure(error) {
  return {
    type: FETCH_ALL_CARS_FAILURE,
    error
  };
}

export function fetchACar(carId) {
  return {
    type: FETCH_A_CAR,
    carId
  };
}

export function fetchACarSuccess(data) {
  return {
    type: FETCH_A_CAR_SUCCESS,
    data
  };
}

export function fetchACarFailure(error) {
  return {
    type: FETCH_A_CAR_FAILURE,
    error
  };
}

export function saveCollection(car) {
  return {
    type: SAVE_COLLECTION,
    car
  };
}
