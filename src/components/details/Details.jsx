//intialize react
import React from "react";
import PrimaryButton from "../../common/buttons/primaryButton/PrimaryButton";
import CurrencyConvertor from "../../common/currencyConvertor/CurrencyConvertor";
import { useNavigate, useParams } from "react-router-dom";

//import css
import "./Details.css";
const Details = () => {
  let navigate = useNavigate();
  let params = useParams();
  let currency = params.currency;
  let fromFullName = params.currency_full_name;

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className="details">
      <div className="headerContainer">
        <h2 about="currency exchanger">
          {currency} - {fromFullName}
        </h2>
        <PrimaryButton title={"Back To Home"} onClick={handleBackHome} />
      </div>
      <CurrencyConvertor currency={currency} />
    </div>
  );
};
export default Details;
