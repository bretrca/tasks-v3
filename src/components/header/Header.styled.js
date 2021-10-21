import styled from "styled-components";
import { ColorCodes } from "../../constants/constants";

const Head = styled.header`
  display: flex;
  justify-content: center;
  background: ${ColorCodes.linearGradient};
  width: 100%;
  border-color: ${ColorCodes.borders};
  border-width: 0 0 1px;
  border-style: solid;
  
`;
const Navbar = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  flex-direction: row;
  width: 60%;
 `;

const Picture = styled.a`
  width: 16px;
  height: 16px;
  color: #fff;
  padding:8px;
`;
const PictureContainer = styled.div`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
 padding: 0 20px;
`;
const Image = styled.img`
  border-radius: 50%;
  width: 1em;
  height: 1em;
`;
 export {
     Head,
     Navbar,
     Picture,
     PictureContainer,
     Image
 }