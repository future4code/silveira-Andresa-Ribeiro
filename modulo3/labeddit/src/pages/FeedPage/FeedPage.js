import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../routes/Coordinator";
import GlobalStateContext from "../../global/GlobalStateContext.js";
import axios from "axios";
import { url } from "../../constants/Url";
import Posts from "../../components/Posts";
import {useForm} from "../../hooks/useForm";
import Loading from "../../assets/Loading.gif";
import { Body, Container, Header, Button } from './styles';
import Logo from '../../assets/logo.png';

export default function FeedPage() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    goToLogin(navigate);
  };

  const { form, onChange, clear } = useForm({
    title: "",
    body: ""
  });

  const createPost = (event) => {
    event.preventDefault();
    axios
      .post(`${url}/posts`, form, headers)
      .then((res) => {
        alert("Post adicionado com sucesso!");
        clear();
      })
      .catch((error) => {
        alert("deu erro");
      });
  };

  const { states, values } = useContext(GlobalStateContext);
  const { posts } = states;
  const { headers } = values;

  
  const postList = posts.map((post) => {
    return (
    <Posts

    post={post} 

    />
    )
  });

  return (
    <Container>
      <Header>
      <img src={Logo}></img>

      <button onClick={logout}>
        Logout
      </button>
      </Header>
      
      <Body>
        <form onSubmit={createPost}>
          <input
            name="title"
            placeholder="Titulo"
            type={"text"}
            onChange={onChange}
            value={form.title}
            required
          />

          <input
            name="body"
            placeholder="O que deseja postar agora?"
            type={"text"}
            onChange={onChange}
            required
            value={form.body}
          />

          <button type='submit'>Postar</button>
        </form>

        <div>{postList.length > 0 ? postList : <img src={Loading} alt="Loading" />}</div>

      </Body>

    </Container>
  );
}
