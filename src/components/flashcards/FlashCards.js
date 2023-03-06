import cards from "./cards";
import Card from "./Card";

export default function FlashCards({ setCounter, counter, setIconArray, iconArray }) {

  return cards.map((card, index) => (
    <Card
      key={index}
      index={index}
      question={card.question}
      setCounter={setCounter}
      counter={counter}
      answer={card.answer}
      iconArray={iconArray}
      setIconArray={setIconArray}
    />
  ));
}
