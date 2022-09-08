//intialize react
import React from "react";
import CurrencyConvertorWithDetails from "../../common/currencyConvertor/CurrencyConvertorWithDetails";
import Header from "../header/Header.jsx";
//import css
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="nav">
        <Header />
      </div>
      <h2 about="currency exchanger">Currency Exchanger</h2>
      <CurrencyConvertorWithDetails />
    </div>
  );
};
export default Home;
