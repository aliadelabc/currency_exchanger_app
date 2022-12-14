//intialize react
import React, { useEffect, useState } from "react";
//import common components
import NumberInput from "../../common/numberInput/NumberInput";
import Dropdown from "../../common/dropdown/Dropdown.jsx";
import TwoWayArrow from "../../common/twoWayArrow/TwoWayArrow";
import CurrencyCard from "../../common/currencyCard/CurrencyCard";
//import css
import "./CurrencyConvertor.css";
import PrimaryButton from "../../common/buttons/primaryButton/PrimaryButton";
import SecondryButton from "../../common/buttons/secondryButton/SecondryButton";
import { useNavigate } from "react-router-dom";

const CurrencyConvertorWithDetails = () => {
  const [to, setTo] = useState("USD");
  const [from, setFrom] = useState("EUR");
  const [amount, setAmount] = useState(0);
  const [currencies, setCurrencies] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState("XX.XX");
  const [rate, setRate] = useState("XX.XX");
  const [loading, setLoading] = useState(0);
  const navigate = useNavigate();
  const symbols = [
    "SEK",
    "NZD",
    "HKD",
    "CNY",
    "CHF",
    "CAD",
    "AUD",
    "GBP",
    "JPY",
  ];
  const [latestCurrencies, setLatestCurrencies] = useState(null);
  const handleAmount = (event) => {
    setAmount(event.target.value);
  };
  const handlefromChange = (event) => {
    setFrom(event.target.value);
    setConvertedAmount(0);
    setRate("XX.XX");
    setLatestCurrencies(null);
  };
  const handletoChange = (event) => {
    setTo(event.target.value);
    setConvertedAmount(0);
    setRate("XX.XX");
    setLatestCurrencies(null);
  };
  const handleConversion = () => {
    let myHeaders = new Headers();
    myHeaders.append("apikey", process.env.REACT_APP_FIXER_API_KEY);

    let requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    setLoading(true);
    fetch(
      `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        let data = JSON.parse(result);
        setConvertedAmount(parseFloat(data.result).toFixed(2));
        setRate((data.result / amount).toFixed(2));
        setLoading(false);
        getLatestCurrencies();
      })
      .catch((error) => console.log("error", error));
  };

  const getLatestCurrencies = () => {
    let myHeaders = new Headers();
    myHeaders.append("apikey", process.env.REACT_APP_FIXER_API_KEY);

    let requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch(
      `https://api.apilayer.com/fixer/latest?symbols=${symbols}&base=${from}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        let data = JSON.parse(result);
        setLatestCurrencies(data.rates);
      })
      .catch((error) => console.log("error", error));
  };

  const handleMoreDetails = () => {
    navigate(`/details/${from}/${currencies[from]}/${to}/${amount}`);
  };
  useEffect(() => {
    const getCurrencies = () => {
      let myHeaders = new Headers();
      myHeaders.append("apikey", process.env.REACT_APP_FIXER_API_KEY);

      let requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: myHeaders,
      };

      fetch("https://api.apilayer.com/fixer/symbols", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          let data = JSON.parse(result);
          setCurrencies(data.symbols);
        })
        .catch((error) => console.log("error", error));
    };
    getCurrencies();
  }, []);
  return (
    <>
      <div className="inputsContainer">
        {currencies ? (
          <>
            <div className="convertorInputsContainer">
              <div className="amountContainer">
                <NumberInput
                  handleAmount={handleAmount}
                  label={"Amount"}
                  name={"amount"}
                />
              </div>
              <div className="fromToContainer">
                <Dropdown
                  name={"from"}
                  label={"From"}
                  data={Object.keys(currencies)}
                  handleChange={handlefromChange}
                  defaultValue={"EUR"}
                  readOnly={amount <= 0}
                />
                <TwoWayArrow />
                <Dropdown
                  name={"to"}
                  label={"To"}
                  data={Object.keys(currencies)}
                  handleChange={handletoChange}
                  defaultValue={"USD"}
                  readOnly={amount <= 0}
                />
              </div>
            </div>
            <PrimaryButton
              disabled={amount <= 0}
              onClick={handleConversion}
              width={"50%"}
              title={"CONVERT"}
              loading={loading}
            />

            <div className="resultContainer">
              <input
                name="rate"
                type={"text"}
                className="rate"
                readOnly={true}
                value={`1.00 ${from} = ${rate} ${to}`}
              />
              <div className="convertedValueContainerWithDetails">
                <input
                  className="convertedValue"
                  name="convertedValue"
                  type={"text"}
                  value={`${convertedAmount} ${to}`}
                  readOnly={true}
                />
                <SecondryButton
                  disabled={amount <= 0}
                  width={"50%"}
                  title={"More Details"}
                  loading={loading}
                  onClick={handleMoreDetails}
                />
              </div>
            </div>
          </>
        ) : (
          "Loading..."
        )}
      </div>
      <div className="CardsContainer">
        {latestCurrencies && Object.keys(latestCurrencies).length > 0
          ? Object.keys(latestCurrencies).map((e, i) => (
              <CurrencyCard
                key={Object.keys(latestCurrencies)[i]}
                symbol={Object.keys(latestCurrencies)[i]}
                rate={Object.values(latestCurrencies)[i]}
                convertedAmount={Object.values(latestCurrencies)[i] * amount}
                base={from}
              />
            ))
          : null}
      </div>
    </>
  );
};
export default CurrencyConvertorWithDetails;
