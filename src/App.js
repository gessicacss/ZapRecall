import { useState } from "react";
import styled from "styled-components";
import FlashCards from "./components/FlashCards";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  const [contador, setContador] = useState(0);
  return (
    <>
      <Header />
      <Container>
        <FlashCards setContador={setContador} contador={contador} />
        <Footer contador={contador} />
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
  margin: 30px 0 150px 0;
`;
