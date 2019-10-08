import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Postform from "./components/Postform";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <h5>Redux Blog</h5>
      <Postform />
      <Posts />
    </div>
  );
}

export default App;
