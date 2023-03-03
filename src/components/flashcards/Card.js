import icons from "../icon.js";
import setaVirar from "./assets/seta_virar.png";
import { useState } from "react";
import {
  ContainerCard,
  OpenCard,
  DontRemember,
  AlmostRemember,
  Zap,
} from "./cardStyles";

export default function Card({
  index,
  contador,
  question,
  answer,
  setContador,
  setIconArray,
  iconArray,
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
    <ContainerCard
      data-test="flashcard"
      showButton={showButton}
      icon={icon}
      firstIcon={firstIcon}
      secondIcon={secondIcon}
      thirdIcon={thirdIcon}
    >
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
            <DontRemember
              data-test="no-btn"
              onClick={() => answerCard(firstIcon)}
            >
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
