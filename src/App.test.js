import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  //find an element with the role of button and test of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  //click the button
  fireEvent.click(colorButton);

  //expect the button text content to be 'Change to red'
  expect(colorButton.textContent).toBe("Change to red");
});

test("button turns blue when clicked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
});

test("initial conditions", () => {
  render(<App />);

  //check that button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  //check that checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox first click disabled, second click enabled", () => {
  render(<App />);

  //check that the checkbox starts of disabled with first click
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});
