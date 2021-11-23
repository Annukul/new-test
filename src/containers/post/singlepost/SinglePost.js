import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getSinglePost } from "../../../store/actions/postActions";

import Header from "../../common/Header";
import Post from "./Post";

import "./singlepost.css";

const SinglePost = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { post } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getSinglePost(id));
  }, [dispatch, id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <Post post={post} />
    </>
  );
};

export default SinglePost;
