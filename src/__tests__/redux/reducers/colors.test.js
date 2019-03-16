import colorReducer from "../../../redux/reducers/colors";

import {
  FETCH_ALL_COLORS,
  FETCH_ALL_COLORS_FAILURE,
  FETCH_ALL_COLORS_SUCCESS
} from "../../../redux/actions/actionTypes";

describe("Color Reducer", () => {
  const initialState = {
    colors: []
  };

  it("should return initial values", () => {
    expect(colorReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_ALL_COLORS", () => {
    const expectValue = {
      isLoading: true,
      colors: []
    };
    expect(
      colorReducer(initialState, {
        type: FETCH_ALL_COLORS
      })
    ).toEqual(expectValue);
  });

  it("should handle FETCH_ALL_COLOR_SUCCESS", () => {
    const expectedValue = {
      colors: [{}],
      isLoading: false
    };

    expect(
      colorReducer(initialState, {
        type: FETCH_ALL_COLORS_SUCCESS,
        data: { colors: [{}] }
      })
    ).toEqual(expectedValue);
  });
});
