import styled from "styled-components"
import logo from "../assets/logo.png";

export default function Header(){
    return (
        <ContainerHeader>
            <img src={logo} alt={logo}/>  
            <p>ZapRecall</p>
        </ContainerHeader>
    );
}

const ContainerHeader = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  margin-top:30px;
  gap:20px;
  height:60px;
  img {
    width: 52px;
  }
  p {
    font-size:36px;
    font-weight:400;
    color:white;
    font-family: 'Righteous', cursive;
  }
  `