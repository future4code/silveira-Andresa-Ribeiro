import React from "react";
import axios from "axios";
import CriarPlaylists from "./CriarPlaylists";
import styled from "styled-components";
import ondas from "../img/ondas.gif";

const Header = styled.h2`
  padding: 1rem;
  padding-left: 50px;
  background: black;
  display: flex;
  flex-direction: column;
  color: rgb(0, 255, 234);
  font-weight: bold;
  font-size: 5.2vh;
  margin: 0 auto;
  text-align: start;
`;

const Container = styled.div`
  background-image: url(${ondas});
`

const NomeReproducao = styled.div`
  color: rgb(255, 0, 98);
  font-size: 22px;
  font-weight: bolder;
`

const InputAdd = styled.input`
  display: flex;
  float: left;
  margin: 15px;
  margin-top: -15px;
  margin-left: 195px;
  padding-top: 5px;
  align-items: center;
  justify-content: space-evenly;
  :hover {
    border: 2px solid red;
  }
`;

const Body = styled.div`
  font-size: larger;
  display: flex;
  font-weight: bold;
  font-size: 5.2vh;
  margin-top: 125px;
  margin-left: 30px;
  margin-right: 30px;
  padding-top: 0px;
  padding-bottom: 35px;
  color: red;
  justify-content: space-evenly;
`;

const ButtonAdd = styled.button`
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  :hover {
    box-shadow: 3px 5px 5px yellow;
  }
  width: 10vh;
  border-radius: 1px;
  background-image: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);
  color: white;
  font-weight: bolder;
  font-size: 15px;
  padding: 4px;
  padding-left: 40px;
  padding-right: 40px;
  border: 1px solid rgb(107, 107, 107);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 1vh auto 0;
  margin-right: 100px;
  margin-top: -37px;
`;

const Adicionar = styled.div`
  margin: 0 auto;
  display: table;
  padding: 1rem;
  font-weight: bold;
`;

const Audio = styled.audio`
  margin: 0 0;
  text-align: center;
  cursor: pointer;
  height: 4vh;
`;

const ButtonVoltar = styled.button`
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  :hover {
    box-shadow: 3px 5px 5px yellow;
  }
  width: 10vh;
  height: 2vw;
  border-radius: 1px;
  background-image: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);
  color: white;
  border: 1px solid rgb(107, 107, 107);
  border-radius: 5px;
  font-size: 16px;
  padding-left: 40px;
  padding-right: 40px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 1vh auto 0;
`;

const InputDiv = styled.div`
  display: flex;
  place-content: center;
  padding: 2vh 0;
  color: #9400d3;
  font-weight: bold;
  font-size: 3vh;
  margin-top: 118px;
`;

export const URL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

export const headers = {
  headers: {
    Authorization: "andresa-ribeiro-silveira",
  },
};

export default class Playlists extends React.Component {
  state = {
    exibir: [],
    name: "",
    artist: "",
    url: "",
  };

  nomeMusica = (event) => {
    this.setState({ name: event.target.value });
  };
  artistaMusica = (event) => {
    this.setState({ artist: event.target.value });
  };
  urlMusica = (event) => {
    this.setState({ url: event.target.value });
  };

  abrirPlaylist = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.selecaoPlaylist.id}/tracks`,
        headers
      )
      .then((res) => {
        this.setState({ exibir: res.data.result.tracks });
      })
      .catch((err) => {});
  };

  addMusica = () => {
    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.selecaoPlaylist.id}/tracks`,
        body,
        headers
      )
      .then((res) => {
        this.setState({ name: "", artist: "", url: "" });
        this.abrePlaylist();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.abrirPlaylist();
  }

  render() {
    const playlistRender = this.state.exibir.map((musica, i) => {
      return (
        <InputDiv>
          <div key={musica.id}>
            <NomeReproducao>{musica.name} - {musica.artist}</NomeReproducao>
            <br/>
            <Audio controls>
              <Audio src={musica.url} type={"audio/mp3"}></Audio>
            </Audio>
          </div>
        </InputDiv>
      );
    });

    return (
      <Container>
        <Header>Labefy</Header>
        <Adicionar>
          Adicionar Música
          <br />
        </Adicionar>
        
        <InputAdd
        
          type="text"
          placeholder="Música"
          value={this.state.name}
          onChange={this.nomeMusica}
        />
        <br />
        <InputAdd
          type="text"
          placeholder="Artista/Banda"
          value={this.state.artist}
          onChange={this.artistaMusica}
        />
        <br />

        <InputAdd
          type="text"
          placeholder="Link da sua música"
          value={this.state.url}
          onChange={this.urlMusica}
        />
        <br />

        <ButtonAdd onClick={this.addMusica}>Adicionar</ButtonAdd>
        <br />
        <br />

          <Body>{playlistRender}</Body>

        <ButtonVoltar onClick={this.props.renderPagina}>Voltar</ButtonVoltar>
      </Container>
    );
  }
}