import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "../../assets/logo.png";
import useForm from "../../hooks/useForm";
import { Container, InputsContainer, ButtonsContainer } from "./styles";

const useProtectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      navigate("/feed");
    }
  }, []);
};

const LoginPage = () => {
  const navigate = useNavigate();
  useProtectPage();

  const { form, onChange, cleanFields } = useForm({ email: "", password: "" });

  const submit = (event) => {
    event.preventDefault();

    axios
      .post(`${''}/login`, form)
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        navigate("/admin/trips/list");
      })
      .catch((err) => {
        console.log(`${err}`);
      });
    cleanFields();
  };

  return (
    <Container>
      <img src={Logo} />
      <h2>LabEddit</h2>
      <p>O projeto de rede social da Andresa</p>

      <InputsContainer>
      <input name="name" placeholder="Nome" type={"name"} value={form.name} onChange={onChange} required></input>
      <input placeholder="Senha"></input>
      </InputsContainer>
      <ButtonsContainer>

      </ButtonsContainer>
    </Container>
  );
};

export default LoginPage;
