import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useForm } from "../../hooks/useForm";
import { url } from "../../constants/Url";
import { goToSignUpPage, goToFeedPage } from "../../routes/Coordinator";
import { Container, ButtonContainer, ButtonContainer2, InputsContainer, Header } from "./styles";

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
      <Header>
        <img src={Logo} />
        <h2>LabEddit</h2>
      </Header>

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
        </ButtonContainer>

        <ButtonContainer2>
          <button onClick={() => goToSignUpPage(navigate)}>Cadastre-se</button>
        </ButtonContainer2>
      </form>
    </Container>
  );
};

export default LoginPage;
