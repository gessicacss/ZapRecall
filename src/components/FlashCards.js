import { useState } from "react"
import setaPlay from '../assets/seta_play.png'
import setaVirar from '../assets/seta_virar.png'
import icone_certo from '../assets/icone_certo.png'
import icone_quase from '../assets/icone_quase.png'
import icone_erro from '../assets/icone_erro.png'
import cards from "./cards"
import Card from "./Card"

export default function FlashCards() {
    const [pergunta, setPergunta] = useState(false);
    const [virado, setVirado] = useState([]);
    const [showButton, setShowButton] = useState(false);
    const [answered, setAnswered] = useState([]);
    const [correct, setCorrect] = useState([]);
    const [icon, setIcon] = useState([]);

    function openCard(card){
    if (!virado.includes(card)) {
            setVirado([...virado, card]);
            setPergunta(!pergunta);
        }
    }

    function turnCard(card){
        setShowButton(true);
        setAnswered([...answered, card]);
    }

    function answerCard(res){
        if (res === 'erro') {
            setCorrect([...correct, res]);
            setIcon([...icon, res])
        }
    }

    return (
        cards.map((card, index) => <Card key={index} 
        index={index}
        virado={virado} 
        seta={setaPlay} 
        openCard={openCard} 
        pergunta={pergunta}
        question={card.question}
        turnCard={turnCard}
        answered={answered}
        answer={card.answer}
        answerCard={answerCard}
        icon={icone_certo}
        correct={correct}
        setaVirar={setaVirar}
        />)
    )
}