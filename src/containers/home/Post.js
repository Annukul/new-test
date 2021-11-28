import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useDispatch } from "react-redux";

import { upvote, downvote } from "../../store/actions/postActions";

// Icons
import profile from "../../assets/icons/profile.png";
import upvoteicon from "../../assets/icons/upvote.png";
// import downvoteicon from "../../assets/icons/downvote.png";
import ribbon from "../../assets/icons/ribbon.png";

const Post = ({ post, history }) => {
  // console.log(post);
  const dispatch = useDispatch();
  const [uvote, setUvote] = useState(post.upvote);
  const [dvote, setDvote] = useState(post.downvote);

  const doUpvote = () => {
    dispatch(upvote(post._id));
    setUvote(post.upvote + 1);
  };

  const doDownvote = () => {
    dispatch(downvote(post._id));
    setDvote(post.downvote + 1);
  };

  return (
    <>
      {/* <Link to={`/view/${post._id}`} className="post-link" key={post._id}> */}
      <div className="post">
        <div className="post-author-info">
          <div className="post-author-img">
            <Link to="" className="post-author-profile-link">
              <img src={profile} alt="Author profile" />
            </Link>
          </div>
          <div className="post-author-name">
            <button className="post-author-hover-btn">Annukul</button>
            <Link to="" className="post-timings">
              <time dateTime="">{moment(post.createdAt).fromNow()}</time>
            </Link>
          </div>
        </div>
        <div className="post-desc">
          <h2 className="post-desc-head">
            <Link to={`/view/${post._id}`} className="post-heading-link">
              <span>{post.title}</span>
            </Link>
          </h2>
          <div className="post-flairs">
            {post.flair.map((fl) => {
              return (
                <Link to="" className="post-flair-btn grey-btn" key={fl}>
                  #{fl}
                </Link>
              );
            })}
          </div>
          <div className="post-actions">
            <div className="post-actions-left">
              <Link to="" className="post-actions-like">
                <button onClick={doUpvote} className="vote-btns">
                  <img
                    src={upvoteicon}
                    alt="icon"
                    className="icons upvote-btn"
                  />
                </button>
                <span className="post-like-count">{uvote}</span>
              </Link>
              <Link to="" className="post-actions-like">
                <button onClick={doDownvote} className="vote-btns">
                  <img
                    src={upvoteicon}
                    alt="icon"
                    className="icons downvote-icon"
                  />
                </button>
                <span className="post-comment-count">{dvote}</span>
              </Link>
            </div>
            <div className="post-actions-right">
              <Link to="" className="post-actions-save">
                <img src={ribbon} alt="icon" className="icons" />
                <span className="post-save-desc">Save</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </>
  );
};

export default Post;
