import React from "react";
import { useSelector } from "react-redux";

const Form = ({ handleChange, setFile, handleSubmit }) => {
  const spost = useSelector((state) => state.posts);
  const { post } = spost;

  if (!post) {
    return <div>Loading...</div>;
  }

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
              <input
                type="text"
                defaultValue={post.title}
                name="title"
                onChange={handleChange}
              />
            </div>
            <div className="form-controls">
              <label htmlFor="excrept">Excrept</label>
              <input
                type="text"
                defaultValue={post.excrept}
                name="excrept"
                onChange={handleChange}
              />
            </div>
            <div className="form-controls">
              <label htmlFor="flairs">Flairs</label>
              <input
                type="text"
                defaultValue={post.flairs}
                name="flair"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-right-fields">
            <div className="form-controls">
              <textarea
                name="description"
                id=""
                cols="30"
                rows="10"
                defaultValue={post.description}
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
