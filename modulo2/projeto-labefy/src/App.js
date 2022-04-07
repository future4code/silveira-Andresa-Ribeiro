import axios from "axios";
import React from "react";
import styled from "styled-components";
import Playlists from "./components/ListaPlaylists";
import CriarPlaylists from "./components/CriarPlaylists";

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
    name: "string",
    inputBusca: "",
    artist: "",
    url:"",
    criacaoPlaylist: true,
    playlists: [],
    playlistsFiltradas: []
  }

  componentDidMount() {
    this.getAllPlaylists();
  }

  getAllPlaylists = async () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: "andresa-ribeiro-silveira"
        }
      })
      this.setState({ playlists: response.data})
    } catch (error) {
        alert ("Ocorreu um erro. Tente Novamente!")
    }
  }

  deletePlaylist = async (playlist) => {
    if (window.confirm(`Apagar a playlist?`) === true) {

      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}`

      try {
        const response = await axios.delete(url, {
          headers: {
            Authorization: "andresa-ribeiro-silveira"
          }
        })

        let novasPlaylists = [... this.state.playlists];
        const acharIndex = novasPlaylists.findIndex((playl) => {

          return playl.name = playlist.name
        });
        novasPlaylists.splice(acharIndex, 1);
        this.setState({ playlists: novasPlaylists})

        alert(`Playlist Apagada`)
      } catch (error) {
        alert ("Ocorreu um erro. Tente Novamente!")
      }
    }
  }

  createPlaylist = async () => {

    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url
    };
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, headers)
      .then((response) => {
        this.getAllPlaylists();
        this.setState({
          name: "",
          artist: "",
          url: ""
        })
        alert(`Usuário adicionado com sucesso!`)
      })
    .catch ((error) => {
        alert ("Ocorreu um erro. Tente Novamente!")
      })
  }

  onChangeName = (event) => {
    this.setState({ name: event.target.value })
  }

  onChangeArtist = (event) => {
    this.setState({ artist: event.target.value })
  }

  onChangeUrl = (event) => {
    this.setState({ url: event.target.value })
  }

  onChangeBusca = (event) => {
    this.setState({ inputBusca: event.target.value })
  }

  irparahome = () => {
    this.setState({ criacaoPlaylist: true })
  }

  verficarPlaylists = () => {
    this.setState({ criacaoPlaylist: false })
  }

  filtrarUsers = () => {
    const playlistsFiltradas = this.setState({playlists: playlistsFiltradas})
  }

  getPlaylistTracks = async () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks'

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: "andresa-ribeiro-silveira"
        }
      })
      this.setState({ playlists: response.data})
    } catch (error) {
        alert ("Ocorreu um erro. Tente Novamente!")
    }
  }

  addTrackToPlaylist = async () => {

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks'

    try {

    const response = await axios.post(url, body, {
      headers: {
        Authorization: "andresa-ribeiro-silveira"
      }
    })

    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url
    }

    this.getAllPlaylists();
    this.setState({ name: ""})
    this.setState({ artist: ""})
    this.setState({ url: ""})
    alert(`Música adicionada com sucesso!`)
    } catch (error) {
        alert ("Ocorreu um erro. Tente Novamente!")
      }
  }

  render () {

    const playls = this.state.playlists.map((playlist) => {
      return (

        <div key={playlist.id}>
          <span>{playlist.name}</span>
          <Botao onClick={() => this.deletePlaylist(playlist)}>Remover</Botao>
        </div>
      )
    });

    return (
      <Container>
        {this.state.criacaoPlaylist ?
          <CriarPlaylists
            trocartela={this.verficarPlaylists}
            onChangeName={this.onChangeName}
            valueName={this.state.name}
            onChangeArtist={this.onChangeArtist}
            valueArtist={this.state.artist}
            onChangeUrl={this.onChangeUrl}
            valueUrl={this.state.url}
            createPlaylist={this.createPlaylist}

          />
          :
          <Playlists
          playls={playls}
          irparahome={this.irparahome}
          onchangeBusca={this.onchangeBusca}
          valueBusca={this.state.inputBusca}
          filtrarMusicas={this.filtrarMusicas}
          />}
      </Container>
    )
  }
}
