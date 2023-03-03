import { useState } from "react";
import styled from "styled-components";
import logo from '../assets/logo.png';

export default function StartPage(){
    const [buttonClicked, setButtonClicked] = useState(false);

    return (
        <WelcomeModal buttonClicked={buttonClicked}>
        <WelcomeMenu>
            <img src={logo} alt="logo"/>
            <h1>ZapRecall</h1>
            <StartButtom data-test="start-btn" onClick={() => setButtonClicked(!buttonClicked)}>Iniciar Recall!</StartButtom>
        </WelcomeMenu>
        </WelcomeModal>
    );
}

const WelcomeModal = styled.div`
    display: ${({buttonClicked}) => buttonClicked ? "none" : "flex"};
    align-items: center;
    width:100vw;
    height:100vh;
    background-color: #FB6B6B;
    position:fixed;
    z-index:1;
    top:0;
    left:0;
`

const WelcomeMenu = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin: auto auto;
    gap:5px;
`

const StartButtom = styled.button`
    width:246px;
    height:54px;
    background-color:#fff;
    border: 1px solid #d70900;
    border-radius:5px;
    color:#d70900;
    font-size: 18px;
    cursor:pointer;
    margin-top:40px;
`