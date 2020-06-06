import React, { useState, useEffect } from "react";
import Task from "./partials/Task";
import { getTasks } from "../apiServices";

const MyTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [parsedTasks, setParsedTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTasks(false).then((res) => {
      setTasks(res);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setParsedTasks(
      tasks.map((task) => {
        //console.log(task);
        return <Task key={task._id} id={task._id} label={task.label} />;
      })
    );
    // console.log(parsedTasks);
  }, [tasks]);

  return (
    <div className="main-container">
      <div className="welcome-message">
        <h1>{loading ? "Loading" : "Feeling Tasky"}</h1>
        <h2>
          {tasks.length > 0
            ? "It's time to clear one of those tasks !! Don't you think?"
            : null}
        </h2>
      </div>
      <div className="tasks-list">
        <h3>{tasks.length} tasks are waiting</h3>
        {parsedTasks}{" "}
      </div>
    </div>
  );
};

export default MyTasks;
