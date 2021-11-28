import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { addUserDetails } from "../../../store/actions/userActions";
import {
  checkLocalStorage,
  getDataLocalStorage,
} from "../../../config/localStorage";
import { getUserDetails } from "../../../store/actions/userActions";

import Form from "./form";
import arrow from "../../../assets/icons/arrow.png";
import "./complete.css";

const CompleteProfile = ({ history }) => {
  const check = checkLocalStorage("token");
  if (!check) {
    history.push("/login");
  }
  // const user_id = getDataLocalStorage("token").id;

  const dispatch = useDispatch();
  const [details, setDetails] = useState({
    collegeName: "",
    collegeBranch: "",
    collegeRollNo: "",
    from: "",
    to: "",
    about: "",
    skills: "",
    dob: "",
    professionalEmailId: "",
    phoneNumber: "",
    twitter: "",
    linkedin: "",
    currentCity: "",
    currentState: "",
  });

  const {
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
    currentCity,
    currentState,
  } = details;

  const handleSubmit = (e) => {
    dispatch(
      addUserDetails(
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
        currentCity,
        currentState
      )
    );
    e.preventDefault();
    history.push("/profile");
  };

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <div className="create_container">
      <div className="create-header">
        <div className="go-back-div">
          <button className="back-home-btn">
            <img src={arrow} className="icons" alt="Go back" />
            Go Back
          </button>
        </div>
        <p>
          <br />
        </p>
        <h1>Complete your profile</h1>
        <p>
          <br />
        </p>
      </div>
      <div className="create">
        <div className="create-form-div">
          <Form handleSubmit={handleSubmit} handleChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default CompleteProfile;
