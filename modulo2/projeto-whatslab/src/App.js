import React from 'react';
import styled from 'styled-components';
import CriarMensagem from './components/CriarMensagem';


const MainContainer = styled.div`
  background-color: black;
  background-image: url(https://flawlessmattergfx.files.wordpress.com/2019/10/james-doyle-1-1.gif);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <MainContainer>
      <CriarMensagem />
    </MainContainer>
    );
}

export default App;