import React, { useState } from "react";

// Components
import Header from "../common/Header";
import About from "./about";
import Sidebar from "./sidebar";
import Options from "./Options";

// css
import "./profile.css";

const Profile = () => {
  const [post, setPost] = useState(false);
  const [jobs, setJobs] = useState(false);
  const [details, setDetails] = useState(false);
  const [certificates, setCertificates] = useState(false);
  const [achievements, setAchievements] = useState(false);
  return (
    <>
      <Header />
      <div className="profile">
        <About />
        <div className="profile-content">
          <Sidebar
            setPost={setPost}
            setJobs={setJobs}
            setDetails={setDetails}
            setCertificates={setCertificates}
            setAchievements={setAchievements}
          />
          <Options
            post={post}
            jobs={jobs}
            details={details}
            certificates={certificates}
            achievements={achievements}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
