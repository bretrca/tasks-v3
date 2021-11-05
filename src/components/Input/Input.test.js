import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import "jest-styled-components";
import Input from "./Input";

describe("should render Input component", () => {
  it("shows correct styled components on containerInput", () => {
    const { getByRole } = render(<Input />);
    expect(getByRole("ContainerInput")).toHaveStyle("display: flex");
    expect(getByRole("ContainerInput")).toHaveStyle("width:100%");
  });
  it("should render fontAwesomeIcon", () => {
    const { getByTestId } = render(<Input />);
    expect(getByTestId("Fa-icon")).toBeInTheDocument();
  });
  it("should render inputElement", () => {
    const { getByTestId } = render(<Input />);
    expect(getByTestId("input-element")).toBeInTheDocument();
  });
  it("should render button submit", () => {
    const { getByRole } = render(<Input />);
    expect(getByRole("button-submit")).toBeInTheDocument();
  });
});

test("should test the setInput function", () => {
  const { getByLabelText, getByTestId, queryByTestId, rerender } = render(
    <Input />
  );
  const input = getByTestId("input-element");
  fireEvent.change(input, { target: { value: "text" } });
  expect(getByTestId("input-element")).toBeInTheDocument();
});

test("should test the handleComment function", () => {
  const handleComment = jest.spyOn();
  const { getByLabelText, getByTestId, getByRole, rerender } = render(
    <Input onSubmit={handleComment}/>
  );
  const input = getByRole("ContainerInput");
  const button = getByRole("button");

  fireEvent.click(button);
  expect(handleComment).toHaveBeenCalledTimes(1);
  expect(handleComment).toBe(true);
});
