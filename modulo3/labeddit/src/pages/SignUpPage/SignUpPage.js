import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { url } from "../../constants/Url";
import { Container, ButtonContainer, ButtonContainer2, HeaderContainer, InputsContainer, Checkbox } from "./styles";
import axios from "axios";
import { goToFeedPage, goToLogin } from "../../routes/Coordinator";

export default function SignUpPage() {
  const navigate = useNavigate();

  const { form, onChange, clear } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const submit = (event) => {
    event.preventDefault();

    axios
      .post(`${url}/users/signup`, form)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
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
      <HeaderContainer>
      <h3>Olá, bem vindo(a) ao Labeddit!</h3>
      </HeaderContainer>
      <form onSubmit={submit}>
        <InputsContainer>
          <input
            placeholder="Nome de usuário"
            name="username"
            value={form.username}
            onChange={onChange}
            pattern={"^.{4,}"}
            title="O nome precisa ter no mínimo 4 caracteres."
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
            margin={"normal"}
            variant={"outlined"}
            title={"Sua senha deve ter no mínimo 4 e no máximo 20 caracteres"}
            required
          />

      <Checkbox>
      <p>
        Ao continuar, você concorda com o nosso <span>Contrato de usuário</span>{" "}
        e nossa <span>Política de privacidade</span>.
      </p>

      <input type="checkbox"></input> Eu concordo em receber emails sobre coisas legais no Labeddit
      </Checkbox>

          <ButtonContainer>
            <button onClick={() => navigate}>Cadastrar</button>
          </ButtonContainer>
        </InputsContainer>
      </form>

      
      <ButtonContainer2>
        <button onClick={() => goToLogin(navigate)}>Voltar</button>
      </ButtonContainer2>
    </Container>
  );
}
