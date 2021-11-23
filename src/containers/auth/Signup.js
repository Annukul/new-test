import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";
import { register } from "../../store/actions/authActions";

import { checkLocalStorage } from "../../config/localStorage";

import "./auth.css";

// components
import AuthNavbar from "./AuthNavbar";
import AuthFooter from "./AuthFooter";

const Signup = ({ history }) => {
  const check = checkLocalStorage("token");
  if (check) {
    <Redirect from="/signup" to="/" />;
  }
  const [user, setUser] = useState({
    userName: "",
    fullName: "",
    emailId: "",
    password: "",
    confirmPassword: "",
  });

  const { userName, fullName, emailId, password, confirmPassword } = user;

  const dispatch = useDispatch();

  // const { isAuthenticated } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return console.log("Password Dosent match");
    }
    dispatch(register(userName, fullName, emailId, password));
    history.push("/cc");
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="dad">
      <div className="sec1">
        <AuthNavbar />
        <div className="su">
          <form onSubmit={handleSubmit}>
            <div className="dtls">
              <h1>SIGN UP</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <input
              type="text"
              name="userName"
              placeholder="Username"
              onChange={onChange}
            />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={onChange}
            />
            <input
              type="email"
              name="emailId"
              placeholder="Email"
              onChange={onChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              onChange={onChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={onChange}
            />
            <div className="buttons">
              <button type="submit">Register</button>
              <Link to="/login">
                <button>Login</button>
              </Link>
            </div>
          </form>
        </div>
        <AuthFooter />
      </div>
    </div>
  );
};

export default Signup;
