import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logout } from "../../store/actions/authActions";

import logo from "../../assets/icons/logo.png";
import search from "../../assets/icons/search.png";
import profile from "../../assets/icons/profile.png";

import "../../index.css";

const Header = () => {
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout("token"));
  };

  return (
    <header>
      <div className="logo_search">
        <Link to="/home">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <form>
          <div className="search-div">
            <input
              type="search"
              name="header-search"
              placeholder="Search..."
              className="search-input"
            />
            <button type="submit" className="search-btn">
              <img className="search-img" src={search} alt="search-icon" />
            </button>
          </div>
        </form>
      </div>
      <div className="profile_create">
        <Link to="/create" className="create-btn">
          Create Post
        </Link>
        <button onClick={logoutUser} className="logout">
          Logout
        </button>
        <Link to="/profile" className="profile-icon">
          <img className="profile-img" src={profile} alt="profile" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
