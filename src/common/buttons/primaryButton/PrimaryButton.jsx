//intialize react
import React from "react";
//import css
import "./PrimaryButton.css";

const PrimaryButton = ({
  width,
  title,
  disabled,
  onClick,
  loading = false,
}) => {
  return (
    <div className="buttonContainer">
      <button
        className="buttonPrim"
        onClick={onClick}
        disabled={disabled || loading}
        style={{ width: width }}
      >
        {loading ? "Loading..." : title}
      </button>
    </div>
  );
};
export default PrimaryButton;
