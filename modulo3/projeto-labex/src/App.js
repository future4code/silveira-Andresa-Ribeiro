import React from "react";
import Router from "./routes/Router";
import Header from "./pages/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <div>
        <Router />
      </div>
    </>
  );
};

export default App;
