import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import {useForm} from "../../hooks/useForm";
import {url} from '../../constants/Url';
import {goToSignUpPage, goToFeedPage} from "../../routes/Coordinator";
import { Container, ButtonContainer, InputsContainer } from './styles'

const LoginPage = () => {
  const navigate = useNavigate();

  const { form, onChange, clear } = useForm({ email: "", password: "" });

  const login = (event) => {
    event.preventDefault();

    axios
      .post(`${url}/users/login`, form)
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        goToFeedPage(navigate);
        clear();
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <Container>
      <img src={Logo} />
      <h2>LabEddit</h2>
      <p>O projeto de rede social da Andresa</p>

      <form onSubmit={login}>
        <InputsContainer>
          <input
            name="email"
            placeholder="E-mail"
            type={"email"}
            value={form.email}
            onChange={onChange}
            margin={"normal"}
            variant={"outlined"}
            required
          ></input>
          <input
            name="password"
            placeholder="Senha"
            type={"password"}
            value={form.password}
            onChange={onChange}
            pattern={"^.{4,}"}
            margin={"normal"}
            variant={"outlined"}
            title={"Sua senha deve ter no mínimo 4 caracteres"}
            required
          ></input>
        </InputsContainer>
        <ButtonContainer>
          <button onClick={() => navigate}>Entrar</button>
          <button onClick={() => goToSignUpPage(navigate)}>Cadastre-se</button>
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default LoginPage;
