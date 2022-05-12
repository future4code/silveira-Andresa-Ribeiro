import styled from "styled-components";

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
`;

export const Header = styled.div`
  display: flex;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  justify-content: space-between;

  button {
    background-color: transparent;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 22px;
  }
`;

export const Button = styled.div`
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  border-radius: 27px;
  height: 6vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3px 15px;
  gap: 10px;
  position: absolute;
  margin-left: 15vw;
  text-align: center;
  color: white;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    transition: all 800ms;
    transform: scale(1.1);
  }
`;
