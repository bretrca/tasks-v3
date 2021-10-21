import styled from "styled-components";
import { ColorCodes } from "../../constants/constants";

const CommentsContainerElement = styled.div`
  margin: 24px;
  box-shadow: 1px 2px 0.5em ${ColorCodes.baseDark};
  border-radius: 2px;
  background: ${ColorCodes.white};
  position: absolute;
  top: 2.35em;
  z-index: 3;
  display: flex;
  flex-direction: column;
  width: 60%;
  ${"" /* aiuda */}
  align-content:center;
  margin-bottom: 16px;
`;
const HeadComments = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
  background-color: ${ColorCodes.quaterinary};

`;
const OnlineBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 18px;
`;
const TitleH6 = styled.h6`
  margin: 0px;
  color: ${ColorCodes.tertiary};
`;
const Picture = styled.a`
  width: 24px;
  height: 24px;
  color: #fff;
  padding: 8px;
`;
const PictureContainer = styled.div`
  position: absolute;
  right: 1em;
  top: 4em;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  padding: 8px;
  background: linear-gradient(
    90deg,
    rgba(44, 168, 149, 1) 25%,
    rgba(60, 115, 184, 1) 90%
  );
  border-radius: 50%;
`;
const DateText = styled.p`
  padding: 0.5em 10px;
  margin: 4px;
  color: ${ColorCodes.tertiary};
`;
const Titleh2 = styled.h2`
margin: 18px 0;
`

export {
    CommentsContainerElement,
    HeadComments,
    OnlineBox,
    TitleH6,
    Picture,
    PictureContainer,
    DateText,
    Titleh2,

}