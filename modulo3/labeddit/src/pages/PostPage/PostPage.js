import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import GlobalStateContext from "../../global/GlobalStateContext"
import { url } from "../../constants/Url"
import { goToFeedPage } from '../../routes/Coordinator'
import { Detalhes, Comentarios, DivForm, StyledForm, Textarea, DivBody } from './styles'
import {useForm} from '../../hooks/useForm'
import Comments from '../../components/Comments'
import Loading from "../../assets/Loading.gif"

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
      <div key={post.id} bg={"light"}>
        <div as={"span"}>Enviado por: {post.username}</div>
        <div>{post.title}</div>
        <div>{post.body}</div>
      </div>
    )
  })

  const commentsMap = comments && comments.map((comment) => {
    return (
      <Comments comment={comment} />
    )
  })

  return (

    <DivBody>
      <button variant='dark' onClick={() => goToFeedPage(navigate)} style={{ alignSelf: "center", margin: "20px" }}>Voltar</button>
      {loading && postDetails ?
        <>
          <Detalhes>
            {postDetails}
          </Detalhes>
          <DivForm>
            <StyledForm onSubmit={createComment}>
              <label htmlFor="body"></label>
              <Textarea
                type="text"
                name='body'
                placeholder='Comentario'
                onChange={onChange}
                value={form.body}
                required
              />
              <button variant='dark' type="submit">Enviar</button>
            </StyledForm>
          </DivForm>
          <Comentarios>
            {commentsMap.length === 0 ? <div bg="secondary"><div>Sem comentários</div></div> : commentsMap}
          </Comentarios>
        </>
        : <img src={Loading} alt="Loading" style={{width: "320px", margin: "auto"}}/>}
    </DivBody>

  )
}