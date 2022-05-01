import styled from "styled-components";
import ceuEstrelado from "../../imgs/ceuEstrelado.gif";

export const Container = styled.div `
    background-image: url(${ceuEstrelado});
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    width: 98.79vw;
    height: 230vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const Botoes = styled.div `
    padding: 3px;
    margin-left: 3.5vw;
    margin-bottom: 1.5vw;
    margin-top: 1.5vw;
    width: 15vw;
    text-align: center;
    border-radius: 15px;
    box-shadow: 3px 3px 6px 2px black;
    background-color: purple;
    color: white;
    font-weight: bold;
    cursor: pointer;

    :hover {
        background-color: #2600ff;
        color: white;
        cursor: pointer;
    }
`

export const TripsList = styled.div`
    width: 22vw;
    margin: auto;
    margin: 0, 5px;
    border-radius: 5px;
    padding-left: 9px;
    padding-right: 20vw;
    padding-bottom: 20vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`

export const TripsLists = styled.div`
    width: 23vw;
    margin: auto;
    padding-left: 9px;
    padding-bottom: 12px;
    border-radius: 5px;
    background-color: whitesmoke;

    p {
        font-size: 20px;
        text-align: center;
    }
`
    
export const BotaoFuncoes = styled.div `
    padding-left: 2vw;
    margin-bottom: 105vw;
    display: flex;
    text-align: center;
    align-items: center;

    button {
        height: 40px;
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