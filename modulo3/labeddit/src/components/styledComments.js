import styled from "styled-components"

export const Icon = styled.img `
    width: 25px;
`

export const Headers = styled.div `

    span {
        color: #6F6F6F;
        font-size: 13px;
        font-weight: bold;
        display: flex;
        font-family: 'IBM Plex Sans';
        font-weight: 400;
        line-height: 36px;

    }

    h3 {
        color: #ff7b00;
        font-size: 20px;
        padding-bottom: 3vh;
    }

    p {
        font-size: 18px;
        color: black;
        padding-bottom: 6vh;
    }
`

export const Card = styled.div `
    background-color: #ffffff;
    border: #fda085 1px solid;
    border-radius: 5px;
    word-wrap: break-word;
    margin-top: 3vh;
    text-align: center;
    width: 23vw;
    height: 20vh;
    margin-left: 3vw;
    color: orange;
    padding: 1vh 5vw 15vh;

    div {
        color: #6F6F6F;
    }

    p {
        color: black;
        margin-top: 10vh;
        font-size: 21px;
    }

    span {
        color: black;
        margin-top: -15vh;
    }
`

export const DivCards = styled.div `
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    padding-top: 20px;
    width: 320px;
    margin: auto;
`

export const DivBody = styled.div `
    display: flex;
    flex-direction: column;  
`

export const Textarea = styled.textarea `
    width: 320px;
    min-height: 15vh;
    box-shadow: #D3D9DB 0px 0px 0px 4px, #47515A 0px 0px 0px 8px;
    border-radius: 5px;    
    word-wrap: break-word;
    white-space:normal;
    resize: none;
`

export const DivButtons = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const TextareaTitulo = styled.textarea `
    width: 320px;
    min-height: 5vh;
    border-radius: 5px;    
`

export const DivForm = styled.div `
    display: flex;
    flex-direction: column;
    min-height: 30vh;
    justify-content: center;
`


export const StyledForm = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    word-wrap: break-word;
    margin: auto;
`

export const DivBotoesPosts = styled.div `
    display: flex;
    justify-content: center;
    padding: 10vw;
    padding-right: 15vw;
    color: black;
    font-weight: bold;
    font-size: 21px;

    div {
        padding: 0.5vw;
    }
`

export const Icones = styled.button `
    background: none;
    border: none;
    cursor: pointer;
    padding-left: 10px;
`

export const Container = styled.div`
  width: 45vw;
  margin: 8vh 33vw;
  align-items: center;
  max-width: 300vw;
  display: flex;
  flex-direction: column;

  button {
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  border-radius: 27px;
  border: none;
  color: white;
  height: 6vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3px 30px;
  gap: 10px;
  position: absolute;
  margin-left: 12vw;
  cursor: pointer;
  }
`;

export const Button = styled.div`
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  border-radius: 27px;
  height: 4vh;
  margin-top: -16vh;
  margin-right: 1vw;
  display: flex;
  align-items: center;
  padding: 1px 20px;
  cursor: pointer;

  button {
    text-align: center;
    background-color: transparent;
    border: none;
    color: white;
  }

  &:hover {
        cursor: pointer;
        transition: all 800ms;
        transform: scale(1.1);
    }
`;

export const Button2 = styled.div`
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  border-radius: 27px;
  margin-top: -58vh;
  margin-left: 9vw;
  height: 4vh;
  display: flex;
  align-items: center;
  padding: 1px 20px;
  cursor: pointer;

  button {
    text-align: center;
    background-color: transparent;
    border: none;
    color: white;
  }

  &:hover {
        cursor: pointer;
        transition: all 800ms;
        transform: scale(1.1);
    }
`;