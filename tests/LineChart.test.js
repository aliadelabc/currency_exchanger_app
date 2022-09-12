import { render, screen } from "@testing-library/react";
import LineChart from "../src/common/lineChart/LineChart";

test("renders LineChart", () => {
  render(
    <LineChart
      incomingData={{ "2020-12-22": "1.54554455" }}
      dataKey1={"test1"}
      dataKey2={"test2"}
    />
  );
  const linkElement = screen.getByTitle("chart");
  expect(linkElement).not.toBe(/Loading.../i);
});

test("renders when there are no data", () => {
  render(<LineChart dataKey1={"test1"} dataKey2={"test2"} />);
  const linkElement = screen.getByTitle("chart");
  expect(linkElement).toBe(/Loading.../i);
});
