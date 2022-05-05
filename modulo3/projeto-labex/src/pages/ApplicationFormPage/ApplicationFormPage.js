import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/Coordinator";
import { countries } from "../../constants/Countries";
import useForm from "../../hooks/useForm";
import { useGetData } from "../../hooks/useGetData";
import { url } from "../../constants/Url";
import { Container, BotaoFuncoes, InputsContainer } from "./Styles";
import axios from "axios";

export const ApplicationFormPage = (event) => {
  const navigate = useNavigate();

  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    trip: "",
  });

  const [trips] = useGetData(`${url}/trips`);

  const apply = (event) => {
    event.preventDefault();

    axios
      .post(`${url}/trips/${form.trip}/apply`, form)
      .then((res) => {
        alert("Inscrição enviada com sucesso!");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
    cleanFields();
  };

  return (
    <Container>
      <form onSubmit={apply}>
      <InputsContainer>
        <select onChange={onChange} name="trip" value={form.trip} required>
          <option value={""} placeholder="Escolha uma viagem">Escolha uma viagem</option>
          {trips && trips.trips.map((trip) => {
              return (
                <option key={trip.id} value={trip.id}>
                  {trip.name} - {trip.planet}
                </option>
              );
            })}
        </select>

        <select onChange={onChange} name="country" value={form.country} required>
          <option value={''}>Selecione seu país</option>
          {countries && countries.map((country) => {
              return (
                  <option key={country.ordem} value={country.nome}>
                      {country.nome}
                  </option>
              )
          })}
          </select>

          <input placeholder='Nome' name='name' value={form.name} onChange={onChange} required pattern={'^.{3,}'} title="O nome precisa ter no mínimo 3 caracteres."></input>
          <input placeholder='Idade' name='age' value={form.age} onChange={onChange} type={'number'} required min={18} title="Podem se inscrever apenas os maiores de 18 anos!"></input>
          <input placeholder="Profissão" name='profession' type="text" value={form.profession} onChange={onChange} required></input>
          <input placeholder="Porque você seria um bom(a) candidato(a)?" name='applicationText' value={form.applicationText} onChange={onChange} pattern={'^.{30,}'} title={"Seu texto deve ter mais que 30 caracteres."} required></input>

        </InputsContainer>

        
      </form>

      <BotaoFuncoes>
          <button onClick={() => navigate}>Enviar</button>
          <button onClick={() => goBack(navigate)}>Voltar</button>
        </BotaoFuncoes>
    </Container>
  );
};

export default ApplicationFormPage;
