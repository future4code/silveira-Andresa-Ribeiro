import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { url } from "../../constants/Url";
import { goToCreateTripPage, goToHomePage, goToTripDetailsPage } from "../../routes/Coordinator";
import useProtectedPage from "../../hooks/useProtectedPage";
import { Container, BotaoFuncoes, TripsList, TripsLists, Botoes } from "./Styles";
import axios from "axios";

export const AdminHomePage = () => {
    const navigate = useNavigate();
    useProtectedPage();

    const token = localStorage.getItem("token");

    const headers = {headers:{auth:token}}

    const [trips, setTrips] = useState([])

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }

const getAllTrips = () => {
    axios.get(`${url}/trips`, headers)
    .then((res) => {
        setTrips(res.data.trips)
    })
    .catch((error) => {
        console.log(error.response);
    })
};

useEffect(() => {
    getAllTrips();
}, []);

//remover viagens

const removeTrip = (id) => {
    axios.delete(`${url}/trips/${id}`, headers)
    .then((res) => {
        getAllTrips();
        alert("Viagem deletada com sucesso!", res);
    })
    .catch((error) => {
        alert("Erro ao deletar a viagem!", error);
    });
};

const allTrips = trips.map((trip) => {
    return(
        <TripsLists key={trip.id}>
            <strong><p>{trip.name}</p></strong>
            <Botoes onClick={() => goToTripDetailsPage(navigate, trip.id)}>Detalhes</Botoes>
            <Botoes onClick={() => removeTrip(trip.id)}>Remover</Botoes>
        </TripsLists>
    );
});

    return (
        <Container> 
            <BotaoFuncoes>
                <button onClick={() => goToHomePage(navigate)}>Voltar</button>
                
                <button onClick={logout}>Logout</button>

                <button onClick={() => goToCreateTripPage(navigate)}>Criar Uma Viagem</button>
            </BotaoFuncoes>
            <TripsList>
                {allTrips}
            </TripsList>
            
        </Container>
    )
}

export default AdminHomePage