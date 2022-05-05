import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goBack } from "../../routes/Coordinator";
import { url } from "../../constants/Url";
import useProtectedPage from "../../hooks/useProtectedPage";
import {
  Container,
  BotaoFuncoes,
  InfosContainer,
  CandidatesContainer,
} from "./Styles";

export const TripDetailsPage = () => {
  const navigate = useNavigate();
  useProtectedPage();

  const token = localStorage.getItem("token");
  const headers = { headers: { auth: token } };
  const params = useParams();

  const [trip, setTrip] = useState({});
  const [candidates, setCandidates] = useState([]);
  const [approves, setApproves] = useState([]);

  const getTrip = () => {
    axios
      .get(`${url}/trip/${params.id}`, headers)
      .then((res) => {
        setTrip(res.data.trip);
        setCandidates(res.data.trip.candidates);
        setApproves(res.data.trip.approved);
      })
      .catch((err) => {
        console.log("Erro encontrado:", err.response);
      });
  };

  useEffect(() => {
    getTrip();
  }, []);

  const decideCandidate = (id, boolean) => {
    const body = {
      approve: boolean,
    };

    axios
      .put(`${url}/trips/${params.id}/candidates/${id}/decide`, body, headers)
      .then((res) => {
        getTrip();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const mapOfCandidates = candidates.map((candidate) => {
    return (
      <div key={candidate.id}>
        <p>Nome: {candidate.name}</p>
        <p>{candidate.applicationText}</p>
        <button onClick={() => decideCandidate(candidate.id, true)}>
          Aprove
        </button>
        <button onClick={() => decideCandidate(candidate.id, false)}>
          Reprove
        </button>
      </div>
    );
  });

  const allApproved = approves.map((approved) => {
    return (
      <div>
        <h3>{approved.name}</h3>
      </div>
    );
  });

  return (
    <Container>
      <BotaoFuncoes>
        <button onClick={() => goBack(navigate)}>Voltar</button>
      </BotaoFuncoes>

      <div key={trip.id}>
        <InfosContainer>
          <p>
            <strong>Nome: </strong>
            {trip.name}
          </p>
          <p>
            <strong>Descrição: </strong>
            {trip.description}
          </p>
          <p>
            <strong>Duração da viagem: </strong>
            {trip.durationInDays} dias
          </p>
          <p>
            <strong>Data: </strong>
            {trip.date}
          </p>
        </InfosContainer>
      </div>
      <CandidatesContainer>
        <h2>Candidatos na lista de espera:</h2>
        {mapOfCandidates}
        <h2>Candidatos aprovados:</h2>
        {allApproved}
      </CandidatesContainer>
    </Container>
  );
};

export default TripDetailsPage;
