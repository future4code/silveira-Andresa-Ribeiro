import React from "react";
import { useNavigate } from "react-router-dom";
import {useForm} from "../../hooks/useForm";
import { url } from "../../constants/Url";
import { Container, ButtonsContainer, InputsContainer } from "./styles";
import axios from "axios";
import { goToFeedPage, goToLogin } from '../../routes/Coordinator';

export const SignUpPage = () => {
  const navigate = useNavigate();

  const { form, onChange, clear } = useForm({
    user: "",
    email: "",
    password: "",
  });

  const submit = (event) => {
    event.preventDefault();

    axios
      .post(`${url}/users/signup`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
      goToFeedPage(navigate);
      clear();
        alert("Cadastro feito com sucesso!");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <Container>
      <h3>Olá, boas vindas ao Labeddit!</h3>
      <form onSubmit={submit}>
        <InputsContainer>
          <input
            placeholder="Nome de usuário"
            name="user"
            value={form.user}
            onChange={onChange}
            pattern={"^.{4,}"}
            title="O nome precisa ter no mínimo 4 caracteres."
            fullWidth
            margin={"normal"}
            variant={"outlined"}
            required
          />
          <input
            name="email"
            placeholder="E-mail"
            type={"email"}
            value={form.email}
            onChange={onChange}
            fullWidth
            margin={"normal"}
            variant={"outlined"}
            required
          />
          <input
            name="password"
            placeholder="Senha"
            type={"password"}
            value={form.password}
            onChange={onChange}
            pattern={"^.{4,20}"}
            fullWidth
            margin={"normal"}
            variant={"outlined"}
            title={"Sua senha deve ter no mínimo 4 e no máximo 20 caracteres"}
            required
          />
           <button onClick={() => navigate}>Cadastrar</button>

        </InputsContainer>
      </form>

      <p>Ao continuar, você concorda com o nosso <span>Contrato de usuário</span> e nossa <span>Política de privacidade</span></p>

      <p>Eu concordo em receber emails sobre coisas legais no Labeddit</p>

      <ButtonsContainer>
        <button onClick={() => goToLogin(navigate)}>Voltar</button>
      </ButtonsContainer>
    </Container>
  );
};

export default SignUpPage;
