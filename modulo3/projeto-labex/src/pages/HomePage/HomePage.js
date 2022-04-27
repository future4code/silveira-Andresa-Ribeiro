import React from "react";
import { HomeContainer, Buttons, Container } from "./Styles";
import { useNavigate } from "react-router-dom";
import { goToListTripsPage, goToLogin } from '../../routes/Coordinator';
import Logo from "../../imgs/logo.jpg";

export const HomePage = () => {
    
    const navigate = useNavigate();

    return (
        <HomeContainer>
            <Container>
                <img src={Logo} />
                <h1>LabeX</h1>
                <Buttons>
                    <button onClick={() => goToListTripsPage(navigate)}>Ver Todas As Viagens</button>
                    <button onClick={() => goToLogin(navigate)}>Área Administrativa</button>
                </Buttons>
            </Container>
        </HomeContainer>
    )
}
export default HomePage

