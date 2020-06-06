import React from "react";

const NavButton = ({ Icon, title, state, dataKey, clickHandler }) => {
  return (
    <div className={state ? "menu-item" : "menu-item"}>
      <button
        onClick={clickHandler}
        data-key={dataKey}
        className={state ? "menu-btn active" : "menu-btn"}
      >
        <Icon active={state} />

        {title}
      </button>
    </div>
  );
};

export default NavButton;
