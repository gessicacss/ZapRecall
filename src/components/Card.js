import styled from "styled-components";

export default function Card({seta, index, pergunta, openCard, virado, question, turnCard, setaVirar, answer, answered, answerCard, icon, correct}){
    const turnedCard = virado.includes(index);
    const isItAnswered = answered.includes(index);
    return (
        !turnedCard ? 
        <ContainerCard isItAnswered={isItAnswered}>
        <p>{`Pergunta ${index+1}`}</p>
        <div>
        <img src={!isItAnswered ? seta : icon} onClick={() => openCard(index)} alt="icone"/>
        </div>
        </ContainerCard> :
        <OpenCard isItAnswered={isItAnswered}>
        <p>{!isItAnswered ? `${question}` : `${answer}`}</p>
         <div> 
        { !isItAnswered ?
        <img src={setaVirar} onClick={() => turnCard(index)} alt="icone"/> 
        : 
        <>
        <DontRemember onClick={() => answerCard('erro')}>Não lembrei</DontRemember>
        <AlmostRemember onClick={() => answerCard('quase')}>Quase não lembrei</AlmostRemember>
        <Zap onClick={() => answerCard('certo')}>Zap!</Zap> 
        </> }
        </div>
        </OpenCard>
    )
}

const ContainerCard = styled.div`
    display:flex;
    justify-content: space-between;
    padding:20px;
    background-color:#fff;
    width:calc(50% + 100px);
    height:65px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    p {
        font-size:16px;
        font-family: 'Recursive', sans-serif;
        color:#333;
        font-weight:700;
    }
`

const OpenCard = styled(ContainerCard)`
    flex-direction:column;
    align-items: center;
    background-color:#FFFFD4;
    align-items: flex-start;
    height:131px;;
    p {
        text-align:left;
        font-size:18px;
        font-weight:400;
    }
    div {
        gap:5px;
        width:100%;
        display:flex;
        justify-content:${({isItAnswered}) => !isItAnswered ? `center` : 'space-between'};
        flex-direction:${({isItAnswered}) => !isItAnswered ? `column` : 'row'};
        align-items:${({isItAnswered}) => !isItAnswered ? `flex-end` : ''}; 
    }
`

const Button = styled.button`
        width:85px;
        height:37px;
        border-radius:5px;
        border:none;
        font-size:12px;
        color:#fff;
        overflow: hidden;
`

const DontRemember = styled(Button)`
    background-color: #ff3030;
`
const AlmostRemember = styled(Button)`
    background-color: #ff922e;
`

const Zap = styled(Button)`
    background-color: #2fbe34;
`