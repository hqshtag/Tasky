import React from "react";
import Task from "./partials/Task";

const MyTasks = () => {
  let todos = ["go to school", "shoot everybody", "home run"];
  let tasks = todos.map((elem) => {
    return <Task title={elem} />;
  });

  return (
    <div className="main-container">
      <div className="welcome-message">
        <h1>Feeling Tasky</h1>
        <h2>It's time to clear one of those tasks !! Don't you think?</h2>
      </div>
      <div className="tasks-list">
        <h3>{tasks.length} tasks are waiting</h3>
        {tasks}
      </div>
    </div>
  );
};

export default MyTasks;
