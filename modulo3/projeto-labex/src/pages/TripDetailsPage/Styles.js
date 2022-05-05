import styled from "styled-components";
import ceuEstrelado from "../../imgs/ceuEstrelado.gif";

export const Container = styled.div `
    background-image: url(${ceuEstrelado});
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1vw;
`

export const InfosContainer = styled.div`
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    width: 80%;
    padding-bottom: 2vw;
    padding-left: 2.5vw;
    padding-right: 2.5vw;
    background-color: whitesmoke;

    input {
        padding: 0.5vw;
        box-shadow: 2px 2px 5px 1px black;
    }

    select {
        padding: 0.5vw;
        box-shadow: 2px 2px 5px 1px black;
    }
`

export const CandidatesContainer = styled.div`
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-right: 3vw;
    width: 50%;
    padding-bottom: 100px;
    padding-left: 1vw;
    background-color: whitesmoke;

    input {
        padding: 0.5vw;
        box-shadow: 2px 2px 5px 1px black;
    }

    select {
        padding: 0.5vw;
        box-shadow: 2px 2px 5px 1px black;
    }
`

export const BotaoFuncoes = styled.div `
    padding-right: 1vw;
    
    display: flex;
    text-align: center;

    button {
        height: 40px;
        width: 10vw;
        margin: auto 2vw;
        border-radius: 5px;
        border: black solid 1px;
        background-color: purple;
        color: white;
        box-shadow: 3px 3px 6px 2px black;
        font-weight: bold;
        justify-content: space-evenly;
        cursor: pointer;
    }

    button:hover {
        background-color: #2600ff;
        box-shadow: 2px 2px 5px 1px black;
        color: whitesmoke;
        cursor: pointer;
    }
`