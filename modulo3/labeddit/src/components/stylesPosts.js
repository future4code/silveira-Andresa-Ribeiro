import styled from "styled-components"

export const Icon = styled.img `
    width: 27px;
    padding: 5px;
    margin-bottom: 3vh;
    border-radius: 11px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    cursor: pointer;

    &:hover {
        cursor: pointer;
        transition: all 800ms;
        transform: scale(1.1);
    }
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
    box-shadow: #fda085 5px 5px 7px 4px;
    border-radius: 5px;
    word-wrap: break-word;
    margin-top: 15vh;
    text-align: center;
    width: 23vw;
    height: 24vh;
    margin-right: 12vw;
    color: orange;
    padding: 1vh 5vw 20vh;
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

export const TextareaTitulo = styled.textarea `
    width: 320px;
    min-height: 5vh;
    box-shadow: #D3D9DB 0px 0px 0px 4px, #47515A 0px 0px 0px 8px;
    border-radius: 5px;    
    word-wrap: break-word;
    white-space:normal;
    resize: none;
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
    column-gap: 10px;
    justify-content: center;
    color: black;
    font-weight: bold;
    font-size: 18px;
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

export const DivBotoes = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const Button = styled.div`
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  border-radius: 27px;
  height: 8vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3px 133px;
  gap: 10px;
  position: absolute;
  margin-left: 10vw;
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