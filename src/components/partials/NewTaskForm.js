import React, { useState } from "react";
import AddIcon from "../icons/AddIcon";

import { postTask } from "../../apiServices";

const NewTaskForm = ({ handleClose }) => {
  const [label, setLabel] = useState("");

  const handleChange = (e) => {
    setLabel(e.target.value);
    //console.log(label);
  };

  const handleSubmit = (e) => {
    postTask(label);
    setLabel("");
    handleClose();
  };

  return (
    <div className="form">
      <h4>What do you wanna do ?</h4>
      <input
        type="text"
        placeholder="do somthing.."
        value={label}
        onChange={handleChange}
      />
      <button className="btn" onClick={handleSubmit}>
        {" "}
        <AddIcon />
        I'll do it!
      </button>
    </div>
  );
};

export default NewTaskForm;
