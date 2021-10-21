import React from "react";
import Input from "../Input/Input";
import styled from "styled-components";

const ContainerInput = styled.div`
  width: 100%;
  margin: 0;
  box-sizing: contain;
`;
function InputContainer({uploadComment}) {
  return (
    <ContainerInput>
      <Input  uploadComment= {uploadComment} />
    </ContainerInput>
  );
}

export default InputContainer;
