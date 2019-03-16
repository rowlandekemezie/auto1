import manufacturerReducer, {
  filterManufacturerByName
} from "../../../redux/reducers/manufacturers";

import {
  FETCH_ALL_MANUFACTURERS,
  FETCH_ALL_MANUFACTURERS_FAILURE,
  FETCH_ALL_MANUFACTURERS_SUCCESS
} from "../../../redux/actions/actionTypes";

describe("Color Reducer", () => {
  const initialState = {
    manufacturers: []
  };

  it("should return initial values", () => {
    expect(manufacturerReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_ALL_MANUFACTURERS", () => {
    const expectValue = {
      isLoading: true,
      manufacturers: []
    };
    expect(
      manufacturerReducer(initialState, {
        type: FETCH_ALL_MANUFACTURERS
      })
    ).toEqual(expectValue);
  });

  it("should handle FETCH_ALL_MANUFACTURERS_SUCCESS", () => {
    const expectedValue = {
      manufacturers: ["BMW"],
      isLoading: false
    };

    expect(
      manufacturerReducer(initialState, {
        type: FETCH_ALL_MANUFACTURERS_SUCCESS,
        data: { manufacturers: [{ name: "BMW" }] }
      })
    ).toEqual(expectedValue);
  });

  it("should filter manufacture by name", () => {
    expect(
      filterManufacturerByName({
        data: { manufacturers: [{ name: "BMW" }] }
      })
    ).toEqual(["BMW"]);
  });
});
