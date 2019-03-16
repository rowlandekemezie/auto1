import {
  FETCH_ALL_MANUFACTURERS,
  FETCH_ALL_MANUFACTURERS_SUCCESS,
  FETCH_ALL_MANUFACTURERS_FAILURE
} from "./actionTypes";

export function fetchAllManufacturers() {
  return {
    type: FETCH_ALL_MANUFACTURERS
  };
}

export function fetchAllManufacturersSuccess(data) {
  return {
    type: FETCH_ALL_MANUFACTURERS_SUCCESS,
    data
  };
}

export function fetchAllManufacturersFailure(error) {
  return {
    type: FETCH_ALL_MANUFACTURERS_FAILURE,
    error
  };
}
