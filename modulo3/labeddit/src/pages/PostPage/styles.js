import styled from 'styled-components'

export const Details = styled.div`
    box-shadow: #FAB253 0px 0px 7px 4px;
    background-color: #ffffff;
    width: 25vw;
    padding-top: 1vw;
    padding-bottom: 2vw;
    padding-left: 4vh;
    margin-right: 20vh;
    word-wrap: break-word;
    border-radius: 5px;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) { 
        width:320px;
     }
  `

export const DetailsText = styled.div`
font-weight: bold;
width: 25vw;
padding-top: 1vw;
padding-left: 4vh;
margin-right: 20vh;
word-wrap: break-word;
border-radius: 5px;

div {
  font-size: 16px;
  color: #6F6F6F;
}

p {
  font-size: 22px;
  padding-top: 2.5vh;
  color: orange;
  padding-left: 2.5vw;
}

@media screen and (min-device-width : 320px) and (max-device-width : 480px) { 
    width:320px;
 }
`

export const DivComments = styled.div`
    box-shadow: #FAB253 0px 0px 7px 4px;
    width: 40vw;
    margin-top: 5vh;;
    margin-right: 7vw;
    word-wrap: break-word;
    padding: 2vw;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) { 
        width:320px;
     }
  `

export const Body = styled.div `
  width: 45vw;
  margin: 10vh 33vw;
  align-items: center;
  padding-right: 7vh;
  justify-content: center;
  max-width: 300vw;
  display: flex;
  flex-direction: column;

  input {
    background-color: #ffffff;
    border: 1px solid #d5d8de;
    border-radius: 4px;
    padding: 0.5vw 10vw;
    margin-bottom: 1vw;
  }

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
`

export const Input = styled.textarea `
    width: 35vw;
    margin-right: 5vw;
    margin-bottom: 4vw;
    min-height: 20vh;
    border: #FAB253 1px solid;
    box-shadow: #FAB253 0px 0px 7px 4px;
    border-radius: 5px;    
    word-wrap: break-word;
    white-space:normal;
    resize: none;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) { 
        width:320px;
     }
`

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    background-color: #fffbf2;
    padding-bottom: 50vh;
    margin: -1.4vh -0.6vw;
    
`

export const DivBotoes = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const Header = styled.div`
  display: flex;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  justify-content: space-between;
  margin-top: 1px;
  padding: 0.8vw;

  button {
    background-color: transparent;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 22px;
    cursor: pointer;

    &:hover {
        cursor: pointer;
        transition: all 400ms;
        transform: scale(1.1);
    }
  }
`;

export const Button = styled.div`
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  color: white;
  font-size: 19px;
  font-weight: bold;
  border-radius: 27px;
  height: 8vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3px 30px;
  gap: 10px;
  position: absolute;
  margin-top: 30vh;
  margin-right: 10vh;
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
