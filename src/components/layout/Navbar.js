import React from "react";
import LogoIcon from "../icons/LogoIcon";
import DriveIcon from "../icons/DriveIcon";
import DoneIcon from "../icons/DoneIcon";
import AddIcon from "../icons/AddIcon";
import HomeIcon from "../icons/HomeIcon";

import NavButton from "../partials/NavButton";

import "../../assets/styles/navbar.scss";

const Navbar = ({ handleMenuNavigation, activeMenu, toggleModalOn }) => {
  /*const [activeMenu, setActiveMenu] = useState({
    home: true,
    tasks: false,
    done: false,
  });

  const handleMenuNavigation = (e) => {
    let key = e.target.getAttribute("data-key");
    setActiveMenu({ home: false, tasks: false, done: false, [key]: true });
  };*/

  return (
    <nav>
      <div className="logo">
        <LogoIcon />
        <h3>Tasky</h3>
      </div>
      <div className="navmenu">
        <NavButton
          Icon={HomeIcon}
          title={"Home"}
          state={activeMenu.home}
          dataKey="home"
          clickHandler={handleMenuNavigation}
        />
        <NavButton
          Icon={DriveIcon}
          title={"My Tasks"}
          state={activeMenu.tasks}
          dataKey="tasks"
          clickHandler={handleMenuNavigation}
        />
        <NavButton
          Icon={DoneIcon}
          title={"Done"}
          state={activeMenu.done}
          dataKey="done"
          clickHandler={handleMenuNavigation}
        />
      </div>
      <div>
        <button className="btn" onClick={toggleModalOn}>
          {" "}
          <AddIcon /> Create New Task
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
