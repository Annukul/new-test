import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { newPost } from "../../../store/actions/postActions";

import Form from "./form";
import { checkLocalStorage } from "../../../config/localStorage";

// Css
import "./create.css";

// Icons and images
import arrow from "../../../assets/icons/arrow.png";

// import { getDataLocalStorage } from "../../config/localStorage";

const Create = ({ history }) => {
  const check = checkLocalStorage("token");
  if (!check) {
    history.push("/login");
  }

  const [file, setFile] = useState("");
  const [post, setPost] = useState({
    title: "",
    excrept: "",
    flair: [],
    description: "",
  });

  const { title, excrept, flair, description } = post;

  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  //   useEffect(() => {
  //     if (isAuthenticated) {
  //       history.push("/");
  //     }
  //   }, [isAuthenticated, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(newPost(title, excrept, flair, description));
    history.push("/");
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <div className="create_container">
      <div className="create-header">
        <div className="go-back-div">
          <button className="back-home-btn">
            <img src={arrow} className="icons" alt="Go back" />
            <Link to="/home">Go Back</Link>
          </button>
        </div>
        <h1>Create New Post</h1>
      </div>
      <div className="create">
        <div className="selected-img">
          {file && (
            <img
              className="selected-image-img"
              src={URL.createObjectURL(file)}
              alt="Selected"
            />
          )}
        </div>
        <div className="create-form-div">
          <Form
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setFile={setFile}
          />
        </div>
      </div>
    </div>
  );
};

export default Create;
