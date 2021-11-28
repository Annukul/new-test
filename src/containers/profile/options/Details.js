import React from "react";
import { useDispatch, useSelector } from "react-redux";

//css
import "./options.css";

const Details = () => {
  return (
    <div className="details">
      <h2>Student Details</h2>
      <div className="college-details">
        <p>
          <strong>College Name</strong>: SAITM
        </p>
        <p>
          <br />
        </p>
        <p>
          <strong>College Branch</strong>: BCA
        </p>
        <p>
          <br />
        </p>
        <p>
          <strong>College Roll No</strong>: 199158
        </p>
        <p>
          <br />
        </p>
        <p>
          <strong>College Duration</strong>: 2019-2021
        </p>
        <p>
          <br />
        </p>
      </div>
      <p>
        <br />
      </p>
      <div className="personal-details">
        <p>
          <strong>About</strong>: Hello!
        </p>
        <p>
          <br />
        </p>
        <p>
          <strong>DOB:</strong>: 10-11-12
        </p>
        <p>
          <br />
        </p>
        <p>
          <strong>Skills</strong>: c, c#, c++
        </p>
        <p>
          <br />
        </p>
        <hr />
        <p>
          <br />
        </p>
        <p>
          <strong>Phone:</strong>: 123456
        </p>
        <p>
          <br />
        </p>
        <p>
          <strong>Professional email:</strong>: abc@xyz.com
        </p>
        <p>
          <br />
        </p>
        <hr />
        <p>
          <br />
        </p>
        <p>
          <strong>Twitter:</strong>: https://twitter.com/
        </p>
        <p>
          <br />
        </p>
        <p>
          <strong>Linkedin:</strong>: https://linkedin.com/
        </p>
        <p>
          <br />
        </p>
        <hr />
        <p>
          <br />
        </p>
        <p>
          <strong>Current City:</strong>: Gurgaon
        </p>
        <p>
          <br />
        </p>
        <p>
          <strong>Current State:</strong>: Haryana
        </p>
      </div>
    </div>
  );
};

export default Details;
