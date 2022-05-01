import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/Coordinator";
import useProtectedPage from "../../hooks/useProtectedPage";
import useForm from "../../hooks/useForm";
import { url } from "../../constants/Url";
import { HomeContainer, BotaoFuncoes, InputsContainer } from "./Styles";
import axios from "axios";

export const CreateTripPage = () => {
  useProtectedPage();
  const navigate = useNavigate();

  const planets = [
    "Jupiter",
    "Mercúrio",
    "Marte",
    "Netuno",
    "Plutão",
    "Saturno",
    "Terra",
    "Urano",
    "Vênus",
  ];

  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const token = localStorage.getItem("token");

  const headers = { headers: { auth: token } };

  const todaysDate = new Date().toISOString().slice(0, 10);

  const submit = (event) => {
    event.preventDefault();

    axios
      .post(`${url}/trips`, form, headers)
      .then((res) => {
        navigate("/admin/trips/list");
        alert("Viagem criada com sucesso!");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
    cleanFields();
  };

  return (
    <HomeContainer>

      <form onSubmit={submit}>
        <InputsContainer>
          <input
            placeholder="Nome"
            name={"name"}
            value={form.name}
            onChange={onChange}
            required
            pattern={"^.{4,}"}
            title={"Seu nome deve conter no mínimo 4 caracteres"}
          />

          <select
            placeholder="Planeta"
            name={"planet"}
            value={form.planet}
            onChange={onChange}
            required
          >
            <option value={""}>Escolha um planeta</option>
            {planets.map((planet) => {
              return <option key={planet}>{planet}</option>;
            })}
          </select>

          <input
            placeholder="Data"
            name={"date"}
            value={form.date}
            onChange={onChange}
            type="date"
            min={todaysDate}
            required
          />

          <input
            placeholder="Descrição"
            name={"description"}
            value={form.description}
            type={"text"}
            onChange={onChange}
            required
            pattern={"^.{20,}"}
            title={"A descrição deve conter no mínimo 30 caracteres"}
          />

          <input
            placeholder="Duração"
            name={"durationInDays"}
            value={form.durationInDays}
            onChange={onChange}
            required
            type={"number"}
            min={7}
            title={"A duração da viagem deve ter no mínimo 7 dias"}
          />

          <BotaoFuncoes>
            <button type="submit">Criar Viagem</button>
            <button onClick={() => goBack(navigate)}>Voltar</button>
          </BotaoFuncoes>
        </InputsContainer>
      </form>
    </HomeContainer>
  );
};

export default CreateTripPage;
