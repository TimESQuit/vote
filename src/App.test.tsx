import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("'learn react' CRA boilerplate removed", () => {
  render(<App />);
  expect(screen.queryByText(/learn react/i)).not.toBeInTheDocument();
});

test.todo("Make a test");
