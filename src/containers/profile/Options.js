import React, { useEffect } from "react";

// Components
import Posts from "./options/Posts";
import Certificates from "./options/Certificates";
import Jobs from "./options/Jobs";
import Achievements from "./options/Achievements";
import Details from "./options/Details";

const Options = ({ post, jobs, details, certificates, achievements }) => {
  if (post) {
    return (
      <div class="profile-content-right-results">
        <Posts />
      </div>
    );
  }
  if (jobs) {
    return (
      <div class="profile-content-right-results">
        <Jobs />
      </div>
    );
  }
  if (details) {
    return (
      <div class="profile-content-right-results">
        <Details />
      </div>
    );
  }
  if (certificates) {
    return (
      <div class="profile-content-right-results">
        <Certificates />
      </div>
    );
  }
  if (achievements) {
    return (
      <div class="profile-content-right-results">
        <Achievements />
      </div>
    );
  }
  return (
    <>
      <div></div>
    </>
  );
};

export default Options;
