import React from "react";
import CloseIcon from "../icons/CloseIcon";

const Task = ({ label, patch, checked }) => {
  const deleted = { textDecoration: "line-through" };

  return (
    <div className="task">
      <input
        type="checkbox"
        name={label}
        checked={checked}
        disabled={checked}
        onClick={patch}
      />
      <label htmlFor={label} style={checked ? deleted : null}>
        {" "}
        {label}{" "}
      </label>
      {checked ? (
        <button onClick={patch}>
          <CloseIcon />
        </button>
      ) : null}
    </div>
  );
};

export default Task;
