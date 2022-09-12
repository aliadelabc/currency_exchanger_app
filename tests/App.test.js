import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders when page not found", () => {
  render(<App />);
  const linkElement = screen.getByDisplayValue(/There's nothing here!/i);
  expect(linkElement).toBeInTheDocument();
});
