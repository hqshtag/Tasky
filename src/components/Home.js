import React from "react";
import Pic from "../assets/img/1.png";

const Home = () => {
  return (
    <div className="main-container">
      <div className="welcome-message">
        <h1>Welcome Stranger</h1>
        <h2>Any tasks for today?</h2>
      </div>
      <img src={Pic}></img>
    </div>
  );
};

export default Home;
