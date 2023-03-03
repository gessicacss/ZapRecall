import { useState } from "react";
import styled from "styled-components";
import FlashCards from "./components/FlashCards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import StartPage from "./components/StartPage";

export default function App() {
  const [contador, setContador] = useState(0);
  const [iconArray, setIconArray] = useState([]);

  return (
    <>
      <StartPage />
      <Header />
      <Container>
        <FlashCards setContador={setContador} contador={contador} setIconArray={setIconArray} iconArray={iconArray}/>
        <Footer contador={contador} iconArray={iconArray}/>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 30px;
  flex-direction: column;
  margin: 30px 0 210px 0;
`;