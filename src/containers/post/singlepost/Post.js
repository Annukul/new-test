import React, { useState, useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  addComment,
  getComments,
  postDelete,
} from "../../../store/actions/postActions";
import { getDataLocalStorage } from "../../../config/localStorage";
import Comment from "./comment";

// Icons
import like from "../../../assets/icons/like.png";
import bin from "../../../assets/icons/bin.png";
import edit from "../../../assets/icons/editing.png";

import code from "../../../assets/images/code.jpg";
import profile from "../../../assets/icons/profile.png";

const Post = ({ post, history }) => {
  const dispatch = useDispatch();
  const [commentt, setCommentt] = useState("");
  const [user, setUser] = useState(true);
  // const [deleted, setDeleted] = useState(false);

  const user_id = getDataLocalStorage("token").id;
  const post_id = post._id;

  const comments = useSelector((state) => state.comments);
  const { comment } = comments;

  useEffect(() => {
    if (post.user_id !== user_id) setUser(false);
  }, []);

  useEffect(() => {
    dispatch(getComments(post_id));
  }, [dispatch, post_id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment(user_id, post_id, commentt));
  };

  const deletePost = () => {
    dispatch(postDelete(post_id));
    history.push("/");
  };

  if (!post.flair) {
    return <div>Loading...</div>;
  }
  if (!comment) {
    return <div>Loading...</div>;
  }
  return (
    <main className="single_post" id="signle_post">
      <div className="single-post-left">
        <aside>
          <ul>
            <li>
              <Link to="#">
                <img src={like} alt="Icon" className="icons-bg" />
              </Link>
            </li>
            <li>
              <br />
            </li>
            {user ? (
              <>
                <li>
                  <Link to="#" onClick={deletePost}>
                    <img src={bin} alt="Icon" className="icons-bg" />
                  </Link>
                </li>
                <li>
                  <br />
                </li>
                <li>
                  <Link to={`/edit/${post._id}`}>
                    <img src={edit} alt="Icon" className="icons-bg" />
                  </Link>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
        </aside>
      </div>
      <div className="single-post-content">
        <div className="single-post-content-img">
          <img src={code} alt="Code" />
        </div>
        <div className="single-post-content-text">
          <div className="date-posted">
            <p>{moment(post.createdAt).format("MMM Do YY")}</p>
          </div>
          <div className="single-post-head">
            <h1>{post.title}</h1>
          </div>
          <div className="post-flairs">
            {post.flair.map((fl) => {
              return (
                <Link to="" className="post-flair-btn grey-btn" key={fl}>
                  #{fl}
                </Link>
              );
            })}
          </div>
          <div className="single-post-para">
            <p>{post.description}</p>
          </div>
          <hr />
          <p>
            <br />
          </p>
          <div className="comment-section">
            <h2>Comments</h2>
            <p>
              <br />
            </p>
            <form className="comment-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="comment"
                onChange={(e) => setCommentt(e.target.value)}
              />
              <button type="submit" className="comment-btn">
                Add
              </button>
            </form>
            <p>
              <br />
            </p>
            <div className="comments">
              {comment
                ? comment.map((com) => {
                    return <Comment com={com} />;
                  })
                : ""}
            </div>
          </div>
        </div>
      </div>
      <div className="single-post-right">
        <div className="single-post-right-author-info">
          <div className="author-info">
            <span>
              <img src={profile} alt="Author profile" className="profile-img" />
            </span>
            <span>
              <p>Annukul</p>
            </span>
          </div>
          <p>
            <br />
          </p>
          <div className="author-about">
            <p className="author-light">
              Hi! I am a full-stack developer based in delhi.
            </p>
          </div>
          <p>
            <br />
          </p>
          <div className="author-details">
            <ul>
              <li>
                <h5>Location</h5>
                <p className="author-light">Delhi</p>
              </li>
              <p>
                <br />
              </p>
              <li>
                <h5>Email</h5>
                <p className="author-light">annukul@gmail.com</p>
              </li>
            </ul>
          </div>
          <div className="author-actions">
            <button className="author-view-profile author-action-btn">
              Profile
            </button>
            <button className="author-follow author-action-btn">Follow</button>
          </div>
        </div>
        <p>
          <br />
        </p>
        <div className="single-post-right-author-more">
          <div className="author-more-head">
            <h4>More from Annukul</h4>
          </div>
          <div className="auhtor-more-posts">
            <div className="author-more-post-head">
              <Link to="#">
                <h5>Javascript is "not" easy.</h5>
              </Link>
              <span className="author-light author-more-time">15 days ago</span>
            </div>
            <div className="author-more-post-head">
              <Link to="#">
                <h5>5 tricks in react you should know.</h5>
              </Link>
              <span className="author-light author-more-time">7 days ago</span>
            </div>
            <div className="author-more-post-head">
              <Link to="#">
                <h5>Every developer should read this book.</h5>
              </Link>
              <span className="author-light author-more-time">9 days ago</span>
            </div>
            <div className="author-more-post-head">
              <Link to="#">
                <h5>Why college doesn't matter for a developer.</h5>
              </Link>
              <span className="author-light author-more-time">11 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Post;
