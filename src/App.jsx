import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="m-3">
        <br />
        <Route path="/" exact component={PostList} />
        <Route path="/create" exact component={CreatePost} />
      </div>
    </BrowserRouter>
  );
};

export default App;
