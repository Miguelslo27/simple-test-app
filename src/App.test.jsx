import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  it("should render without error", () => {
    const app = render(<App />);
    console.log(app.debug());
  });
});
