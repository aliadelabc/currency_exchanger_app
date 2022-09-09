//intialize react
import React from "react";

//import compoents
import Logo from "./logo/Logo";
import NavButtons from "./navButtons/NavButtons";

//import CSS
import "./Header.css";

const Header = () => {
  return (
    <nav className="container">
      <Logo />
      <NavButtons />
    </nav>
  );
};
export default Header;
