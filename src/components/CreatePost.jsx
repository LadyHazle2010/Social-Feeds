import React from "react";

const CreatePost = () => {
  const onSubmit = () => {
    console.log("form submit");
  };
  return (
    <div className="container">
      <div className="card my-3">
        <div className="card-body">
          <div className="card-text">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" name="title" />
              </div>
              <div className="form-group">
                <label>Content</label>
                <textarea
                  name="body"
                  cols="30"
                  rows="5"
                  className="form-control"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Create Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
