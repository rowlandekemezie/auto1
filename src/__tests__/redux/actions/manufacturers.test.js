import {
  FETCH_ALL_MANUFACTURERS,
  FETCH_ALL_MANUFACTURERS_SUCCESS,
  FETCH_ALL_MANUFACTURERS_FAILURE
} from "../../../redux/actions/actionTypes";

import { manufacturerActions } from "../../../redux/actions";

describe("Manufacturer actions", () => {
  it("should request for all manufacturers", () => {
    const expectedValue = {
      type: FETCH_ALL_MANUFACTURERS
    };
    expect(manufacturerActions.fetchAllManufacturers()).toEqual(expectedValue);
  });

  it("should fetch all manufacturers", () => {
    const expectedValue = {
      type: FETCH_ALL_MANUFACTURERS_SUCCESS,
      data: { manufacturers: [{ name: "BMW" }] }
    };
    expect(
      manufacturerActions.fetchAllManufacturersSuccess({
        manufacturers: [{ name: "BMW" }]
      })
    ).toEqual(expectedValue);
  });

  it("should return error on failure to fetch manufacturers", () => {
    const expectedValue = {
      type: FETCH_ALL_MANUFACTURERS_FAILURE,
      error: "Something went wrong"
    };
    expect(
      manufacturerActions.fetchAllManufacturersFailure("Something went wrong")
    ).toEqual(expectedValue);
  });
});
