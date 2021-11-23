import React from "react";
import { Link } from "react-router-dom";

const Updates = () => {
  return (
    <div className="updates white">
      <aside>
        <div className="primary-update">
          <h4 className="primary-update-head">
            <Link to="">
              <strong>MDU says colleges will open from 15th november.</strong>
            </Link>
          </h4>
          <p>
            <br />
          </p>
          <p className="primary-update-para">
            MDU said in an news article that all the colleges, both private and
            governmant, will open from 15th of November 2021. Students are more
            than happy to know that they will no longer have to attend online
            classNamees.
          </p>
          <Link to="" className="primary-update-link">
            Know more
          </Link>
        </div>
        <section className="secondary-updates">
          <nav className="secobdary-updates-nav">
            <h4>
              <Link to=""> #news </Link>
            </h4>
          </nav>
          <div className="secondary-updates-content">
            <Link to="" className="secondary-updates-content-link">
              Deepfake HTTP v11.0.12
              <div className="secondary-updates-comment-count">3 comments</div>
            </Link>
          </div>
          <div className="secondary-updates-content">
            <Link to="" className="secondary-updates-content-link">
              NPM now has a new update
              <div className="secondary-updates-comment-count">8 comments</div>
            </Link>
          </div>
          <div className="secondary-updates-content">
            <Link to="" className="secondary-updates-content-link">
              React's newest version is not stable
              <div className="secondary-updates-comment-count">1 comments</div>
            </Link>
          </div>
          <div className="secondary-updates-content">
            <Link to="" className="secondary-updates-content-link">
              Is php really dying?
              <div className="secondary-updates-comment-count">12 comments</div>
            </Link>
          </div>
        </section>
      </aside>
    </div>
  );
};

export default Updates;
