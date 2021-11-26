import React from "react";
import Achievements from "./options/Achievements";

const Sidebar = ({
  setPost,
  setJobs,
  setDetails,
  setCertificates,
  setAchievements,
}) => {
  const forPost = () => {
    setPost(true);
    setJobs(false);
    setDetails(false);
    setCertificates(false);
    setAchievements(false);
  };
  const forJobs = () => {
    setPost(false);
    setJobs(true);
    setDetails(false);
    setCertificates(false);
    setAchievements(false);
  };
  const forDetails = () => {
    setPost(false);
    setJobs(false);
    setDetails(true);
    setCertificates(false);
    setAchievements(false);
  };
  const forCertificates = () => {
    setPost(false);
    setJobs(false);
    setDetails(false);
    setCertificates(true);
    setAchievements(false);
  };
  const forAchievements = () => {
    setPost(false);
    setJobs(false);
    setDetails(false);
    setCertificates(false);
    setAchievements(true);
  };

  return (
    <div class="profile-content-left-nav">
      <ul id="profile-options-ul">
        <li id="profile-options-li">
          <button id="profile-options-btn">Home</button>
        </li>
        <li id="profile-options-li">
          <button id="profile-options-btn" onClick={forPost}>
            Posts
          </button>
        </li>
        <li id="profile-options-li">
          <button id="profile-options-btn" onClick={forDetails}>
            Details
          </button>
        </li>
        <li id="profile-options-li">
          <button id="profile-options-btn" onClick={forAchievements}>
            Achievements
          </button>
        </li>
        <li id="profile-options-li">
          <button id="profile-options-btn" onClick={forCertificates}>
            Certificates
          </button>
        </li>
        <li>
          <button id="profile-options-btn" onClick={forJobs}>
            Jobs
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
