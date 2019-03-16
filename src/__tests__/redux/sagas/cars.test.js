import { call, put } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import watchCarSagas, { fetchCar, fetchCars } from "../../../redux/sagas/cars";
import { apiCall } from "../../../redux/api";

describe("Car Sagas", () => {
  it("should fetch cars", () => {
    const fakeCars = {
      cars: [{ stockNumber: 1, mileage: { number: 345 } }]
    };

    const query = "?page=2";
    const gen = fetchCars({ query });
    expect(gen.next(query).value).toEqual(call(apiCall, `/cars/?${query}`));
    expect(gen.next(fakeCars).value).toEqual(
      put({ type: "FETCH_ALL_CARS_SUCCESS", data: fakeCars })
    );
  });

  it("should handle error", () => {
    const error = new Error("error");
    return expectSaga(fetchCars, apiCall)
      .provide([[matchers.call.fn(apiCall), throwError(error)]])
      .put({ type: "FETCH_ALL_CARS_FAILURE", error })
      .dispatch({ type: "FETCH_ALL_CARS", query: "`?page=4" })
      .run();
  });
});
