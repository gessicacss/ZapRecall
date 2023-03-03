import styled from "styled-components";
import icons from './icon';
import sad from '../assets/sad.png';
import party from '../assets/party.png';

export default function Footer({ contador, iconArray }) {

  const allCardsCount = 8;
  const allAnswered = contador === allCardsCount;
  const haveMistakes = iconArray.includes(1);

  return (
    <ContainerFooter data-test="footer" allAnswered={allAnswered}>
      {!allAnswered ? '' : haveMistakes ? 
      <ContainerMessage data-test="finish-text">
        <div>
          <img src={sad} alt='emoji triste' />
          <strong>Putz...</strong>
        </div>
        <p>Ainda faltam alguns...</p>
        <p>Mas não desanime!</p>
      </ContainerMessage> : 
      <ContainerMessage data-test="finish-text">
        <div>
          <img src={party} alt='emoji festa' />
        <strong>Parabéns!</strong>
        </div>
         <p>Você não esqueceu de nenhum flashcard!</p>
      </ContainerMessage> }
      {contador}/{allCardsCount} concluídos
      <div>
      {iconArray.map((i, index) => <img data-test={icons[i].data} key={index} src={icons[i].src} alt={icons[i].data} />)}
      </div>
    </ContainerFooter>
  );
}

const ContainerFooter = styled.div`
  width: 100%;
  height: ${({allAnswered}) => !allAnswered ? '70px' : '200px;'};
  color:#333;
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
  div:last-child {
    display:flex;
    gap:10px;
  }
`;

const ContainerMessage = styled.div`
  display:flex;
  width:30%;
  flex-direction: column;
  text-align:center;
  gap:5px;
  text-transform: none;
  margin-bottom:10px;
  div {
    display:flex;
    gap:10px;
    justify-content: center;
    strong {
      font-weight:700;
    }
  }
`;
