import "./App.css";
import Container from "./container/Container";
import Header from "./header/Header";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  align-items:center;

`;
const BackColor = styled.div`
  background: linear-gradient(
    90deg,
    rgba(44, 168, 149, 1) 35%,
    rgba(60, 115, 184, 1) 95%
  );
  min-height: 11em;
  min-width:100%;
  position: relative;
`;

function App() {
  return (
    <Content>
      <Header />
      <BackColor></BackColor>
      <Container style= {{position:"absolute"}} />
    </Content>
  );
}

export default App;
