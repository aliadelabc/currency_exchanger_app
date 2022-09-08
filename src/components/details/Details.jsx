//intialize react
import React from "react";
import PrimaryButton from "../../common/buttons/primaryButton/PrimaryButton";
import CurrencyConvertor from "../../common/currencyConvertor/CurrencyConvertor";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../header/Header.jsx";

//import css
import "./Details.css";
const Details = () => {
  let navigate = useNavigate();
  let params = useParams();
  let currency = params.currency;

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className="details">
      <div className="headerContainer">
        <h2 about="currency exchanger">EUR - Europian Union Euro</h2>
        <PrimaryButton title={"Back To Home"} onClick={handleBackHome} />
      </div>
      <CurrencyConvertor currency={currency} />
    </div>
  );
};
export default Details;
