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
    window.open(`/details/USD`, "_self");
  };
  const handleGBPClick = () => {
    window.open(`/details/GBP`, "_self");
  };
  return (
    <div className="navButtons">
      <NavButton title={EURUSD} handleClick={handleUSDClick} />
      <NavButton title={EURGBP} handleClick={handleGBPClick} />
    </div>
  );
};
export default NavButtons;
