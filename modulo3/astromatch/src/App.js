import React, { useState } from "react";
import Home from "./components/Home/Home";
import { createGlobalStyle } from "styled-components";
import Matches from "./components/MatchsPage/MatchesPage";
import axios from "axios";
import background from './imgs/background.jpg'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background-image: url(${background});
    background-size: cover;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
`

const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/murilo-terenciani-maryam/clear'


function App() {
  const [page, setPage] = useState("home")

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home nextPage={nextPage} resetar={clearApp}></Home>;
      case "matches":
        return <Matches backPage={backPage}></Matches>
      default:
        return <Home></Home>
    }
  }

  const nextPage = () => {
    setPage("matches")
  }

  const backPage = () => {
    setPage("home")
  }

  const clearApp = () => {
    const headers = {
      headers: 
          { 
              "Content-Type": "application/json" 
          }
    }

    axios
    .put(url, headers)
    .then((res) => {
      alert('App e lista de matches resetados com sucesso, atualize a página para se divertir novamente!')
    })
    .catch((err) => {
      console.log(err)
    })

  }

  return (
    <div>
      <GlobalStyle />
      {renderPage()}
    </div>
  );
}

export default App;