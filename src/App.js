import React, { useState, useEffect } from "react";

import Navbar from "./components/layout/Navbar";
import Home from "./components/Home";
import MyTasks from "./components/MyTasks";
import Done from "./components/Done";

import Modal from "./components/layout/Modal";
import NewTaskForm from "./components/partials/NewTaskForm";

import "./assets/styles/stylesheet.scss";

function App() {
  const [activeMenu, setActiveMenu] = useState({
    home: true,
    tasks: false,
    done: false,
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setActiveMenu((c) => {
      return { home: true, tasks: false, done: false };
    });
  }, [showModal]);

  const toggleModalOn = () => {
    setShowModal(true);
  };

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
        <NewTaskForm handleClose={toggleModalOff} />
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
