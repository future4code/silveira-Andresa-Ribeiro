import styled from "styled-components";
import ceuEstrelado from "../../imgs/ceuEstrelado.gif";

export const HomeContainer = styled.div `
    width: 100vw;
    height: 71.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 6vw;
    background-image: url(${ceuEstrelado});
    background-attachment: fixed;
`

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10%;

    img {
        width: 100%;
    }

    h2 {
        color: #a2e4e8a8;
        text-shadow: 2px 2px 16px #000000;
    }
`

export const Buttons = styled.div `
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 20%;

    button {
        height: 35px;
        border-radius: 10px;
        border: none;
        background-color: purple;
        color: white;
        font-weight: bold;
        box-shadow: 3px 3px 6px 2px black;
        cursor: pointer;
    }

    button:hover {
        background-color: #2600ff;
        color: whitesmoke;
        cursor: pointer;
    }
    
`