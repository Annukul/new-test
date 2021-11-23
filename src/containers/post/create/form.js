import React from "react";

const Form = ({ handleChange, setFile, handleSubmit }) => {
  return (
    <div>
      <form action="" className="create-form" onSubmit={handleSubmit}>
        <div className="form-fields">
          <div className="form-left-fields">
            <div className="button-wrap">
              <label className="button" htmlFor="upload">
                Upload File
              </label>
              <input
                id="upload"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className="form-controls">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" onChange={handleChange} />
            </div>
            <div className="form-controls">
              <label htmlFor="excrept">Excrept</label>
              <input type="text" name="excrept" onChange={handleChange} />
            </div>
            <div className="form-controls">
              <label htmlFor="flairs">Flairs</label>
              <input type="text" name="flair" onChange={handleChange} />
            </div>
          </div>
          <div className="form-right-fields">
            <div className="form-controls">
              <textarea
                name="description"
                id=""
                cols="30"
                rows="10"
                placeholder="Post Desciption"
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="form-submit">
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
