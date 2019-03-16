import {
  FETCH_ALL_COLORS_SUCCESS,
  FETCH_ALL_COLORS,
  FETCH_ALL_COLORS_FAILURE
} from "../actions/actionTypes";

const initialState = {
  colors: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_COLORS:
      return { ...state, isLoading: true };
    case FETCH_ALL_COLORS_SUCCESS:
      return {
        ...state,
        colors: action.data.colors,
        isLoading: false
      };
    case FETCH_ALL_COLORS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}
