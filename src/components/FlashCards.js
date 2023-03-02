import { useState } from "react"
import styled from "styled-components"
import setaPlay from '../assets/seta_play.png'
import cards from "./cards"

export default function FlashCards() {
    const [pergunta, setPergunta] = useState(false);
    const [virado, setVirado] = useState([]);

    function openCard(card){
    if (!virado.includes(card)) {
            setVirado([...virado, card]);
            setPergunta(!pergunta);
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
        />)
    )
}

function Card({seta, index, pergunta, openCard, virado, question}){
    return (
        <ContainerCard card={virado.includes(index)}>
        <p>{!virado.includes(index) ? `Pergunta ${index+1}` : `${question}`}</p>
        <img src={seta} onClick={() => openCard(index)}/>
        </ContainerCard>
    )
}

const ContainerCard = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:20px;
    background-color:${({card}) => !card ? '#fff' : '#FFFFD4'};
    width:calc(50% + 100px);
    height:${({card}) => !card ? '65px' : '200px'};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    p {
        font-size:16px;
        font-family: 'Recursive', sans-serif;
        color:#333;
        font-weight:700;
    }
`