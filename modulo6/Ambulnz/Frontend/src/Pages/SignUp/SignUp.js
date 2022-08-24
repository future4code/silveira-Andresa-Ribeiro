import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "./../../Hooks/useForm";
import axios from "axios";
import { url } from "./../../Constants/Url";
import { goToList, goToLogin } from "./../../Routes/coordinator";
import { Form, Main, Header, Button1, Title } from "../Login/styled";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const SignUp = () => {
  const navigate = useNavigate();
  const { form, InputChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const MySwal = withReactContent(Swal);

  const signUp = (event) => {
    event.preventDefault();

    axios
      .post(`${url}/user/signup`, form)
      .then((res) => {
        localStorage.setItem("token", res.data);
        goToList(navigate);
      })
      .catch((err) => {
        MySwal.fire({
          title: "Erro encontrado!",
          text: `${err.response.data.message}`,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <Main>
      <Header>
        <Button1
          type="submit"
          style={{
            color: "white",
            fontSize: "22px",
            background: "transparent",
            cursor: "pointer",
          }}
          onClick={() => goToLogin(navigate)}
        >
          Voltar ao Login
        </Button1>
      </Header>

      <Title
        color={"white"}
        sx={{ textShadow: "2px 2px 3px rgba(255,255,255,0.1)" }}
      >
        Cadastre-se
      </Title>

      <Form onSubmit={signUp}>
        <TextField
          id="outlined-basic"
          label="Name"
          name={"name"}
          type={"text"}
          variant="outlined"
          color={"primary"}
          value={form.name}
          sx={{ bgcolor: "white" }}
          onChange={InputChange}
          required
          margin={"normal"}
        />
        <TextField
          id="outlined-basic"
          label="E-mail"
          name={"email"}
          sx={{ bgcolor: "white" }}
          type={"email"}
          variant="outlined"
          color={"primary"}
          value={form.email}
          onChange={InputChange}
          required
          margin={"normal"}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          name={"password"}
          sx={{ bgcolor: "white" }}
          type={"password"}
          variant="outlined"
          value={form.password}
          onChange={InputChange}
          required
          margin={"normal"}
          minLength="10"
        />

        <Button variant="contained" color={"primary"} type="submit">
          Criar Conta
        </Button>
      </Form>
    </Main>
  );
};
