import React from "react";
import { useNavigate } from "react-router-dom";
import { goToApplicationFormPage, goBack, goToTripDetailsPage } from "../../routes/Coordinator";
import { TripsPageContainer, Card, ComponentsTripContainer, Container, Titulo, Botao, BotaoFuncoes } from "./Styles";
import { useGetData } from "../../hooks/useGetData";
import { url } from "../../constants/Url";

export const ListTripsPage = () => {
  const navigate = useNavigate();

  const [trips, isLoading, error] = useGetData(`${url}/trips`);

  const mapOfTrips =
    trips &&
    trips.trips.map((trip) => {
      return (
        <Card key={trip.id}>
          <p>
            <strong>Viagem: </strong> {trip.name}
          </p>
          <p>
            <strong>Planeta: </strong>
            {trip.planet}
          </p>
          <p>
            <strong>Data: </strong>
            {trip.date}
          </p>
          <p>
            <strong>Duração: </strong>
            {trip.durationInDays} dias
          </p>
          <p>
            <strong>Descrição: </strong>
            {trip.description}
          </p>

          <Botao onClick={() => goToTripDetailsPage(navigate)}>Detalhes</Botao>
        </Card>
      );
    });

  return (
    <Container>
      <TripsPageContainer>
        <Titulo>Viagens Disponíveis</Titulo>
        <ComponentsTripContainer>
          {isLoading && <p>Carregando...</p>}

          {!isLoading && error && <p>Recarregue a página!</p>}

          {!isLoading && trips && mapOfTrips}
          
          {!isLoading && trips && mapOfTrips.length === 0 && (<p>Não existe nenhuma viagem disponível</p>)}
        </ComponentsTripContainer>

        <BotaoFuncoes>
        <button onClick={() => goToApplicationFormPage(navigate)}>Inscreva-se</button>
        <button onClick={() => goBack(navigate)}>Voltar</button>
        </BotaoFuncoes>
        
      </TripsPageContainer>
    </Container>
  );
};

export default ListTripsPage;
