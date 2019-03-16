import {
  FETCH_ALL_COLORS,
  FETCH_ALL_COLORS_SUCCESS,
  FETCH_ALL_COLORS_FAILURE
} from "./actionTypes";

export function fetchAllColors() {
  return {
    type: FETCH_ALL_COLORS
  };
}

export function fetchAllColorsSuccess(data) {
  return {
    type: FETCH_ALL_COLORS_SUCCESS,
    data
  };
}

export function fetchAllColorsFailure(error) {
  return {
    type: FETCH_ALL_COLORS_FAILURE,
    error
  };
}
