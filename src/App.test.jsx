import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  it("should render without error", () => {
    const app = render(<App />);
    expect(app).toBeTruthy();
  });

  it("should match snapshot", () => {
    const app = render(<App />);
    expect(app).toMatchSnapshot();
  });
});
