import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { login } from "../../store/actions/authActions";
import { checkLocalStorage } from "../../config/localStorage";

// components
import AuthN from "./AuthN";
import AuthF from "./AuthF";

const Login = ({ history }) => {
  const check = checkLocalStorage("token");
  if (check === true) {
    history.push("/");
  }
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  // const { isAuthenticated, error } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     history.push("/home");
  //   }
  //   if (error) {
  //     console.log(error);
  //     dispatch(clearErrors());
  //   }
  // }, [dispatch, isAuthenticated, error, history]);

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(login(userName, password));
    history.push("/");
  };

  return (
    <div className="dad">
      <div className="sec1">
        <AuthN />
        <div className="lu">
          <form onSubmit={loginHandler}>
            <div className="dtls">
              <h1>LOG IN</h1>
              <p>
                <br />
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="/password-reset" id="fp">
              Forgot Password?
            </Link>
            <div className="buttons">
              <button type="submit">Login</button>
              <Link to="/signup">
                <button>Register</button>
              </Link>
            </div>
          </form>
        </div>
        <AuthF />
      </div>
    </div>
  );
};

export default Login;
