import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/icons/logo.png";
import notification from "../../assets/icons/notification.png";
import search from "../../assets/icons/search.png";
import profile from "../../assets/icons/profile.png";

const Header = () => {
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
        <Link to="" className="notification-icon">
          <img
            className="notification-img"
            src={notification}
            alt="notification"
          />
        </Link>
        <Link to="/profile" className="profile-icon">
          <img className="profile-img" src={profile} alt="profile" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
