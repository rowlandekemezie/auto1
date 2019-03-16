import { call, put } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { fetchManufacturers } from "../../../redux/sagas/manufacturers";
import { apiCall } from "../../../redux/api";

describe("Manufacturer Sagas", () => {
  it("should fetch manufacturers", () => {
    const fakeManufacturers = {
      colors: [{ name: "BMW" }]
    };
    return expectSaga(fetchManufacturers, apiCall)
      .provide([[matchers.call.fn(apiCall), fakeManufacturers]])
      .put({ type: "FETCH_ALL_MANUFACTURERS_SUCCESS", data: fakeManufacturers })
      .dispatch({ type: "FETCH_ALL_MANUFACTURERS" })
      .run();
  });

  it("should handle error", () => {
    const error = new Error("error");
    return expectSaga(fetchManufacturers, apiCall)
      .provide([[matchers.call.fn(apiCall), throwError(error)]])
      .put({ type: "FETCH_ALL_MANUFACTURERS_FAILURE", error })
      .dispatch({ type: "FETCH_ALL_MANUFACTURERS" })
      .run();
  });
});
