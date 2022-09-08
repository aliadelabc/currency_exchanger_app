//intialize React
import React from "react";
//import common componets
import NavButton from "../../../common/navButton/NavButton";
import { useNavigate } from "react-router-dom";
//import css
import "./NavButtons.css";

const NavButtons = () => {
  let navigate = useNavigate();

  const EURUSD = "EUR USD Details";
  const EURGBP = "EUR GBP Details";
  const handleUSDClick = () => {
    navigate(`/details/USD`);
  };
  const handleGBPClick = () => {
    navigate(`/details/GBP`);
  };
  return (
    <div className="navButtons">
      <NavButton title={EURUSD} handleClick={handleUSDClick} />
      <NavButton title={EURGBP} handleClick={handleGBPClick} />
    </div>
  );
};
export default NavButtons;
