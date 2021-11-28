import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Header from "../common/Header";
import Sidebar from "./Sidebar";
import Posts from "./Posts";
import Updates from "./Updates";

// CSS
import "./home.css";

import {
  getDataLocalStorage,
  checkLocalStorage,
} from "../../config/localStorage";
import { getUser } from "../../store/actions/authActions";
import { getAllPosts } from "../../store/actions/postActions";

const Home = ({ history }) => {
  const check = checkLocalStorage("token");
  if (!check) {
    history.push("/login");
  }
  const data = getDataLocalStorage("token");

  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  useEffect(() => {
    const getUserDetails = async () => {
      if (isAuthenticated) {
        dispatch(getUser(data._id));
      }
    };
    getUserDetails();
  }, [dispatch, data._id, isAuthenticated]);

  // const logoutHandler = async (e) => {
  //   e.preventDefault();
  //   dispatch(logout("token"));
  // };

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <Posts history={history} />
        <Updates />
      </div>
    </>
  );
};

export default Home;
