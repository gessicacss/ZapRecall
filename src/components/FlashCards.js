import cards from "./cards";
import Card from "./Card";

export default function FlashCards({ setContador, contador, setIconArray, iconArray }) {

  return cards.map((card, index) => (
    <Card
      key={index}
      index={index}
      question={card.question}
      setContador={setContador}
      contador={contador}
      answer={card.answer}
      iconArray={iconArray}
      setIconArray={setIconArray}
    />
  ));
}
