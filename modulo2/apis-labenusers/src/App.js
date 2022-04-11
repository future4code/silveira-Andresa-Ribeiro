import axios from "axios";
import React from "react";
import styled from "styled-components";
import CriarUsuario from "./components/CriarUsuario";
import Usuarios from './components/Usuarios';

const headers = {
  headers: {
    Authorization: "andresa-ribeiro-silveira"
  }
};

const Container = styled.div`
    padding: 100;
    min-height: 100vh;
    box-sizing: border-box;
    background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
`

const Botao = styled.button`
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
    border-radius: 8px;
    color: white;
    padding: 4px;
    position: fixed;
    cursor: pointer;
    :hover {
    background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
    position: fixed;
    }
    :active {
        color: white
    }
`

const Div = styled.div`
  padding: 4px;
`

export default class App extends React.Component {
  state = {
    inputNome: "",
    inputEmail: "",
    inputBusca: "",
    criacaoUsuario: true,
    usuarios: [],
    usuariosFiltrados: []
  }

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = async () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: "andresa-ribeiro-silveira"
        }
      })

      this.setState({ usuarios: response.data })
    } catch (error) {
        alert ("Ocorreu um erro. Tente Novamente!")
      }
  }

  deleteUsers = async (usuario) => {
    if (window.confirm(`Deletar o usuário?`) === true) {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuario.id}`

      try {
        const response = await axios.delete(url, {
          headers: {
            Authorization: "andresa-ribeiro-silveira"
          }
        })

          let novosUsuarios = [...this.state.usuarios];
          const acharIndex = novosUsuarios.findIndex((user) => {
            return user.name === usuario.name
          });
          novosUsuarios.splice(acharIndex, 1);
          this.setState({ usuarios: novosUsuarios })

          alert(`Usuário deletado`)
        } catch (error) {
          alert ("Ocorreu um erro. Tente Novamente!")
    }
  }
}

createUsers = () => {
  const body = {
    name: this.state.inputNome,
    email: this.state.inputEmail
  };
  axios
    .post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, headers)
    .then((response) => {
      this.getAllUsers();
      this.setState({
        inputNome: "",
        inputEmail: ""
      })
      alert(`Usuário adicionado com sucesso!`)
    })
    .catch((error) => {
      alert(error.response.data.message)
    })
}

  onChangeName = (event) => {
    this.setState({ inputNome: event.target.value })
  }

  onChangeEmail = (event) => {
    this.setState({ inputEmail: event.target.value })
  }

  onChangeBusca = (event) => {
    this.setState({ inputBusca: event.target.value })
  }

  verificarUsers = () => {
    this.setState({ criacaoUsuario: false })
  }

  irparahome = () => {
    this.setState({ criacaoUsuario: true })
  }

  filtrarUsers = () => {
    const usuariosFiltrados =
    this.state.usuarios.filter(usuario => {
      if (!this.state.inputBusca) {
        return usuario
      } else {
        return usuario.name.toLowerCase().includes(this.state.inputBusca.toLowerCase())
      }
      }
    )
    this.setState({usuarios: usuariosFiltrados})
  }

  render() {

    const users = this.state.usuarios.map((usuario) => {
      return (
        <div key={usuario.id}>
          <span>{usuario.name}</span>
          <Botao  onClick={() => this.deleteUsers(usuario)}>Remover</Botao>
        </div>
      )
    });

    return (
      <Container>
        {this.state.criacaoUsuario ?
          <CriarUsuario
            trocartela={this.verificarUsers}
            onChangeName={this.onChangeName}
            onChangeEmail={this.onChangeEmail}
            createUsers={this.createUsers}
            valueNome={this.state.inputNome}
            valueEmail={this.state.inputEmail}
 />
          :
          <Usuarios
            users={users}
            irparahome={this.irparahome}
            onChangeBusca={this.onChangeBusca}
            valueBusca={this.state.inputBusca}
            filtrarUsers={this.filtrarUsers}
          />}
      </Container>
    )
  }
}