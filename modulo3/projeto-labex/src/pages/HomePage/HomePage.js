import React from "react";
import { HomeContainer, ButtonsContainer, Container } from "./styles";
import { useNavigate } from "react-router-dom";
import Logo from "../../imgs/logo.jpg";
import ListTripsPage from "../ListTripsPage";
import LoginPage from "../LoginPage";

const HomePage = () => {
    const navigate = useNavigate()

    const ListTripsPage = () => {
        navigate("/trips/list")
    }

    const LoginPage = () => {
        navigate("/login")
    }

    return (
        <HomeContainer>
            <Container>
                <img src={Logo} />
                <h1>LabeX</h1>
                <ButtonsContainer>
                    <button onClick={() => ListTripsPage(navigate)}>Ver Todas As Viagens</button>
                    <button onClick={() => LoginPage(navigate)}>Área Administrativa</button>
                </ButtonsContainer>
            </Container>
        </HomeContainer>
    )
}
export default HomePage