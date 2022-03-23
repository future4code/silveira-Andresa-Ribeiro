import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import MinhaFoto from './img/minha-foto.jpg'
import Email from './img/email.png';
import Endereco from './img/endereco.png';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const Container = styled.div`
  width: 40vw;
  margin: 10px 0;

  h3 {
    text-align: center;
    margin-bottom: 20px;
  }
  h2 {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
`

const All = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`

function App() {
  return (
    <All>
      <Main>
        <Container>
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {MinhaFoto}
          nome="Andresa Alves Ribeiro" 
          descricao="Desde os meus 11 anos comecei a ser autodidata em aprender informática. Aos 14, fiz curso de montagem e manutenção de computadores e foi uma experiência que me fez perceber como adoro o mundo da tecnologia e como quero fazer parte.
          Agora estudando pra entrar no mercado como Dev Full-Stack e cada dia com vontade de aprender ainda mais."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
      </Container>

      <Container>
        <CardPequeno
          icone= {Email}
          email="Email: "
          conteudo="andresa_15ga@hotmail.com"
      />

        <CardPequeno
          icone= {Endereco}
          endereco="Endereço: "
          conteudo="Rua Expedicionários, 000, Cosmópolis - SP"
      />
      </Container>

      <Container>
        <h2>Formação Acadêmica</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eab0f1225c2d474a92656df_fav2_LabeNu_.png" 
          nome="Labenu" 
          descricao="Curso de desenvolvimento web Full-Stack" 
        />
        
        <CardGrande 
          imagem="https://iconape.com/wp-content/files/uz/193328/png/193328.png" 
          nome="S.O.S Educação Profissional" 
          descricao="Curso de Montagem e Manutenção de Computadores" 
        />
      </Container>

        <Container>
        <h3>Idiomas</h3>
        <CardGrande
        imagem="https://logospng.org/download/bandeira-dos-estados-unidos/bandeira-estados-unidos-768.png"
        nome="Inglês"
        descricao="Nível básico"
        />
        </Container>

        <Container>
          <h2>Experiências profissionais</h2>
          <CardGrande 
            imagem= "https://media-exp1.licdn.com/dms/image/C510BAQHFBUoMj7aOyA/company-logo_100_100/0/1519887013507?e=1655942400&v=beta&t=wyO_ESf0r6USUosi46feUL7S0o_58ilyUZZJ3ArCsOg"
            nome="Scada Café" 
            descricao="Desfrutar o sabor de um café especialíssimo, em um ambiente aconchegante, com produtos de alta qualidade e um bom serviço, foi inspiração para criar o Scada Cafés Especiais." 
          />
          </Container>

      <Container>
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook"
          link="https://facebook.com/andresa.alves1994/"
        />        

        <ImagemButton 
          imagem="https://i0.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-instagram-png-fundo-transparente2.png?resize=696%2C696&ssl=1" 
          texto="Instagram"
          link="https://www.instagram.com/dresa.alves"
        />

        <ImagemButton 
            imagem="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
            texto="GitHub" 
            link="https://github.com/Andresa-Alves-Ribeiro"
          />

        <ImagemButton 
            imagem="https://img2.gratispng.com/20180403/klw/kisspng-linkedin-logo-social-media-business-professional-n-style-5ac33a87e27554.0089620115227439439276.jpg" 
            texto="Linkedin" 
            link="https://www.linkedin.com/in/andresa-alves-ribeiro/"
          />    
          </Container>
      </Main>
    </All>
  );
}

export default App;
