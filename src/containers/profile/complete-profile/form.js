import React from "react";

const Form = ({ handleSubmit, handleChange }) => {
  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <div className="form-fields">
        <div className="form-left-fields">
          <p>
            <br />
          </p>
          <h3>College details</h3>
          <p>
            <br />
          </p>
          <div className="form-controls">
            <label htmlFor="collegename">College Name</label>
            <input type="text" name="collegeName" onChange={handleChange} />
          </div>
          <div className="form-controls">
            <label htmlFor="branch">Branch</label>
            <input type="text" name="collegeBranch" onChange={handleChange} />
          </div>
          <div className="form-controls">
            <label htmlFor="rollno">Roll no</label>
            <input type="text" name="collegeRollNo" onChange={handleChange} />
          </div>
          <div className="form-controls">
            <label htmlFor="duration">Duration</label>
            <div className="collegeDuration">
              <label htmlFor="from">From</label>
              <input
                type="date"
                name="from"
                placeholder="From"
                onChange={handleChange}
              />
              <label htmlFor="to">To</label>
              <input
                type="date"
                name="to"
                placeholder="To"
                onChange={handleChange}
              />
            </div>
          </div>
          <p>
            <br />
          </p>
          <hr />
          <p>
            <br />
          </p>
        </div>
        <div className="form-right-fields">
          <p>
            <br />
          </p>
          <h3>Personal details</h3>
          <p>
            <br />
          </p>
          <div className="form-controls">
            <label htmlFor="dob">DOB</label>
            <input type="date" name="dob" onChange={handleChange} />
          </div>
          <div className="form-controls">
            <label htmlFor="about">About</label>
            <textarea
              name="about"
              cols="30"
              rows="10"
              placeholder="about"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-controls">
            <label htmlFor="skills">Skills</label>
            <input type="text" name="skills" onChange={handleChange} />
          </div>
          <p>
            <br />
          </p>
          <h4>Contact</h4>
          <p>
            <br />
          </p>
          <div className="form-controls">
            <label htmlFor="phone">Phone no</label>
            <input type="text" name="phoneNumber" onChange={handleChange} />
          </div>
          <div className="form-controls">
            <label htmlFor="email">Professional Email</label>
            <input
              type="email"
              name="professionalEmailId"
              onChange={handleChange}
            />
          </div>
          <div className="form-controls">
            <label htmlFor="twitter">Twitter</label>
            <input type="text" name="twitter" onChange={handleChange} />
          </div>
          <div className="form-controls">
            <label htmlFor="linkedin">Linkedin</label>
            <input type="text" name="linkedin" onChange={handleChange} />
          </div>
          <p>
            <br />
          </p>
          <h4>Address</h4>
          <p>
            <br />
          </p>
          <div className="form-controls">
            <label htmlFor="state">Current State</label>
            <input type="text" name="currentState" onChange={handleChange} />
          </div>
          <div className="form-controls">
            <label htmlFor="city">Current City</label>
            <input type="text" name="currentCity" onChange={handleChange} />
          </div>
        </div>
      </div>
      <div className="form-submit">
        <button type="submit">Complete</button>
      </div>
    </form>
  );
};

export default Form;
