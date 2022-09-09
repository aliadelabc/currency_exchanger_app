//intialize react
import React from "react";
//import css
import "./NumberInput.css";
const NumberInput = ({ label, name, handleAmount, defaultValue = 0 }) => {
  return (
    <div>
      <label className="labelContainer" htmlFor={label} about={label}>
        {label}
      </label>
      <input
        onChange={handleAmount}
        className="inputContainer"
        name={name}
        type={"number"}
        defaultValue={defaultValue}
      />
    </div>
  );
};
export default NumberInput;
