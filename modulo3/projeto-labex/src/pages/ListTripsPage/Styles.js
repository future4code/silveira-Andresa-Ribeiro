import styled from "styled-components";
import ceuEstrelado from "../../imgs/ceuEstrelado.gif";

export const Container = styled.div `
    background-image: url(${ceuEstrelado});
    background-attachment: fixed;
`

export const Titulo = styled.div `
    color: white;
    font-size: 35px;
    font-weight: bold;
    padding: 40px;
`

export const Card = styled.div `
    width: 22vw;
    margin: auto;
    word-wrap: break-word;
    background-color: whitesmoke;
    margin: 0, 5px;
    border-radius: 5px;
    padding-left: 9px;
    padding-right: 12px;
    padding-bottom: 12px;
    box-shadow: 2px 2px 5px 1px black;
`

export const TripsPageContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
        align-self: flex-end;
        margin-right: 10%;
        margin-top: 3%;
    }
`
export const ComponentsTripContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    width: 80%;
    margin-bottom: 10px;
    font-size: 18px;
    text-align: center;
`

export const TripCardContainer = styled.div `
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    border-radius: 5px;
    box-shadow: 2px 2px 5px 1px rgb(49 175 180 / 40%);

    p {
        margin: 7px 0;
    }
`

export const Botao = styled.div `
    padding: 10px;
    text-align: center;
    border-radius: 15px;
    box-shadow: 3px 3px 6px 2px black;
    background-color: purple;
    color: white;
    font-weight: bold;
    cursor: pointer;

    :hover {
        background-color: #2600ff;
        color: whitesmoke;
        cursor: pointer;
    }
`

export const BotaoFuncoes = styled.div `
    padding: 25px;
    display: flex;
    justify-content: space-between;
    text-align: center;

    button {
        height: 40px;
        margin: 20px 70px;
        border-radius: 5px;
        border: black solid 1px;
        background-color: purple;
        color: white;
        box-shadow: 3px 3px 6px 2px black;
        font-weight: bold;
        cursor: pointer;
    }

    button:hover {
        background-color: #2600ff;
        box-shadow: 2px 2px 5px 1px black;
        color: whitesmoke;
        cursor: pointer;
    }
`