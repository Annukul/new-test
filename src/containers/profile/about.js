import React from "react";
import { Link } from "react-router-dom";

// icons
import profile from "../../assets/icons/profile.png";
import edit from "../../assets/icons/editing.png";

const About = () => {
  return (
    <>
      <div className="profile-cover"></div>
      <div className="profile-info">
        <div className="profile-info-img">
          <img src={profile} alt="Profile" className="profile-img-bg" />
        </div>
        <div className="profile-info-details">
          <div className="profile-author-name">
            <h2>Annukul</h2>
          </div>
          <div className="profile-author-about">
            <p className="light-text">
              An eye keen for design, a brain full of codes, a heart full of
              adventures!
            </p>
          </div>
          <p>
            <br />
          </p>
          <Link to="/edit-profile">
            <img src={edit} alt="Edit" className="icons" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
