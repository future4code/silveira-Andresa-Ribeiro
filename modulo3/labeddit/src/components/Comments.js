import React, { useContext } from "react";
import axios from "axios";
import GlobalStateContext from "../global/GlobalStateContext";
import Like from "../assets/like.png";
import Dislike from "../assets/dislike.png";
import LikeClicked from "../assets/like-clicked.png";
import DislikeClicked from "../assets/dislike-clicked.png";
import { url } from "../constants/Url";
import Logo from "../assets/logo.png";
import { Button, Button2, Card, TextareaTitulo, DivBotoesPosts } from "./styledComments";

const Comments = (props) => {
  const { values, requests } = useContext(GlobalStateContext);
  const { headers } = values;
  const { getPosts } = requests;

  const handleVote = (id, direction) => {
    const body = {
      direction: direction,
    };

    if (direction === 1) {
      axios
        .post(`${url}/comments/${id}/votes`, body, headers)
        .then((res) => {
          getPosts();
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else if (direction === -1) {
      axios
        .put(`${url}/comments/${id}/votes`, body, headers)
        .then((res) => {
          getPosts();
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      axios
        .delete(`${url}/comments/${id}/votes`, headers)
        .then((res) => {
          getPosts();
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  const createLikeVote = () => {
    if (props.comment.userVote === 1) {
      handleVote(props.comment.id);
    } else {
      handleVote(props.comment.id, 1);
    }
  };

  const createDislikeVote = () => {
    if (props.comment.userVote === -1) {
      handleVote(props.comment.id);
    } else {
      handleVote(props.comment.id, -1);
    }
  };

  return (

    <Card key={props.comment.id}>
      <div>Enviado por: {props.comment.username}</div>
      <p>{props.comment.body}</p>
      
      <DivBotoesPosts key={props.comment.id}>
        <Button onClick={createLikeVote}>
          {props.comment.userVote === 1 ? (
            <img
              src={LikeClicked}
              alt="like-comment"
              style={{ width: "20px" }}
            />
          ) : (
            <img src={Like} alt="like-comment" style={{ width: "20px" }} />
          )}
        </Button>
        
        {props.comment.voteSum === null ? (
          <span>0</span>
        ) : (
          <span>{props.comment.voteSum}</span>
        )}
      </DivBotoesPosts>

        <DivBotoesPosts>
        <Button2 onClick={createDislikeVote}>
          {props.comment.userVote === -1 ? (
            <img
              src={DislikeClicked}
              alt="dislike-comment"
              style={{ width: "20px" }}
            />
          ) : (
            <img
              src={Dislike}
              alt="dislike-comment"
              style={{ width: "20px" }}
            />
          )}
        </Button2>
      </DivBotoesPosts>
    </Card>
  );
};

export default Comments;
