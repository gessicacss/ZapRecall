import cards from "./cards";
import Card from "./Card";

export default function FlashCards({ setContador, contador }) {
  return cards.map((card, index) => (
    <Card
      key={index}
      index={index}
      question={card.question}
      setContador={setContador}
      contador={contador}
      answer={card.answer}
    />
  ));
}
