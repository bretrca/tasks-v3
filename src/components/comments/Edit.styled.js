import styled from "styled-components";
import { ColorCodes } from "../../constants/constants";

const FormElement = styled.form`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  border-width: 1px 0 0 0;
  border-style: solid;
  border-color: ${ColorCodes.borders};
  min-height: 52px;
  margin: 16px 0 8px;
`;

const InputElement = styled.input`
  flex-grow: 1;
  border: none;
  height: 1em;
`;
const Button = styled.button`
  font-family: "Roboto";
  text-transform: uppercase;
  transition: 0.3s ease;
  color: ${ColorCodes.textButton};
  background-color: ${ColorCodes.secondary};
  box-shadow: 1px 2px ${ColorCodes.secondary};
  min-height: 44px;
  border-radius: 2px;
  border: none;
  width: 8rem;
  margin: 8px;
`;

export {
    FormElement,
    InputElement,
    Button
}