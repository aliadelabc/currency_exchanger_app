import { render, screen } from "@testing-library/react";
import Dropdown from "../src/common/dropdown/Dropdown";

test("renders dropdown", () => {
  const label = "test";
  render(
    <Dropdown
      data={["test1", "test2"]}
      label={label}
      name={"test"}
      about={"test"}
      onChange={() => {
        return "test";
      }}
      defaultValue={"EUR"}
      disabled={false}
    />
  );
  const linkElement = screen.getByLabelText(label);
  expect(linkElement).toBeInTheDocument();
});

test("renders when there are no data", () => {
  const label = "test";
  render(
    <Dropdown
      label={label}
      name={"test"}
      about={"test"}
      onChange={() => {
        return "test";
      }}
      defaultValue={"EUR"}
      disabled={false}
    />
  );
  const linkElement = screen.getByDisplayValue(/something went wrong!!/i);
  expect(linkElement).toBeInTheDocument();
});
