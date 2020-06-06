import React from "react";
import { patchTask } from "../../apiServices";

const Task = ({ label, id, checked }) => {
  const deleted = { textDecoration: "line-through" };
  const handlePatch = (e) => {
    patchTask(id);
    e.target.parentElement.remove();
    //e.parentElement.remove();
  };
  return (
    <div className="task">
      <input
        type="checkbox"
        name={label}
        checked={checked}
        disabled={checked}
        onClick={handlePatch}
      />
      <label htmlFor={label} style={checked ? deleted : null}>
        {" "}
        {label}{" "}
      </label>
    </div>
  );
};

export default Task;
