import styled from "styled-components";
import { ColorCodes } from "../../constants/constants";

const ContainerInput = styled.form`
  display: flex;
  flex-direction: inverse-row;
  width: 100%;
  align-content: center;
  align-items: center;
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
  color: ${ColorCodes.textButton};
  background-color: ${ColorCodes.primary};
  box-shadow: 1px 2px ${ColorCodes.secondary};
  min-height: 44px;
  border-radius: 2px;
  border: none;
  width: 8rem;
  margin: 8px;
`;

export {
    ContainerInput,
    InputElement,
    Button
}