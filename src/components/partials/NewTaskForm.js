import React from "react";
import AddIcon from "../icons/AddIcon";

const NewTaskForm = () => {
  return (
    <div className="form">
      <h4>What do you wanna do ?</h4>
      <input type="text" placeholder="do somthing.." />
      <button className="btn">
        {" "}
        <AddIcon />
        I'll do it!
      </button>
    </div>
  );
};

export default NewTaskForm;
