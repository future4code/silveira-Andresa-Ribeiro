import React from "react";
import { useNavigate } from "react-router-dom";
import { Main, Form, Header, Title, Button1 } from "./styled";
import TextField from "@mui/material/TextField";
import useForm from "../../Hooks/useForm";
import axios from "axios";
import { goToPizzas, goToSignUp } from "../../Routes/coordinator";
import { Button } from "@mui/material";
import { BASE_URL } from "../../Constants/BaseUrl";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { grey } from "@mui/material/colors";

export const Login = () => {
  let navigate = useNavigate();

  const { form, InputChange } = useForm({
    email: "",
    password: "",
  });

  const MySwal = withReactContent(Swal);

  const login = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/user/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data);
        goToPizzas(navigate);
      })
      .catch((error) => {
        MySwal.fire({
          title: "Erro",
          text: `${error.response.data.message}`,
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
            maxWidth: "120px",
            maxHeight: "65px",
            minWidth: "180px",
            minHeight: "60px",
            color: "white",
            fontSize: "22px",
            background: "transparent",
            cursor: "pointer",
          }}
          onClick={() => goToSignUp(navigate)}
        >
          Cadastre-se
        </Button1>
      </Header>

      <Title>Login</Title>

      <Form onSubmit={login}>
        <TextField
          id="outlined-basic"
          label="E-mail"
          name={"email"}
          type={"email"}
          variant="outlined"
          color={"primary"}
          value={form.email}
          sx={{ bgcolor: grey[100] }}
          onChange={InputChange}
          required
          margin={"normal"}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          name={"password"}
          type={"password"}
          variant="outlined"
          value={form.password}
          sx={{ bgcolor: grey[100] }}
          onChange={InputChange}
          required
          margin={"normal"}
        />

        <Button variant="contained" color={"primary"} type="submit">
          Entrar
        </Button>
      </Form>
    </Main>
  );
};
