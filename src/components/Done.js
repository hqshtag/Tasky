import React, { useState, useEffect } from "react";
import Task from "./partials/Task";
import { getTasks } from "../apiServices";

const Done = () => {
  const [loading, setLoading] = useState(false);
  const [parsedTasks, setParsedTasks] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setLoading(true);
    getTasks(true).then((res) => {
      setTasks(res);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setParsedTasks(
      tasks
        .map((task) => {
          //console.log(task);
          return <Task key={task._id} label={task.label} checked={true} />;
        })
        .reverse()
    );
    // console.log(parsedTasks);
  }, [tasks]);

  let theh1 =
    parsedTasks.length > 0 ? "Yey !! we're rockin'" : "Nothing done yet huh!";
  let theh2 =
    parsedTasks.length > 0
      ? "We did one hell of a job right there !! Bravo six, going dark"
      : "What are you waiting for? come on let's GOOOOOOOO!";

  return (
    <div className="main-container">
      <div className="welcome-message">
        <h1>{theh1}</h1>
        <h2>{theh2}</h2>
      </div>
      <div className="tasks-list">
        <h3>{parsedTasks.length} tasks are crushed!</h3>
        {parsedTasks}
      </div>
    </div>
  );
};

export default Done;
