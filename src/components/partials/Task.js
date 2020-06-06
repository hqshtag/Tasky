import React from "react";

const Task = ({ title }) => {
  return (
    <div className="task">
      <input type="checkbox" name={title} />
      <label for={title}> {title} </label>
    </div>
  );
};

export default Task;
