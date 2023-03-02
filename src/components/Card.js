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
}) {
  const [correct, setCorrect] = useState([]);
  const [virado, setVirado] = useState([]);
  const [answered, setAnswered] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [icon, setIcon] = useState(0);

  function openCard(card) {
    setVirado([card]);
    setAnswered(!answered);
  }

  function turnCard() {
    setShowButton(true);
  }

  function answerCard(res) {
    setCorrect([...correct, res]);
    console.log(res);
    setIcon(res);
    const newCount = contador + 1;
    setContador(newCount);
    setVirado([]);
  }

  const turnedCard = virado.includes(index);

  return !turnedCard ? (
    <ContainerCard data-test="flashcard" showButton={showButton} icon={icon}>
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
            onClick={() => turnCard(index)}
            alt="icone"
          />
        ) : (
          <>
            <DontRemember data-test="no-btn"
            onClick={() => answerCard(1)}>
              Não lembrei
            </DontRemember>
            <AlmostRemember
              data-test="partial-btn"
              onClick={() => answerCard(2)}
            >
              Quase não lembrei
            </AlmostRemember>
            <Zap data-test="zap-btn" onClick={() => answerCard(3)}>
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
  padding: 20px;
  background-color: #fff;
  width: calc(50% + 100px);
  height: 65px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  p {
    font-size: 16px;
    font-family: "Recursive", sans-serif;
    color: ${({ icon }) =>
      icon === 0
        ? "#333"
        : icon === 1
        ? "red"
        : icon === 2
        ? "orange"
        : icon === 3 && "green"};
    text-decoration: ${({ icon }) => (!icon ? "none" : "line-through")};
    font-weight: 700;
  }
`;

const OpenCard = styled(ContainerCard)`
  flex-direction: column;
  align-items: center;
  background-color: #ffffd4;
  align-items: flex-start;
  height: 131px;
  p {
    text-align: left;
    font-size: 18px;
    font-weight: 400;
  }
  div {
    gap: 5px;
    width: 100%;
    display: flex;
    justify-content: ${({ showButton }) =>
      !showButton ? `center` : "space-between"};
    flex-direction: ${({ showButton }) => (!showButton ? `column` : "row")};
    align-items: ${({ showButton }) => (!showButton ? `flex-end` : "")};
  }
`;

const Button = styled.button`
  width: 85px;
  height: 37px;
  border-radius: 5px;
  border: none;
  font-size: 12px;
  color: #fff;
  overflow: hidden;
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
