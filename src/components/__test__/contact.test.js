import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("test cases for contact us page", () => {
  test("should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("should load contact us component", () => {
    //render
    render(<Contact />);
    //Querying
    const input = screen.getAllByRole("textbox");

    //assertion-to confirm

    expect(input.length).toBe(2);
  });
});
