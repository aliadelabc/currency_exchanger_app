//intialize React
import React from "react";
//import common componets
import NavButton from "../../../common/navButton/NavButton";
//import css
import "./NavButtons.css";

const NavButtons = () => {
  const EURUSD = "EUR USD Details";
  const EURGBP = "EUR GBP Details";
  const handleUSDClick = () => {
    console.log("clicked");
  };
  const handleGBPClick = () => {};
  return (
    <div className="navButtons">
      <NavButton title={EURUSD} handleClick={handleUSDClick} />
      <NavButton title={EURGBP} handleClick={handleGBPClick} />
    </div>
  );
};
export default NavButtons;
