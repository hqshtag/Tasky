import React, { useState } from "react";

import Navbar from "./components/layout/Navbar";
import Home from "./components/Home";
import MyTasks from "./components/MyTasks";
import Done from "./components/Done";

import Modal from "./components/layout/Modal";
import NewTaskForm from "./components/partials/NewTaskForm";

import "./assets/styles/stylesheet.scss";
import { getTasks, patchTask, postTask } from "./apiServices";
function App() {
  const [activeMenu, setActiveMenu] = useState({
    home: true,
    tasks: false,
    done: false,
  });

  const [showModal, setShowModal] = useState(false);

  const toggleModalOn = () => {
    setShowModal(true);
  };

  //patchTask("5edbc6561c119c0017bf0ad8");

  const toggleModalOff = () => {
    setShowModal(false);
  };

  const handleMenuNavigation = (e) => {
    //console.log(tasks);
    let key = e.target.getAttribute("data-key");
    setActiveMenu({ home: false, tasks: false, done: false, [key]: true });
  };
  return (
    <>
      <Navbar
        handleMenuNavigation={handleMenuNavigation}
        activeMenu={activeMenu}
        toggleModalOn={toggleModalOn}
      />
      <Modal handleClose={toggleModalOff} show={showModal}>
        <NewTaskForm />
      </Modal>
      {activeMenu.home ? (
        <Home showImg={!showModal} />
      ) : activeMenu.tasks ? (
        <MyTasks /*tasks={tasks}*/ />
      ) : (
        <Done /*tasks={completeTasks}*/ />
      )}
    </>
  );
}

export default App;
