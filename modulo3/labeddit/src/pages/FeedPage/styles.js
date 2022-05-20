import styled from "styled-components";

export const Container = styled.div`
  background-color: #fffbf2;
  margin: -1.2vh -0.6vw;

`

export const Body = styled.div`
  width: 45vw;
  margin: 8vh 33vw;
  align-items: center;
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
  font-weight: bold;
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

  &:hover {
        cursor: pointer;
        transition: all 800ms;
        transform: scale(1.1);
    }
  }
`;

export const Header = styled.div`
  display: flex;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  justify-content: space-between;
  margin-top: 1px;
  padding: 10px;

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
