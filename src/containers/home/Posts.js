import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Post from "./Post";

const Posts = ({ history }) => {
  const { posts } = useSelector((state) => state.posts);

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="content white">
        <div className="content-options">
          <Link to="" className="content-options-btn">
            Feed
          </Link>
          <Link to="" className="content-options-btn">
            Latest
          </Link>
          <Link to="" className="content-options-btn">
            Top
          </Link>
        </div>
        <div className="posts">
          {posts.map((post) => {
            return <Post post={post} key={post._id} history={history} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Posts;
