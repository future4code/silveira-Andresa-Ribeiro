import styled from 'styled-components';

export const Container = styled.div `
  align-items: 'center';
  margin-left: 27vw;
  margin-top: 12vh;
  border-radius: 0px;
  background-color: #ffffff;
`

export const Header = styled.div `
  text-align: center;
  border-radius: 0px;
  margin-right: 28vw;

  h2{
    text-align: center;
    margin-top: 1vw;
    color: orange;
    font-size: 28px;
  }
`

export const InputsContainer = styled.div `
  width: 45vw;
  margin-top: 11vh;
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
  padding: 3px 133px;
  gap: 10px;
  position: absolute;
  margin-left: 11vw;
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
  border: 1px solid #FE7E02;
  border-radius: 27px;
  height: 8vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3px 112px;
  gap: 10px;
  position: absolute;
  margin-top: 6vw;
  margin-left: 11.3vw;
  cursor: pointer;

  button {
    text-align: center;
    background-color: transparent;
    border: none;
    color: #FE7E02;
    cursor: pointer;
  }

  &:hover{
        cursor: pointer;
        transition: all 800ms;
        transform: scale(1.1);
    }
`
