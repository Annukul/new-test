import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./auth.css";

const AuthN = () => {
  return (
    <Fragment>
      {/* <input type="checkbox" name="" id="barcheck" /> */}
      <i id="cross" className="fas fa-times"></i>
      <i id="bar" className="fas fa-bars"></i>
      <div className="nav">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/help">
            <li>Help</li>
          </Link>
        </ul>
      </div>
    </Fragment>
  );
};

export default AuthN;
