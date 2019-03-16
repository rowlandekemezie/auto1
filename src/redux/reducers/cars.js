import {
  FETCH_ALL_CARS_SUCCESS,
  FETCH_ALL_CARS,
  FETCH_ALL_CARS_FAILURE,
  FETCH_A_CAR_SUCCESS,
  FETCH_A_CAR,
  FETCH_A_CAR_FAILURE,
  SAVE_COLLECTION
} from "../actions/actionTypes";

import { saveCollectionToLocalStorage } from "../../utils";

const initialState = {
  cars: []
};

const allCarsFilter = ({ data }) => {
  return {
    cars: data.cars,
    totalPageCount: data.totalPageCount
  };
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_CARS:
    case FETCH_A_CAR:
      return { ...state, isLoading: true };
    case FETCH_ALL_CARS_SUCCESS:
      return {
        ...state,
        ...allCarsFilter(action),
        isLoading: false
      };

    case FETCH_A_CAR_SUCCESS:
      return {
        ...state,
        selectedCar: action.data,
        isLoading: false
      };
    case FETCH_ALL_CARS_FAILURE:
    case FETCH_A_CAR_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case SAVE_COLLECTION:
      return {
        ...state,
        collection: saveCollectionToLocalStorage(action.car)
      };
    default:
      return state;
  }
}
