import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import { API } from "../../config/API";

// components
import AuthNavbar from "./AuthNavbar";
import AuthFooter from "./AuthFooter";

const ConfirmAccount = ({ history }) => {
  const divStyles = {
    display: "flex",
    width: "100vw",
    alignItems: "center",
    justifyContent: "center",
  };

  const buttonStyles = {
    width: "80px",
    height: "30px",
    background: "rgb(211, 146, 60);",
    cursor: "pointer",
  };

  const [status, setStatus] = useState("");

  const location = useLocation();
  const verificationcode = location.pathname.split("/")[2];

  const verify = async () => {
    await axios.post(`${API}/auth/confirm/${verificationcode}`);
    setStatus(true);
    setTimeout(() => {
      history.push("/");
    }, 3000);
  };

  return (
    <>
      <AuthNavbar />
      <div className="lu">
        <div style={divStyles}>
          <button style={buttonStyles} onClick={verify}>
            Verify
          </button>
          <p>
            <br />
          </p>
          {status ? (
            <div>
              <p>Thanks for confirming your email.</p>
              <p>
                <br />
              </p>
              <p>Redirecting you to home page</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <AuthFooter />
    </>
  );
};

export default ConfirmAccount;
