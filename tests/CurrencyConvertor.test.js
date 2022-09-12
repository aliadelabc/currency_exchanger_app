import { render, screen } from "@testing-library/react";
import CurrencyConvertorForNavigation from "../src/common/CurrencyConvertor/CurrencyConvertorForNavigation";

test("renders Currency Convertor", () => {
  render(<CurrencyConvertorForNavigation currrency={"EUR"} />);
  const linkElement = screen.getByTitle("currency_convertor");
  expect(linkElement).not.toReturn(/Loading.../i);
});

test("renders when there are no data", () => {
  render(
    <CurrencyConvertorForNavigation dataKey1={"test1"} dataKey2={"test2"} />
  );
  const linkElement = screen.getByTitle("currency_convertor");
  expect(linkElement).toReturn(/Loading.../i);
});
