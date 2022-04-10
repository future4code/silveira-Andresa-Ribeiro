import React from "react";
import axios from "axios";
import ListaPlaylists from "./ListaPlaylists";
import styled from "styled-components";
import ondas from "../img/ondas.gif";

const Div = styled.div`
  font-weight: bold;
  background-image: url(${ondas});
`;

export const Divplay = styled.div`
  width: 100vw;
  display: grid;
  justify-self: center;
  align-self: center;
`;

const InputCriar = styled.input`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: -65px;
  :hover {
    border: 2px solid red;
  }
`;

const PlaylistNome = styled.div`
  color: pink;
  cursor: pointer;
  :hover {
    color: black;
    background-image: linear-gradient(to right, #00dbde 0%, #fc00ff 100%);
    border-radius: 4px;
    padding-left: 2px;
    padding-right: 3px;
  }
`

const Header = styled.h2`
  padding-top: 20px;
  padding-bottom: 90px;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  color: rgb(0, 255, 234);
  font-weight: bold;
  font-size: 5.2vh;
  margin: 0 auto;
  text-align: start;
`;

const ButtonDelet = styled.button`
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  :hover {
    box-shadow: 3px 5px 5px yellow;
  }
  width: 10vh;
  border-radius: 1px;
  background-image: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);
  color: white;
  border: 1px solid rgb(107, 107, 107);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1vh auto 0;
  cursor: pointer;
`;

const ButtonCreate = styled.button`
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  :hover {
    box-shadow: 3px 5px 5px yellow;
  }
  width: 10vh;
  border-radius: 1px;
  background-image: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);
  color: white;
  border: 1px solid rgb(107, 107, 107);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2vh auto 0;
  cursor: pointer;
`;

const DivCreate = styled.div`
  font-size: larger;
  display: flex;
  flex-direction: column;
  color: #9400d3;
  font-weight: bold;
  font-size: 5.2vh;
  margin: 0 auto;
  padding-top: 330px;
  padding-bottom: 1px;
`;

const Body = styled.div`
  font-size: larger;
  display: flex;
  font-weight: bold;
  font-size: 5.2vh;
  margin-top: 0px;
  padding-top: 0px;
  padding-bottom: 42px;
  color: red;
`;

export const URL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

export const headers = {
  headers: {
    Authorization: "andresa-ribeiro-silveira",
  },
};

export default class CriarPlayList extends React.Component {
  state = {
    nome: "",
    playlists: [],
    detalhe: false,
    selecaoPlaylist: "",
  };

  renderDetalhe = (mostraPlaylist) => {
    this.setState({ detalhe: true, selecaoPlaylist: mostraPlaylist });
  };

  renderPagina = () => {
    this.setState({ detalhe: false });
  };

  componentDidMount() {
    this.getPlaylist();
  }

  componentDidUpdate() {
    this.getPlaylist();
  }

  createPlaylist = () => {
    const body = {
      name: this.state.nome,
    };
    axios
      .post(URL, body, headers)
      .then((res) => {
        alert("Sua playlist foi criada!");
        this.setState({ nome: "" });
      })
      .catch((err) => {
        alert("Houve um erro, tente outro nome");
      });
  };

  getNomePlaylist = (e) => {
    this.setState({ nome: e.target.value });
  };

  getPlaylist = () => {
    axios
      .get(URL, headers)
      .then((res) => {
        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => {
        console.log("erro!");
      });
  };

  deletarPlaylist = (idPlaylist) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}`,
        headers
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response));
  };

  render() {
    if (this.state.detalhe) {
      return (
        <ListaPlaylists
          renderPagina={this.renderPagina}
          selecaoPlaylist={this.state.selecaoPlaylist}
        />
      );
    }

    const playlistsRenderizadas = this.state.playlists.map((playlist, i) => {
      return (
        <Divplay>
          <DivCreate
            key={playlist.id}
            onClick={() => this.renderDetalhe(playlist)}
          >
            <PlaylistNome>{playlist.name}</PlaylistNome>
          <br/>
            <ButtonDelet onClick={() => this.deletarPlaylist(playlist.id)}>
              <b>Deletar</b>
          </ButtonDelet>
          </DivCreate>    
        </Divplay>
      );
    });

    return (
      <Div>
        <Header>Labefy</Header>

        <InputCriar
          type="text"
          placeholder="Nome da Playlist"
          value={this.state.nome}
          onChange={this.getNomePlaylist}
        />

        <ButtonCreate onClick={this.createPlaylist}><b>Criar</b></ButtonCreate>
        <br />
      
        <Body>{playlistsRenderizadas}</Body>
      </Div>
    );
  }
}