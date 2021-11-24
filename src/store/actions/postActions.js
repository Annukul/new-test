import axios from "axios";
import { API } from "../../config/API";
import {
  POST_UPLOAD_REQUEST,
  POST_UPLOAD_SUCCESS,
  POST_UPLOAD_FAIL,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
  CLEAR_ERRORS,
  GET_SINGLE_POST_SUCCESS,
  GET_SINGLE_POST_REQUEST,
  UPVOTE_SUCCESS,
  GET_SINGLE_POST_FAIL,
  UPVOTE_FAIL,
  DOWNVOTE_SUCCESS,
  DOWNVOTE_FAIL,
  ADD_COMMENT_SUCCESS,
  GET_COMMENT_SUCCESS,
  POST_UPDATE_SUCCESS,
} from "../postConstants";

import { getDataLocalStorage } from "../../config/localStorage";

// New post
export const newPost =
  (title, excrept, flair, description) => async (dispatch) => {
    try {
      dispatch({ type: POST_UPLOAD_REQUEST });

      const user_id = getDataLocalStorage("token").id;

      const { data } = await axios.post(`${API}/post/new`, {
        user_id,
        title,
        excrept,
        flair,
        description,
      });
      dispatch({ type: POST_UPLOAD_SUCCESS, payload: data.post });
    } catch (error) {
      dispatch({ type: POST_UPLOAD_FAIL, payload: error.message.data.message });
    }
  };

// Get single post
export const getSinglePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_POST_REQUEST });
    const { data } = await axios.get(`${API}/post/single/${id}`);
    dispatch({ type: GET_SINGLE_POST_SUCCESS, payload: data.post });
  } catch (error) {
    dispatch({ type: GET_SINGLE_POST_FAIL, payload: error.message });
  }
};

// Get all posts
export const getAllPosts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_POST_REQUEST });
    const { data } = await axios.get(`${API}/post/all/posts`);
    dispatch({ type: GET_POST_SUCCESS, payload: data.posts });
  } catch (error) {
    dispatch({ type: GET_POST_FAIL, payload: error.message.data.message });
  }
};

// Update post
export const updatPost =
  (post_id, title, excrept, flair, description) => async (dispatch) => {
    try {
      const { data } = await axios.patch(`${API}/post/update/${post_id}`, {
        title,
        excrept,
        flair,
        description,
      });
      dispatch({ type: POST_UPDATE_SUCCESS, payload: data.post });
    } catch (error) {
      console.log(error.message);
    }
  };

// Upvote post/:id/upvote
export const upvote = (id) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`${API}/post/${id}/upvote`);
    dispatch({ type: UPVOTE_SUCCESS, payload: data.post.upvote });
  } catch (error) {
    dispatch({ type: UPVOTE_FAIL, payload: error.message });
  }
};

// Downvote post/:id/downvote
export const downvote = (id) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`${API}/post/${id}/downvote`);
    dispatch({ type: DOWNVOTE_SUCCESS, payload: data.post.downvote });
  } catch (error) {
    dispatch({ type: DOWNVOTE_FAIL, payload: error.message });
  }
};

// Add comment
export const addComment = (user_id, post_id, comment) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${API}/comment/new/add`, {
      user_id,
      post_id,
      comment,
    });
    console.log(">>", data.comment);
    dispatch({ type: ADD_COMMENT_SUCCESS, payload: data.comment });
  } catch (error) {
    console.log(error.message);
  }
};

// Get all comments of a post
export const getComments = (post_id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API}/comment/single/${post_id}`);
    dispatch({ type: GET_COMMENT_SUCCESS, payload: data.comment });
  } catch (error) {
    console.log(error.message);
  }
};

// Clear errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
