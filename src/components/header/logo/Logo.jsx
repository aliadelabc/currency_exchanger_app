//intialize react
import React from "react";

//import css
import "./Logo.css";
const Logo = () => {
  const handleClick = () => {
    window.open("/", "_self");
  };
  return (
    <div onClick={handleClick} className="logo">
      Logo
    </div>
  );
};
export default Logo;
