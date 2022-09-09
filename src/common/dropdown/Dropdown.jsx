//intialize react
import React from "react";
//import css
import "./Dropdown.css";

const Dropdown = ({
  name,
  label,
  data,
  handleChange,
  defaultValue,
  readOnly,
}) => {
  return (
    <div className="dropdownContainer">
      <label className="labelContainer" htmlFor={label} about={label}>
        {label}
      </label>
      {data.length > 0 ? (
        <select
          className="selectContainer"
          name={name}
          about={name}
          onChange={handleChange}
          defaultValue={defaultValue}
          disabled={readOnly}
        >
          {data?.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      ) : (
        "something went wrong!!"
      )}
    </div>
  );
};
export default Dropdown;
