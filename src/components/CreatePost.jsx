import React from "react";
import { useForm } from "react-hook-form";
import { useDataContext } from "../contexts/DataContext";

const CreatePost = () => {
  const { register, handleSubmit, errors } = useForm();

  const { data, setData } = useDataContext();

  const onSubmit = (params) => {
    const today = new Date();

    const newData = {
      id: data.length + 1,
      author: "Michael",
      today,
      ...params,
    };

    setData([...data, newData]);
  };
  return (
    <div className="container">
      <div className="card my-3">
        <div className="card-body">
          <div className="card-text">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  ref={register({ required: true })}
                />
              </div>
              <div className="form-group">
                <label>Content</label>
                <textarea
                  name="body"
                  cols="30"
                  rows="5"
                  className="form-control"
                  ref={register({ required: true })}
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
