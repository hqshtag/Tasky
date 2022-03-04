import React, { useState, useEffect } from "react";
import Task from "./partials/Task";
import { getTasks, patchTask } from "../apiServices";

const MyTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [parsedTasks, setParsedTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTasks().then((res) => {
      console.log(res);
      setTasks(res);
      setLoading(false);
    });
  }, []);
  const handlePatch = (id) => {
    patchTask(id);
    setTasks((c) => c.filter((task) => task._id !== id));
    //e.target.parentElement.remove();
    //this.forceUpdate();
    //e.parentElement.remove();
  };
  useEffect(() => {
    if (tasks && tasks.length > 0) {
      setParsedTasks(
        tasks.map((task) => {
          //console.log(task);
          return (
            <Task
              key={task._id}
              id={task._id}
              label={task.text}
              patch={() => handlePatch(task._id)}
            />
          );
        })
      );
    }

    // console.log(parsedTasks);
  }, [tasks]);

  return (
    <div className="main-container">
      <div className="welcome-message">
        <h1>{loading ? "Loading" : "Feeling Tasky"}</h1>
        <h2>
          {tasks && tasks.length > 0
            ? "It's time to clear one of those tasks !! Don't you think?"
            : null}
        </h2>
      </div>
      <div className="tasks-list">
        {/* <h3>{tasks.length} tasks are waiting</h3> */}
        {parsedTasks}{" "}
      </div>
    </div>
  );
};

export default MyTasks;
