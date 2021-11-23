import {
  POST_UPLOAD_REQUEST,
  POST_UPLOAD_SUCCESS,
  POST_UPLOAD_FAIL,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
  GET_SINGLE_POST_REQUEST,
  GET_SINGLE_POST_SUCCESS,
  GET_SINGLE_POST_FAIL,
  CLEAR_ERRORS,
  UPVOTE_SUCCESS,
  UPVOTE_FAIL,
  DOWNVOTE_SUCCESS,
  DOWNVOTE_FAIL,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FAIL,
  POST_UPDATE_SUCCESS,
} from "../postConstants";

export const postReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case POST_UPLOAD_REQUEST:
    case GET_POST_REQUEST:
    case GET_POST_REQUEST:
    case GET_SINGLE_POST_REQUEST:
      return {
        loading: true,
      };
    case POST_UPLOAD_SUCCESS:
    case GET_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        isUploaded: true,
        posts: action.payload,
      };
    case GET_POST_SUCCESS:
      return {
        posts: action.payload,
      };
    case UPVOTE_SUCCESS:
      return {
        upvote: action.payload,
      };
    case DOWNVOTE_SUCCESS:
      return {
        downvote: action.payload,
      };
    case GET_SINGLE_POST_SUCCESS:
      return {
        post: action.payload,
      };
    case POST_UPDATE_SUCCESS:
      return {
        post: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const commentReducers = (state = { comment: [] }, action) => {
  switch (action.type) {
    case ADD_COMMENT_SUCCESS:
      return {
        comment: action.payload,
      };
    case GET_COMMENT_SUCCESS:
      return {
        comment: action.payload,
      };
    default:
      return state;
  }
};
