import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { checkLocalStorage } from "../../../config/localStorage";
import { updatPost, getSinglePost } from "../../../store/actions/postActions";

import Form from "./form";
import "./create.css";
import arrow from "../../../assets/icons/arrow.png";

const Edit = ({ history }) => {
  const dispatch = useDispatch();

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

  const location = useLocation();
  const post_id = location.pathname.split("/")[2];

  const postf = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getSinglePost(post_id));
  }, [dispatch, post_id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatPost(post_id, title, excrept, flair, description));
    history.push(`/view/${post_id}`);
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
        <h1>Update post</h1>
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
            postf={postf}
          />
        </div>
      </div>
    </div>
  );
};

export default Edit;
