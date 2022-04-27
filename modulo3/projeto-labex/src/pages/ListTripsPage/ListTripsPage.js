import React from "react";
import { useNavigate } from "react-router-dom";
import { goToApplicationFormPage, goBack } from '../../routes/Coordinator';
import { TripsPageContainer, ComponentsTripContainer } from "./Styles"

function ListTripsPage() {

    const navigate = useNavigate();

    return (
        <div>
            <TripsPageContainer>
                <button onClick={() => goToApplicationFormPage(navigate)}>Inscreva-se</button>

                <button onClick={() => goBack(navigate)}>Voltar</button>
                <h1>Viagens Disponíveis</h1>
                <ComponentsTripContainer>
                    {navigate.length === 0 ? <p>Você não está inscrito em nenhuma viagem!</p> : navigate}
                </ComponentsTripContainer>
            </TripsPageContainer>
        </div>
    )
}

export default ListTripsPage