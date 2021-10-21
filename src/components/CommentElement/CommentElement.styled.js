import styled from "styled-components";
import { ColorCodes } from "../../constants/constants";
const Box = styled.div`
  display: flex;
  flex-direction: row;
  border-width: 1px 0 0 0;
  border-style: solid;
  border-color: ${ColorCodes.borders};
  min-height: 52px;
`;
const Name = styled.h2`
  font-size: 18px;
  line-height: 28px;
  color: ${ColorCodes.baseDark};
  font-weight: 600;
`;
const Text = styled.p`
  margin-top: 4px;
  margin-bottom: 16px;
  font-size: 1em;
  color: ${ColorCodes.text};
`;
const Picture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
const PictureContainer = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px;
`;
const TextContainer = styled.div``;
export { Box, Name, PictureContainer, Picture, Text, TextContainer };
