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

const Global = styled.div`
    margin: 0;
    padding: 0;
    min-height: 100vh;
    box-sizing: border-box;
    background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
`

const Botao = styled.button`
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
    border-radius: 10px;
    color: white;
    :hover {
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    }

    :before {
    content: '';
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}
    :active {
        color: white
    }
    :active:after {
    background: transparent;
    }   
    :hover:before {
    opacity: 1;
}
    :after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

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

  getAllUsers = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users';
    axios
      .get(url, headers)
      .then((response) => {
        // console.log(response.data)
        this.setState({
          usuarios: response.data
        })
      })
      .catch((error) => {
        console.log(error.response.data.message)
      })
  }

  deleteUsers = (usuario) => {
    if (window.confirm(`Você realmente deseja deletar o usuário?`) === true) {
      axios
        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuario.id}`, headers)
        .then((response) => {

          let novosUsuarios = [...this.state.usuarios];
          const acharIndex = novosUsuarios.findIndex((user) => {
            return user.name === usuario.name
          });
          novosUsuarios.splice(acharIndex, 1);
          this.setState({
            usuarios: novosUsuarios
          })

          alert(`Usuário deletado`)
        })
        .catch((error) => {
          console.log(error.response.data.message)
        })
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
          <Botao onClick={() => this.deleteUsers(usuario)}>Remover</Botao>
        </div>
      )
    });

    return (
      <Global>
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

      </Global>
    )
  }
}