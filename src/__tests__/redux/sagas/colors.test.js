import { call, put } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import watchColorSagas, { fetchColors } from "../../../redux/sagas/colors";
import { apiCall } from "../../../redux/api";

describe("Color Sagas", () => {
  it("should fetch colors", () => {
    const gen = fetchColors();
    const fakeColors = {
      colors: ["Red", "Yellow"]
    };
    return expectSaga(fetchColors, apiCall)
      .provide([[matchers.call.fn(apiCall), fakeColors]])
      .put({ type: "FETCH_ALL_COLORS_SUCCESS", data: fakeColors })
      .dispatch({ type: "FETCH_ALL_COLORS" })
      .run();
  });

  it("should handle error", () => {
    const error = new Error("error");

    return expectSaga(fetchColors, apiCall)
      .provide([[matchers.call.fn(apiCall), throwError(error)]])
      .put({ type: "FETCH_ALL_COLORS_FAILURE", error })
      .dispatch({ type: "FETCH_ALL_COLORS" })
      .run();
  });
});
