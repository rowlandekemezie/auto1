import {
  FETCH_ALL_CARS,
  FETCH_ALL_CARS_SUCCESS,
  FETCH_ALL_CARS_FAILURE,
  FETCH_A_CAR,
  FETCH_A_CAR_SUCCESS,
  FETCH_A_CAR_FAILURE,
  SAVE_COLLECTION
} from "../../../redux/actions/actionTypes";

import { carActions } from "../../../redux/actions";

describe("Car actions", () => {
  it("should request for all cars", () => {
    const expectedValue = {
      type: FETCH_ALL_CARS,
      query: "page=1&color="
    };
    expect(carActions.fetchAllCars("page=1&color=")).toEqual(expectedValue);
  });

  it("should fetch all cars", () => {
    const expectedValue = {
      type: FETCH_ALL_CARS_SUCCESS,
      data: { cars: [], totalPageCount: 20 }
    };
    expect(
      carActions.fetchAllCarsSuccess({ cars: [], totalPageCount: 20 })
    ).toEqual(expectedValue);
  });

  it("should return error on failure to fetch cars", () => {
    const expectedValue = {
      type: FETCH_ALL_CARS_FAILURE,
      error: "Something went wrong"
    };
    expect(carActions.fetchAllCarsFailure("Something went wrong")).toEqual(
      expectedValue
    );
  });

  it("should request for a car", () => {
    const expectedValue = {
      type: FETCH_A_CAR,
      carId: "1234"
    };

    expect(carActions.fetchACar("1234")).toEqual(expectedValue);
  });

  it("should fetch a car", () => {
    const expectedValue = {
      type: FETCH_A_CAR_SUCCESS,
      data: { car: { stockName: "he" } }
    };
    expect(carActions.fetchACarSuccess({ car: { stockName: "he" } })).toEqual(
      expectedValue
    );
  });

  it("should return error on failure to fetch cars", () => {
    const expectedValue = {
      type: FETCH_A_CAR_FAILURE,
      error: "Something went wrong"
    };
    expect(carActions.fetchACarFailure("Something went wrong")).toEqual(
      expectedValue
    );
  });

  it("should save collection", () => {
    const expectedValue = {
      type: SAVE_COLLECTION,
      car: { stockNumber: 1324 }
    };
    expect(carActions.saveCollection({ stockNumber: 1324 })).toEqual(
      expectedValue
    );
  });
});
