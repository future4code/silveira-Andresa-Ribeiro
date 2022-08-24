import React from "react";
import { Router } from "./Routes/router";
import palettes from "./Constants/Palettes";
import { ThemeProvider } from '@mui/material/styles';
import "./App.css";
import GlobalState from "./Global/GlobalState";

function App() {

  return (
    <>
        <GlobalState>
          <ThemeProvider theme={palettes}>
            <Router />
          </ThemeProvider>
        </GlobalState>
    </>
  )
}

export default App;