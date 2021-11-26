import axios from "axios";
import { API } from "../../config/API";
import {
  ADD_USER_DETAILS_REQUEST,
  ADD_USER_DETAILS_SUCCESS,
} from "../userConstants";

import { getDataLocalStorage } from "../../config/localStorage";

export const addUserDetails =
  (
    collegeName,
    collegeBranch,
    collegeRollNo,
    from,
    to,
    about,
    skills,
    dob,
    professionalEmailId,
    phoneNumber,
    twitter,
    linkedin,
    currentState,
    currentCity
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: ADD_USER_DETAILS_REQUEST });
      const user_id = getDataLocalStorage("token").id;
      const { data } = await axios.post(`${API}/user/addUserDetails`, {
        user_id,
        collegeDetail: {
          collegeName,
          collegeBranch,
          collegeRollNo,
          courseDuration: {
            from,
            to,
          },
        },
        about,
        skills,
        dob,
        contacts: {
          professionalEmailId,
          phoneNumber,
        },
        socialLinks: {
          twitter,
          linkedin,
        },
        address: {
          currentState,
          currentCity,
        },
      });
      console.log(data);
      dispatch({ type: ADD_USER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
