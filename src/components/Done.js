import React from "react";

const Done = () => {
  let completedTasks = [];

  let theh1 =
    completedTasks.length > 0
      ? "Yey !! we're rockin'"
      : "Nothing done yet huh!";
  let theh2 =
    completedTasks.length > 0
      ? "We did one hell of a job right there !! Bravo six, going dark"
      : "What are you waiting for? come on let's GOOOOOOOO!";

  return (
    <div className="main-container">
      <div className="welcome-message">
        <h1>{theh1}</h1>
        <h2>{theh2}</h2>
      </div>
      <div className="tasks-list">
        <h3>{completedTasks.length} tasks are crushed!</h3>
        {completedTasks}
      </div>
    </div>
  );
};

export default Done;
