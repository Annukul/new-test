import React from "react";
import { Link } from "react-router-dom";

// Icons
import house from "../../assets/icons/house.png";
import profile from "../../assets/icons/profile.png";
import flowchart from "../../assets/icons/flowchart.png";
import notice from "../../assets/icons/notice.png";
import system from "../../assets/icons/system-update.png";
import people from "../../assets/icons/people.png";
import portfolio from "../../assets/icons/professional-portfolio.png";
import medal from "../../assets/icons/medal.png";

const Sidebar = () => {
  return (
    <div className="options_menu">
      <ul className="options-list">
        <Link to="/">
          <li>
            <img src={house} alt="icons" className="icons" />
            Home
          </li>
        </Link>
        <Link to="/profile">
          <li>
            <img src={profile} alt="icons" className="icons" />
            Profile
          </li>
        </Link>
        <li>
          <img src={flowchart} alt="icons" className="icons" />
          Projects
        </li>
        <li>
          <img src={notice} alt="icons" className="icons" />
          Notices
        </li>
        <li>
          <img src={system} alt="icons" className="icons" />
          Updates
        </li>
        <li>
          <img src={people} alt="icons" className="icons" />
          Friends
        </li>
        <li>
          <img src={portfolio} alt="icons" className="icons" />
          Portfolio
        </li>
        <li>
          <img src={medal} alt="icons" className="icons" />
          Achievements
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
