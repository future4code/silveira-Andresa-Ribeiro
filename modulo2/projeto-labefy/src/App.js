import axios from "axios";
import React from "react";
import styled from "styled-components";
import ListaPlaylists from "./components/ListaPlaylists";
import CriarPlaylists from "./components/CriarPlaylists";

class App extends React.Component {
  state = {
    page: "CriarPlaylists"
  }

  renderizaPagina = () => {
    switch (this.state.page) {
      case "CriarPlaylists":
        return <CriarPlaylists nextPage={this.nextPage}></CriarPlaylists>
      case "ListaPlaylists":
        return <ListaPlaylists backPage={this.backPage}></ListaPlaylists>
      default:
        return "Página Inexistente!"
    }
  }

  nextPage = () => {
    this.setState({
      page: "ListaPlaylists"
    })
  }

  backPage = () => {
    this.setState({
      page: "CriarPlaylists"
    })
  }

  render () {
    return (
      <div>
        {this.renderizaPagina()}
      </div>
    )
  }
}

export default App;
