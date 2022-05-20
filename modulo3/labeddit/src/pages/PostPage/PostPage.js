import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import GlobalStateContext from "../../global/GlobalStateContext"
import { url } from "../../constants/Url"
import { goToFeedPage } from '../../routes/Coordinator'
import { Details, DetailsText, DivComments, Body, Input, Container, Header, Button } from './styles'
import {useForm} from '../../hooks/useForm'
import Comments from '../../components/Comments'
import Loading from "../../assets/Loading.gif"
import Logo from "../../assets/logo.png"

export default function Post() {
  const navigate = useNavigate();
  const { states, setters, values } = useContext(GlobalStateContext)
  const { headers } = values
  const { posts, comments, postInfo } = states
  const { setPosts, setComments, setPostInfo } = setters
  const params = useParams();
  const token = localStorage.getItem("token");
  const { form, onChange, clear } = useForm({ body: "" })
  const [loading, setLoading] = useState(false);

  const getPost = () => {
    const postDetails = [];
    posts && posts.forEach((post) => {
      if (post.id === params.id) {
        postDetails.push(post)
      }
    })
    setPostInfo(postDetails);
  }

  const getComments = () => {
    axios
      .get(`${url}/posts/${params.id}/comments`, headers)
      .then((res) => {
        setComments(res.data)
      })
      .catch((err) => {
        alert(err);
      })
  }

  const createComment = (event) => {
    event.preventDefault();
    axios
      .post(`${url}/posts/${params.id}/comments`, form, headers)
      .then((res) => {
        alert(`Comentario adicionado com sucesso!`)
        clear()
      })
      .catch((err) => {
        alert(err)
      })
    event.reload()
  }

  useEffect(() => {
    getPost();
    setTimeout(() => {
      setLoading(true)
    }, 2000);
  }, [])

  useEffect(() => {
    getComments();
  }, [comments])

  const postDetails = postInfo && postInfo.map((post) => {
    return (
      <DetailsText key={post.id}>
        <div as={"span"}>Enviado por: {post.username}</div>
        <div>{post.title}</div>
        <p>{post.body.toUpperCase()}</p>
      </DetailsText>
    )
  })

  const commentsMap = comments && comments.map((comment) => {
    return (
      <Comments comment={comment} />
    )
  })

  return (

    <Container>
      <Header>
      <img src={Logo}></img>
      <button onClick={() => goToFeedPage(navigate)}>Voltar</button>
      </Header>
      
      {loading && postDetails ?
        <>
        <Body>
          <Details>
            {postDetails}
          </Details>
          
            <Body onSubmit={createComment}>
              <label></label>

              <Input
                type="text"
                name='body'
                placeholder='Comentario'
                onChange={onChange}
                value={form.body}
                required
              />

              <Button type="submit">Enviar</Button>
            </Body>

          <DivComments>
            {commentsMap.length === 0 ? <div>Sem comentários</div> : commentsMap}
          </DivComments>
          </Body>
        </>
        : <img src={Loading} alt="Loading" style={{width: "320px", margin: "auto"}}/>}
    </Container>

  )
}