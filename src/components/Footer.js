import styled from "styled-components";
import icons from './icon'

export default function Footer({ contador, iconArray }) {
  return (
    <ContainerFooter data-test="footer">
      {contador}/8 concluídos
      <div>
      {iconArray.map((i, index) => <img data-test={icons[i].data} key={index} src={icons[i].src} alt={icons[i].data} />)}
      </div>
    </ContainerFooter>
  );
}

const ContainerFooter = styled.div`
  width: 100%;
  height: 70px;
  background: #fff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  gap:10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  text-transform: uppercase;
  font-family: "Recursive", sans-serif;
  font-weight: 400;
  font-size: 18px;
  div {
    display:flex;
    gap:10px;
  }
`;
