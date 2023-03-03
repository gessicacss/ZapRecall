import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <ContainerHeader>
      <img src={logo} alt={logo} />
      <h2>ZapRecall</h2>
    </ContainerHeader>
  );
}

const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  gap: 20px;
  height: 60px;
  img {
    width: 52px;
  }
`;
