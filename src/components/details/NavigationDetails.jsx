//intialize react
import React from "react";
import PrimaryButton from "../../common/buttons/primaryButton/PrimaryButton";
import { useNavigate, useParams } from "react-router-dom";

//import css
import "./Details.css";
import CurrencyConvertorForNavigation from "../currencyConvertor/CurrencyConvertorForNavigation";
const NavigationDetails = () => {
  let navigate = useNavigate();
  let params = useParams();
  let currency = params.currency;

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className="details">
      <div className="headerContainer">
        <h2 about="currency">EUR - Euro</h2>
        <PrimaryButton title={"Back To Home"} onClick={handleBackHome} />
      </div>
      <CurrencyConvertorForNavigation currency={currency} />
    </div>
  );
};
export default NavigationDetails;
