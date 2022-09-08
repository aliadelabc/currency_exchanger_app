//intialize react
import React, { useEffect, useState } from "react";
//import common components
import NumberInput from "../numberInput/NumberInput";
import Dropdown from "./dropdown/Dropdown.jsx";
import TwoWayArrow from "../twoWayArrow/TwoWayArrow";
//import css
import "./CurrencyConvertor.css";
import PrimaryButton from "../buttons/primaryButton/PrimaryButton";
import Chart from "../lineChart/LineChart";

const CurrencyConvertorWithDetails = ({ currency }) => {
  const [to, setTo] = useState(currency);
  const [from, setFrom] = useState("EUR");
  const [amount, setAmount] = useState(0);
  const [currencies, setCurrencies] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState("XX.XX");
  const [rate, setRate] = useState("XX.XX");
  const [loading, setLoading] = useState(0);
  const [historicalData, setHistoricalData] = useState([]);
  const handleAmount = (event) => {
    setAmount(event.target.value);
  };
  const handlefromChange = (event) => {
    setFrom(event.target.value);
    setConvertedAmount(0);
    setRate("XX.XX");
  };
  const handletoChange = (event) => {
    setTo(event.target.value);
    setConvertedAmount(0);
    setRate("XX.XX");
  };

  const handleHistoricalData = () => {
    const subtractYears = (numOfYears, date = new Date()) => {
      date.setFullYear(date.getFullYear() - numOfYears);

      return date;
    };

    let myHeaders = new Headers();
    myHeaders.append("apikey", "GELwasI0lihGpg332rUSIszNfwVCIQ28");

    let requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    setLoading(true);
    let num_of_years = 1;
    let end_date = new Date();
    let start_date = subtractYears(num_of_years, new Date());
    let start_date_string = start_date.toISOString().slice(0, 10);
    let end_date_string = end_date.toISOString().slice(0, 10);
    fetch(
      `https://api.apilayer.com/fixer/timeseries?start_date=${start_date_string}&end_date=${end_date_string}&symbols=${[
        from,
        to,
      ]}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        let data = JSON.parse(result);
        setHistoricalData(data.rates);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  };
  const handleConversion = () => {
    let myHeaders = new Headers();
    myHeaders.append("apikey", "GELwasI0lihGpg332rUSIszNfwVCIQ28");

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
        handleHistoricalData();
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const getCurrencies = () => {
      let myHeaders = new Headers();
      myHeaders.append("apikey", "GELwasI0lihGpg332rUSIszNfwVCIQ28");

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
                  readOnly={true}
                />
                <TwoWayArrow />
                <Dropdown
                  name={"to"}
                  label={"To"}
                  data={Object.keys(currencies)}
                  handleChange={handletoChange}
                  defaultValue={currency}
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
                style={{ width: "45%" }}
                readOnly={true}
                value={`1.00 ${from} = ${rate} ${to}`}
              />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <input
                  style={{ width: "47.5%", padding: "20px", marginTop: "10px" }}
                  name="convertedValue"
                  type={"text"}
                  value={`${convertedAmount} ${to}`}
                  readOnly={true}
                />
              </div>
            </div>
          </>
        ) : (
          "Loading..."
        )}
      </div>
      <Chart incomingData={historicalData} dataKey1={from} dataKey2={to} />
    </>
  );
};
export default CurrencyConvertorWithDetails;
