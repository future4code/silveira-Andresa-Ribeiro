import styled from "styled-components";

export const Container = styled.div `
    align-items: center;
  margin-left: 27vw;
  margin-top: 12vh;
  border-radius: 0px;
  background-color: #ffffff;
`

export const InputsContainer = styled.div `
  width: 45vw;
  margin-top: 9vh;
  align-items: center;
  max-width: 300vw;
  display: flex;
  flex-direction: column;
  margin-bottom: 4vw;
  
  input {
    background-color: #ffffff;
    border: 1px solid #d5d8de;
    border-radius: 4px;
    padding: 0.5vw 10vw;
    margin-bottom: 1vw;
    
  }
`

export const ButtonContainer = styled.div `
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  border-radius: 27px;
  height: 8vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3px 100px;
  gap: 10px;
  position: absolute;
  margin-top: 11vw;
  cursor: pointer;

  button {
    text-align: center;
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
  }

  &:hover {
        cursor: pointer;
        transition: all 800ms;
        transform: scale(1.1);
    }
`

export const ButtonContainer2 = styled.div `
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  border-radius: 27px;
  height: 8vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3px 50px;
  gap: 10px;
  position: absolute;
  margin-top: 3vw;
  margin-left: 17vw;
  cursor: pointer;

  button {
    text-align: center;
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
  }

  &:hover {
        cursor: pointer;
        transition: all 800ms;
        transform: scale(1.1);
    }
`

export const Checkbox = styled.div `
    text-align: center;
    margin-right: 26vw;
    margin-top: 18vh;
    border-radius: 0px;
    background-color: #ffffff;
    font-family: 'noto-sans';

    span {
        color: rgb(0, 81, 255);
        cursor: pointer;
        
        :hover {
          text-decoration: underline;
        }
    }

    input {
        margin-right: 1vw;
    }
`

export const HeaderContainer = styled.div `
    padding-left: 8vw;
    color: orange;
    font-size: 24px;
`
