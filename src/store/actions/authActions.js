import axios from "axios";
import { API } from "../../config/API";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_ERRORS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from "../authConstants";
import { saveToken } from "../../config/localStorage";

// Login
export const login = (userName, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${API}/auth/login`,
      { userName, password },
      config
    );
    saveToken("token", data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

// Logout user
export const logout = (name) => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT_REQUEST });
    await axios.post(`${API}/auth/logout`);
    localStorage.removeItem(name);
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
  }
};

// Register User
export const register =
  (userName, fullName, emailId, password) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_REQUEST });
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${API}/auth/signup`,
        { userName, fullName, emailId, password },
        config
      );
      saveToken("token", data.token);
      dispatch({ type: REGISTER_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({ type: REGISTER_FAIL, payload: error.response.data.message });
    }
  };

// Get user data  getuser/single
export const getUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });
    const { data } = await axios.get(`${API}/getuser/single/${id}`);
    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });
    const { data } = await axios.get(`${API}/auth/me`);
    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};

// Clear Error
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
