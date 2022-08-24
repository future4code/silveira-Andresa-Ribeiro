import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import HeaderBar from "../../Components/Header";
import CardsPizza from "../../Components/CardsPizza";
import { goToLogin } from "../../Routes/coordinator";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { CardsDiv, Main } from "./styled";

export const FeedPage = () => {
  const navigate = useNavigate();
  const { states, requests } = useContext(GlobalStateContext);
  const { getAllPizzas } = requests;
  const { pizzas } = states;

  useEffect(() => {
    localStorage.getItem("token") !== null
      ? getAllPizzas()
      : goToLogin(navigate);
  }, []);

  const allPizzas =
    pizzas &&
    pizzas.map((pizza) => {
      return (
        <CardsPizza
          id={pizza.id}
          name={pizza.name}
          photo_link={pizza.photo_link}
          ingredients={pizza.ingredients}
          price={pizza.price}
        />
      );
    });

  return (
    <Main>
      <HeaderBar />
      <CardsDiv>{allPizzas}</CardsDiv>
      <Footer />
    </Main>
  );
};
