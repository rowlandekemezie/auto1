import configureStore from "redux-mock-store";
import carReducer from "../../../redux/reducers/cars";
import createSagaMiddleware from "redux-saga";
import {
  FETCH_A_CAR,
  FETCH_ALL_CARS,
  FETCH_ALL_CARS_SUCCESS,
  FETCH_A_CAR_FAILURE,
  FETCH_ALL_CARS_FAILURE,
  FETCH_A_CAR_SUCCESS
} from "../../../redux/actions/actionTypes";

describe("Car Reducer", () => {
  const initialState = {
    cars: []
  };

  it("should return initial values", () => {
    expect(carReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_ALL_CARS and FETCH_A_CAR", () => {
    const expectValue = {
      isLoading: true,
      cars: []
    };
    expect(
      carReducer(undefined, {
        type: FETCH_ALL_CARS
      })
    ).toEqual(expectValue);

    expect(
      carReducer(initialState, {
        type: FETCH_A_CAR
      })
    ).toEqual(expectValue);
  });

  it("should handle FETCH_ALL_CARS_SUCCESS", () => {
    const expectedValue = {
      cars: [{}],
      totalPageCount: 2,
      isLoading: false
    };

    expect(
      carReducer(initialState, {
        type: FETCH_ALL_CARS_SUCCESS,
        data: { cars: [{}], totalPageCount: 2 }
      })
    ).toEqual(expectedValue);
  });

  it("should handle FETCH_ALL_CARS_FAILURE and FETCH_A_CAR_FAILURE", () => {
    const expectedValue = {
      error: "Something went wrong",
      isLoading: false
    };

    expect(
      carReducer(
        {},
        {
          type: FETCH_ALL_CARS_FAILURE,
          error: "Something went wrong"
        }
      )
    ).toEqual(expectedValue);
    expect(
      carReducer(
        {},
        {
          type: FETCH_A_CAR_FAILURE,
          error: "Something went wrong"
        }
      )
    ).toEqual(expectedValue);
  });

  it("should handle FETCH_A_CAR_SUCCESS ", () => {
    const expectedValue = {
      selectedCar: { stockNumber: 1, color: "red" },
      cars: [],
      isLoading: false
    };

    expect(
      carReducer(initialState, {
        type: FETCH_A_CAR_SUCCESS,
        data: { stockNumber: 1, color: "red" }
      })
    ).toEqual(expectedValue);
  });
});
