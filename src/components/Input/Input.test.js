import * as React from "react";
import "jest-styled-components";
import "jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

jest.mock(
    '@fortawesome/react-fortawesome',()=>({
        
    }))
describe("test on input", () => {
  test("should input element had FontAwesome Icon", async () => {
    const container = render(<Input />);
    const inputElement = container.querySelector("ContainerInput");
    expect(inputElement).toBeInTheDocument();
  });
  test("should input element had InputElement tag", async () => {
    const container = render(<FontAwesomeIcon />);
    const faElement = container.getByText()

  });
});
