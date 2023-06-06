import React from "react";

const Post = ({ post }) => {
  return (
    <div className="card my-3">
      {/* Post Header */}
      <div className="card-header">
        <h5 style={{ color: "blue" }}>{post.title}</h5>
        <div
          className="d-flex"
          style={{ position: "absolute", right: "20px", top: "10px" }}
        >
          <div className="d-flex">
            <i
              className="fa fa-thumbs-o-up fa-2x"
              style={{ color: "yellowgreen", cursor: "pointer" }}
              onMouseEnter={(e) => {
                e.target.style.color = "red"; // Change color on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "yellowgreen"; // Reset color on mouse leave
              }}
            ></i>
            <i
              className="fa fa-thumbs-o-down fa-2x ml-3"
              style={{ color: "yellowgreen", cursor: "pointer" }}
              onMouseEnter={(e) => {
                e.target.style.color = "black"; // Change color on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "yellowgreen"; // Reset color on mouse leave
              }}
            ></i>
          </div>
          <div className="ml-5 my-auto" style={{ color: "blue" }}>
            {post.createdAt}
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="card-body">{post.body}</div>
    </div>
  );
};

export default Post;
