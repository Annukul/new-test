import React, { useState } from "react";

import avatar from "../../../assets/icons/profile.png";
import bin from "../../../assets/icons/bin.png";

import { getDataLocalStorage } from "../../../config/localStorage";

const Comment = ({ com }) => {
  const user_id = getDataLocalStorage("token").id;
  return (
    <div className="single_post_comment" key={com._id}>
      <div>
        <div className="comment_avatar">
          <img
            src={avatar}
            alt="avatar"
            style={{ height: "35px", width: "35px" }}
          />
          <small>Ron</small>
          {com.user_id === user_id && (
            <button
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <img src={bin} alt="bin" className="icons" />
            </button>
          )}
        </div>
        <p>{com.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
