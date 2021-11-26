import React from "react";
import { Link } from "react-router-dom";

import "../profile.css";

// icons
import profile from "../../../assets/icons/profile.png";
import like from "../../../assets/icons/like.png";
import comment from "../../../assets/icons/comment.png";
import ribbon from "../../../assets/icons/ribbon.png";

const Posts = () => {
  return (
    <>
      <h2>Posts</h2>
      <p>
        <br />
      </p>
      <div class="post">
        <div class="post-author-info">
          <div class="post-author-img">
            <Link to="" class="post-author-profile-link">
              <img src={profile} alt="Author profile" />
            </Link>
          </div>
          <div class="post-author-name">
            <button class="post-author-hover-btn">Annukul</button>
            <Link to="" class="post-timings">
              <time datetime="">Oct 5 (12 days ago)</time>
            </Link>
          </div>
        </div>
        <div class="post-desc">
          <h2 class="post-desc-head">
            <Link to="" class="post-heading-link">
              <span>AI - The most important part of the future</span>
            </Link>
          </h2>
          <div class="post-flairs">
            <Link to="#" class="post-flair-btn grey-btn">
              #programming
            </Link>
            <Link to="#" class="post-flair-btn grey-btn">
              #askforhelp
            </Link>
            <Link to="#" class="post-flair-btn blue-btn">
              #react
            </Link>
            <Link to="#" class="post-flair-btn yellow-btn">
              #javascript
            </Link>
          </div>
          <div class="post-actions">
            <div class="post-actions-left">
              <Link to="#" class="post-actions-like">
                <img src={like} class="icons" />
                <span class="post-like-count">3</span>
              </Link>
              <Link to="#" class="post-actions-comment">
                <img src={comment} class="icons" />
                <span class="post-comment-count">3</span>
              </Link>
            </div>
            <div class="post-actions-right">
              <Link to="#" class="post-actions-save">
                <img src={ribbon} class="icons" />
                <span class="post-save-desc">Save</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p>
        <br />
      </p>
      <div class="post">
        <div class="post-author-info">
          <div class="post-author-img">
            <Link to="" class="post-author-profile-link">
              <img src={profile} alt="Author profile" />
            </Link>
          </div>
          <div class="post-author-name">
            <button class="post-author-hover-btn">Annukul</button>
            <Link to="" class="post-timings">
              <time datetime="">Oct 5 (12 days ago)</time>
            </Link>
          </div>
        </div>
        <div class="post-desc">
          <h2 class="post-desc-head">
            <Link to="" class="post-heading-link">
              <span>AI - The most important part of the future</span>
            </Link>
          </h2>
          <div class="post-flairs">
            <Link to="#" class="post-flair-btn grey-btn">
              #programming
            </Link>
            <Link to="#" class="post-flair-btn grey-btn">
              #askforhelp
            </Link>
            <Link to="#" class="post-flair-btn blue-btn">
              #react
            </Link>
            <Link to="#" class="post-flair-btn yellow-btn">
              #javascript
            </Link>
          </div>
          <div class="post-actions">
            <div class="post-actions-left">
              <Link to="#" class="post-actions-like">
                <img src={like} class="icons" />
                <span class="post-like-count">3</span>
              </Link>
              <Link to="#" class="post-actions-comment">
                <img src={comment} class="icons" />
                <span class="post-comment-count">3</span>
              </Link>
            </div>
            <div class="post-actions-right">
              <Link to="#" class="post-actions-save">
                <img src={ribbon} class="icons" />
                <span class="post-save-desc">Save</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p>
        <br />
      </p>
      <div class="post">
        <div class="post-author-info">
          <div class="post-author-img">
            <Link to="" class="post-author-profile-link">
              <img src={profile} alt="Author profile" />
            </Link>
          </div>
          <div class="post-author-name">
            <button class="post-author-hover-btn">Annukul</button>
            <Link to="" class="post-timings">
              <time datetime="">Oct 5 (12 days ago)</time>
            </Link>
          </div>
        </div>
        <div class="post-desc">
          <h2 class="post-desc-head">
            <Link to="" class="post-heading-link">
              <span>AI - The most important part of the future</span>
            </Link>
          </h2>
          <div class="post-flairs">
            <Link to="#" class="post-flair-btn grey-btn">
              #programming
            </Link>
            <Link to="#" class="post-flair-btn grey-btn">
              #askforhelp
            </Link>
            <Link to="#" class="post-flair-btn blue-btn">
              #react
            </Link>
            <Link to="#" class="post-flair-btn yellow-btn">
              #javascript
            </Link>
          </div>
          <div class="post-actions">
            <div class="post-actions-left">
              <Link to="#" class="post-actions-like">
                <img src={like} class="icons" />
                <span class="post-like-count">3</span>
              </Link>
              <Link to="#" class="post-actions-comment">
                <img src={comment} class="icons" />
                <span class="post-comment-count">3</span>
              </Link>
            </div>
            <div class="post-actions-right">
              <Link to="#" class="post-actions-save">
                <img src={ribbon} class="icons" />
                <span class="post-save-desc">Save</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
