//intialize react
import React from "react";
//import css
import "./SecondryButton.css";

const SecondryButton = ({
  width,
  title,
  disabled,
  onClick,
  loading = false,
}) => {
  return (
    <button
      className="buttonSec"
      onClick={onClick}
      disabled={disabled || loading}
      style={{ width: width }}
      type={"button"}
    >
      {loading ? "Loading..." : title}
    </button>
  );
};
export default SecondryButton;
