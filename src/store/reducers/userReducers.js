import {
  ADD_USER_DETAILS_REQUEST,
  ADD_USER_DETAILS_SUCCESS,
} from "../userConstants";

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.payload) {
    case ADD_USER_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case ADD_USER_DETAILS_SUCCESS:
      return {
        user: action.payload,
      };
    default:
      return state;
  }
};
