import styled from "styled-components";
import icons from './icon.js';
import setaVirar from "../assets/seta_virar.png";
import { useState } from "react";

export default function Card({
  index,
  contador,
  question,
  answer,
  setContador,
  setIconArray,
  iconArray
}) {
  const [virado, setVirado] = useState([]);
  const [answered, setAnswered] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [icon, setIcon] = useState(0);
  const firstIcon = 1;
  const secondIcon = 2;
  const thirdIcon = 3;

  function openCard(card) {
    setVirado([card]);
    setAnswered(!answered);
  }

  function turnCard() {
    setShowButton(true);
  }

  function answerCard(res) {
    const newCard = [...iconArray, res];
    setIconArray(newCard);
    setIcon(res);
    const newCount = contador + 1;
    setContador(newCount);
    setVirado([]);
  }

  const turnedCard = virado.includes(index);

  return !turnedCard ? (
    <ContainerCard data-test="flashcard" showButton={showButton} icon={icon} firstIcon={firstIcon} secondIcon={secondIcon} thirdIcon={thirdIcon}>
      <p data-test="flashcard-text">{`Pergunta ${index + 1}`}</p>
      <div>
        <img
          data-test={icons[icon].data}
          src={icons[icon].src}
          onClick={() => !answered && openCard(index)}
          alt={icons[icon].alt}
        />
      </div>
    </ContainerCard>
  ) : (
    <OpenCard data-test="flashcard" showButton={showButton}>
      <p data-test="flashcard-text">
        {!showButton ? `${question}` : `${answer}`}
      </p>
      <div>
        {!showButton ? (
          <img
            data-test="turn-btn"
            src={setaVirar}
            onClick={() => turnCard()}
            alt="icone"
          />
        ) : (
          <>
            <DontRemember data-test="no-btn"
            onClick={() => answerCard(firstIcon)}>
              Não lembrei
            </DontRemember>
            <AlmostRemember
              data-test="partial-btn"
              onClick={() => answerCard(secondIcon)}
            >
              Quase não lembrei
            </AlmostRemember>
            <Zap data-test="zap-btn" onClick={() => answerCard(thirdIcon)}>
              Zap!
            </Zap>
          </>
        )}
      </div>
    </OpenCard>
  );
}

const ContainerCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  width: calc(50% + 100px);
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  p {
    font-size: 16px;
    font-family: "Recursive", sans-serif;
    color: ${({ icon, firstIcon, secondIcon, thirdIcon }) =>
        icon === firstIcon
        ? "#FF3030"
        : icon === secondIcon
        ? "#FF922E"
        : icon === thirdIcon ? "#2FBE34" : "#333"};
    text-decoration: ${({ icon }) => !icon ? "none" : "line-through"};
    font-weight: 700;
  }
`;

const OpenCard = styled(ContainerCard)`
  flex-direction: column;
  align-items: center;
  background-color: #ffffd4;
  align-items: flex-start;
  min-height: 131px;
  gap:15px;
  p {
    text-align: left;
    font-size: 18px;
    font-weight: 400;
    color:#333;
  }
  div {
    gap: 10px;
    width: 100%;
    display: flex;
    justify-content: ${({ showButton }) =>
      !showButton ? `center` : "space-between"};
    flex-direction: ${({ showButton }) => !showButton ? `column` : "row"};
    ${({ showButton }) => !showButton && `align-items: flex-end;`}
  }
`;

const Button = styled.button`
  width: 100%;
  height: 37px;
  border-radius: 5px;
  border: none;
  font-size: 12px;
  color: #fff;
  overflow: hidden;
  font-family: "Recursive", sans-serif;
`;

const DontRemember = styled(Button)`
  background-color: #ff3030;
`;
const AlmostRemember = styled(Button)`
  background-color: #ff922e;
`;

const Zap = styled(Button)`
  background-color: #2fbe34;
`;