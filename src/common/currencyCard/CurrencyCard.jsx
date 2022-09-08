//intialize react
import React from "react";
//import css
import "./CurrencyCard.css";

const CurrencyCard = ({ symbol, convertedAmount, rate, base }) => {
  return (
    <div className="cardContainer">
      <h2 className="cardContent">{symbol}</h2>
      <h2 className="cardContent">{`1.00 ${base} = ${rate} ${symbol}`}</h2>
      <h2 className="cardContent">
        Amount : {convertedAmount} {symbol}
      </h2>
    </div>
  );
};
export default CurrencyCard;
