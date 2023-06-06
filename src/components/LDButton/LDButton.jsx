import React from "react";
import "./style.css";

const LDButton = () => {
  return (
    <div className="d-flex">
      <i className="fa fa-thumbs-o-up fa-2x like"></i>
      <i className="fa fa-thumbs-o-down fa-2x ml-3 dislike"></i>
    </div>
  );
};

export default LDButton;
