import axios from 'axios';
import styled from 'styled-components';
import React from 'react';
import Logo from '../../../assets/logo.png'

const Container = styled.div `
  height: 12vh;
  background-color: #060029;
  color: white;
  text-align: center;
  padding-top: 25px;
  font-size: 35px;
  font-weight: bold;
`

const Header = () => {
  return (
    <Container>
      <img src={Logo} />
      <button>Entrar</button>
    </Container>
  )
}
export default Header;