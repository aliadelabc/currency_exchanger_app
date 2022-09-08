//intialize react
import React from "react";

//import css
import "./NavButton.css";

const NavButton = ({ title, handleClick }) => {
  return (
    <button onClick={handleClick} title={title} className="navButton">
      {title}
    </button>
  );
};
export default NavButton;
