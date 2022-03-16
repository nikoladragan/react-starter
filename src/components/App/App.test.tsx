import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("test id", () => {
    const title = "wwwww";
    render(<App title={title} />);

    expect(screen.queryByTestId("test")).toHaveTextContent(title);
  });
});
