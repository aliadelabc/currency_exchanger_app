import React from "react";
//import rechart package
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
//import css
import "./LineChart.css";
const Chart = ({ incomingData = [{}], dataKey1, dataKey2 }) => {
  const dates = Object.keys(incomingData);
  const rates = Object.values(incomingData);
  const transferredData = [];

  dates.forEach((date, i) => {
    let month = parseInt(date.substring(5, 7));
    if (dates[i + 1]) {
      let next_month = parseInt(dates[i + 1].substring(5, 7));
      if (next_month !== month) {
        transferredData.push({
          date: date,
          [dataKey1]: rates[i][dataKey1],
          [dataKey2]: rates[i][dataKey2],
        });
      }
    }
  });

  return (
    <div className="chartConatiner">
      {dates.length > 0 ? (
        <ResponsiveContainer width={"100%"} height={400}>
          <LineChart
            width={600}
            height={300}
            data={transferredData}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey={dataKey1} stroke="#8884d8" />
            <Line type="monotone" dataKey={dataKey2} stroke="#82ca9d" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date" />
            <YAxis
              dataKey={
                transferredData[transferredData.length - 1][dataKey1] >
                transferredData[transferredData.length - 1][dataKey2]
                  ? dataKey1
                  : dataKey2
              }
            />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        "Loading..."
      )}
    </div>
  );
};
export default Chart;
