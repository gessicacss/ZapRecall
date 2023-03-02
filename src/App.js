import styled from "styled-components"
import FlashCards from "./components/FlashCards"
import Footer from "./components/Footer"
import Header from "./components/Header"

export default function App() {
  return (
    <>
      <Header />
      <Container>
      <FlashCards />
      <Footer/>
    </Container>
    </>
  )
}

const Container = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width:100%;
  gap:30px;
  flex-direction: column;
  margin: 30px 0 150px 0;
`