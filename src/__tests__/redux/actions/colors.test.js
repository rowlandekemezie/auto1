import {
  FETCH_ALL_COLORS,
  FETCH_ALL_COLORS_SUCCESS,
  FETCH_ALL_COLORS_FAILURE
} from "../../../redux/actions/actionTypes";

import { colorActions } from "../../../redux/actions";

describe("Manufacturer actions", () => {
  it("should request for all colors", () => {
    const expectedValue = {
      type: FETCH_ALL_COLORS
    };
    expect(colorActions.fetchAllColors()).toEqual(expectedValue);
  });

  it("should fetch all COLORS", () => {
    const expectedValue = {
      type: FETCH_ALL_COLORS_SUCCESS,
      data: { colors: ["Red", "Green"] }
    };
    expect(
      colorActions.fetchAllColorsSuccess({ colors: ["Red", "Green"] })
    ).toEqual(expectedValue);
  });

  it("should return error on failure to fetch colors", () => {
    const expectedValue = {
      type: FETCH_ALL_COLORS_FAILURE,
      error: "Something went wrong"
    };
    expect(colorActions.fetchAllColorsFailure("Something went wrong")).toEqual(
      expectedValue
    );
  });
});
