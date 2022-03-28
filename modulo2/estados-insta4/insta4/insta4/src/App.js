import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    post: [
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://picsum.photos/50/50?random=1',
        fotoPost: 'https://picsum.photos/200/150?random=1'
      },
      {
        nomeUsuario: 'Lucas',
        fotoUsuario: 'https://picsum.photos/50/50?random=2',
        fotoPost: 'https://picsum.photos/200/150?random=2'
      },
      {
        nomeUsuario: 'Sarah',
        fotoUsuario: 'https://picsum.photos/50/50?random=3',
        fotoPost: 'https://picsum.photos/200/150?random=3'
      }
    ],

    inputUsuario: "",
    inputFotoUsuario: "",
    inputFotoPost: ""

  };

  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.inputUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost
    }

    const atualizaPosts = [novoPost, ...this.state.post]
    this.setState({
      post: atualizaPosts
    })
  }

  onChangeInputUsuario = (event) => {
    this.setState({inputUsuario: event.target.value})
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({inputFotoUsuario: event.target.value})
  };

  onChangeInputFotoPost = (event) => {
    this.setState({inputFotoPost: event.target.value})
  };

  render() {
    const arrayDeComponentes = this.state.post.map((item) => {

      return (
        <Post
          {...item}
        />
      )
    })

    return (
      <MainContainer>
        <input
          value={this.state.inputUsuario}
          onChange={this.onChangeInputUsuario}
          placeholder={"Nome Usuário"}
        />
        <input
          value={this.state.inputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder={"Foto Usuário"}
        />
        <input
          value={this.state.inputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={"Foto Post"}
        />
        <button onClick={this.adicionarPost}>Adicionar</button>

        {arrayDeComponentes}
      </MainContainer>
    );
  }