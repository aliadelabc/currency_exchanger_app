//intialize react
import React from "react";
//import common components
import NumberInput from "../numberInput/NumberInput";
import Dropdown from "./dropdown/Dropdown.jsx";
import TwoWayArrow from "../twoWayArrow/TwoWayArrow";

//import css
import "./CurrencyConvertor.css";
import PrimaryButton from "../buttons/primaryButton/PrimaryButton";

const CurrencyConvertor = () => {
  const handlefromChange = () => {
    console.log("changed");
  };
  const handletoChange = () => {
    console.log("changed");
  };
  return (
    <div className="inputsContainer">
      <div className="convertorInputsContainer">
        <div className="amountContainer">
          <NumberInput label={"Amount"} name={"amount"} />
        </div>
        <div className="fromToContainer">
          <Dropdown
            name={"from"}
            label={"From"}
            data={["USD", "GBP"]}
            handleChange={handlefromChange}
          />
          <TwoWayArrow />
          <Dropdown
            name={"to"}
            label={"To"}
            data={["USD", "GBP"]}
            handleChange={handletoChange}
          />
        </div>
      </div>
      <PrimaryButton title={"CONVERT"} width={"50%"} />
      <div className="resultContainer">
        <input
          name="rate"
          type={"text"}
          defaultValue={"1.00 EUR = XX.XX USD"}
          style={{ width: "45%" }}
          readOnly={true}
        />
        <input
          style={{ width: "47.5%", padding: "20px", marginTop: "10px" }}
          name="convertedValue"
          type={"text"}
          defaultValue={"XX.XX USD"}
          readOnly={true}
        />
      </div>
    </div>
  );
};
export default CurrencyConvertor;
