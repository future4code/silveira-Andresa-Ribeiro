import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import useForm from "../../hooks/useForm";
import { goToHomePage } from "../../routes/Coordinator";
import { HomeContainer, BotaoFuncoes, InputsContainer } from "./Styles";

import { url } from "../../constants/Url";

const useProtectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      navigate("/admin/trips/list");
    }
  }, []);
};

export const LoginPage = () => {
  const navigate = useNavigate();
  useProtectPage();

  const { form, onChange, cleanFields } = useForm({ email: "", password: "" });

  const submit = (event) => {
    event.preventDefault();

    axios
      .post(`${url}/login`, form)
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
    <HomeContainer>
      <div>
        <form onSubmit={submit}>
          <InputsContainer>
            <input
              name="email"
              placeholder="E-mail"
              type={"email"}
              value={form.email}
              onChange={onChange}
              required
            />
            <input
              name="password"
              placeholder="Senha"
              type={"password"}
              value={form.password}
              onChange={onChange}
              required
              pattern={"^.{3,}"}
              title={"Sua senha deve ter no mínimo 3 caracteres"}
            />
          </InputsContainer>

          <BotaoFuncoes>
            <button onClick={() => goToHomePage(navigate)}>Voltar </button>
            <button>Entrar</button>
          </BotaoFuncoes>
        </form>
      </div>
    </HomeContainer>
  );
};

export default LoginPage;
