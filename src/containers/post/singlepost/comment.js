import React from "react";

const Comment = ({ com }) => {
  return (
    <div key={com._id}>
      <p>{com.comment}</p>
    </div>
  );
};

export default Comment;
