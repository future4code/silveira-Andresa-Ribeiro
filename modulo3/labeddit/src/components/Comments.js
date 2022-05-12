import React, { useContext } from 'react'
import axios from 'axios'
import GlobalStateContext from "../global/GlobalStateContext"
import Like from "../assets/like.png"
import Dislike from "../assets/dislike.png"
import LikeClicked from "../assets/like-clicked.png"
import DislikeClicked from "../assets/dislike-clicked.png"
import { url } from "../constants/Url"
import 'bootstrap/dist/css/bootstrap.min.css'

const Comments = (props) => {
    const { values, requests } = useContext(GlobalStateContext);
    const { headers } = values
    const {getPosts} = requests

    const handleVote = (id, direction) => {
        const body = {
            direction: direction
        }

        if (direction === 1) {
            axios
                .post(`${url}/comments/${id}/votes`, body, headers)
                .then((res) => {
                    getPosts();
                })
                .catch((err) => {
                    console.log(err.response)
                })
        }
        else if (direction === -1) {
            axios
                .put(`${url}/comments/${id}/votes`, body, headers)
                .then((res) => {
                    getPosts();
                })
                .catch((err) => {
                    console.log(err.response)
                })
        }
        else {
            axios
                .delete(`${url}/comments/${id}/votes`, headers)
                .then((res) => {
                    getPosts();
                })
                .catch((err) => {
                    console.log(err.response)
                })
        }
    }

    const createLikeVote = () => {
        if (props.comment.userVote === 1) {
            handleVote(props.comment.id);
        }
        else {
            handleVote(props.comment.id, 1);
        }
    }

    const createDislikeVote = () => {
        if (props.comment.userVote === -1) {
            handleVote(props.comment.id);
        }
        else {
            handleVote(props.comment.id, -1);
        }
    }

    return (
        <div key={props.comment.id} bg={'secondary'} style={{ color: "white" }}>
            <div as={"span"}>Enviado por: {props.comment.username}</div>
            <div>{props.comment.body}</div>
            <div key={props.comment.id}>
                <button variant="success" onClick={createLikeVote}>{props.comment.userVote === 1 ? <div variant="bottom" src={LikeClicked} alt="like-comment" style={{ width: "20px" }} /> : <div variant="bottom" src={Like} alt="like-comment" style={{ width: "20px" }} />}</button>
                {props.comment.voteSum === null ? <span>0</span> : <span>{props.comment.voteSum}</span>}
                <button variant="danger" onClick={createDislikeVote}>{props.comment.userVote === -1 ? <div variant="bottom" src={DislikeClicked} alt="dislike-comment" style={{ width: "20px" }} /> : <div variant="bottom" src={Dislike} alt="dislike-comment" style={{ width: "20px" }} />}</button>
            </div>
        </div>
    )

}

export default Comments;