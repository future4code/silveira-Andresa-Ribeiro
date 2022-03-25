import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: rgb(255, 229, 248) ;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const MensagensContainer = styled.div`
  background-color: rgb(255, 239, 251);
  width: 35vw;
  height: 85vh;
  margin-top: 19px;
  margin-bottom: 20px;
  margin-left: 50px;
  display: flex;
  flex-direction: column-reverse;
  border-radius: 12px;
  border: 1px inset rgb(219, 31, 172);
`;

export const Mensagem = styled.p`
  background-color: rgb(219, 31, 172);
  margin: 3px;
  width: 50%;
  padding: 12px 15px;
  border-radius: 6px;
  border: 1.5px solid pink;
  color: white;
`;

export const Remetente = styled.p`
  background-color: lightgray;
  margin: 3px;
  width: 50%;
  padding: 12px 15px;
  border-radius: 6px;
  border: 1px solid lightgray;
  color: rgb(243, 243, 243);
`;

export const MinhaMensagem = styled.p`
  align-self: flex-end;
  background-color: lightsteelblue;
  margin: 3px;
  padding: 12px 15px;
  text-align: right;
  width: 50%;
  border-radius: 5px;
  border: 1px solid lightgray;
`;

export const Container = styled.div`
  width: 45vw;
  height: 2em;
  display: flex;
`;

export const RemetenteInput = styled.input`
  background-color: rgb(255, 229, 248);
  border-radius: 5px;
  border: 2px solid rgb(224, 70, 178);
  margin: 3px 8px 1px 50px;
  width: 150px;
`;

export const MensagemInput = styled.input`
  background-color: rgb(255, 229, 248);
  border-radius: 5px;
  border: 2px solid rgb(224, 70, 178);
  margin: 1px 1px 1px 140px;
  flex-grow: 1;
  width: 450px;
`;

export const EnviarMensagem = styled.button`
  background-color: blueviolet;
  border-radius: 5px;
  border: none;
  margin: 1px 150px 1px 4px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer
`;

export default styled;