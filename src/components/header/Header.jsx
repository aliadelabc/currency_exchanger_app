//intialize react
import React from "react";

//import compoents
import Logo from "./logo/Logo";
//import CSS
import "./Header.css";
import NavButtons from "./navButtons/NavButtons";

const Header = () => {
  return (
    <div className="container">
      <Logo />
      <NavButtons />
    </div>
  );
};
export default Header;
