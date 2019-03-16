import {
  FETCH_ALL_MANUFACTURERS_SUCCESS,
  FETCH_ALL_MANUFACTURERS,
  FETCH_ALL_MANUFACTURERS_FAILURE
} from "../actions/actionTypes";

const initState = {
  manufacturers: []
};

// Filter company by name.
const filterManufacturerByName = ({ data }) =>
  data.manufacturers.map(manufacturer => manufacturer.name);

export default function(state = initState, action) {
  switch (action.type) {
    case FETCH_ALL_MANUFACTURERS:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_ALL_MANUFACTURERS_SUCCESS:
      return {
        ...state,
        manufacturers: filterManufacturerByName(action),
        isLoading: false
      };
    case FETCH_ALL_MANUFACTURERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}
