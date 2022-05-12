import { Card, DivBotoesPosts, Icones, Icon } from "./styles"
import GlobalStateContext from "../global/GlobalStateContext"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Like from "../assets/like.png"
import Dislike from "../assets/dislike.png"
import LikeClicked from "../assets/like-clicked.png"
import DislikeClicked from "../assets/dislike-clicked.png"
import Comments from "../assets/comments.png"
import { goToPostPage } from "../routes/Coordinator";
import axios from "axios";
import { url } from "../constants/Url";


const Posts = (props) => {
    const navigate = useNavigate();
    const {values, requests} = useContext(GlobalStateContext);
    const { headers } = values;
    const {getPosts} = requests

    const handleVote = (id, direction) => {
        const body = {
            direction: direction
        }

        if (direction === 1) {
            axios
                .post(`${url}/posts/${id}/votes`, body, headers)
                .then((res) => {
                    getPosts();
                })
                .catch((err) => {
                    console.log(err.response)
                })
        }
        else if (direction === -1) {
            axios
                .put(`${url}/posts/${id}/votes`, body, headers)
                .then((res) => {
                    getPosts();
                })
                .catch((err) => {
                    console.log(err.response)
                })
        }
        else {
            axios
                .delete(`${url}/posts/${id}/votes`, headers)
                .then((res) => {
                    getPosts();
                })
                .catch((err) => {
                    console.log(err.response)
                })
        }
    }

    const createLikeVote = () => {
        if (props.post.userVote === 1) {
            handleVote(props.post.id);
        }
        else {
            handleVote(props.post.id, 1);
        }
    }

    const createDislikeVote = () => {
        if (props.post.userVote === -1) {
            handleVote(props.post.id);
        }
        else {
            handleVote(props.post.id, -1);
        }
    }

    return (
        <Card key={props.post.id}>
            <span>Enviado por: {props.post.username}</span>
            <h3>{props.post.title}</h3>
            <p>{props.post.body}</p>
            <DivBotoesPosts>
                <Icones onClick={createLikeVote}>{props.post.userVote === 1 ? <Icon src={LikeClicked} alt="like" /> : <Icon src={Like} alt="like" />}</Icones>
                {props.post.voteSum === null ? <span>0</span> : <span>{props.post.voteSum}</span>}
                <Icones onClick={createDislikeVote}>{props.post.userVote === -1 ? <Icon src={DislikeClicked} alt="dislike" /> : <Icon src={Dislike} alt="dislike" />}</Icones>

                <DivBotoesPosts onClick={() => goToPostPage(navigate, props.post.id)}>
                <Icones><Icon src={Comments} alt="comments" /></Icones>
                {props.post.commentCount > 1 ? <span>{props.post.commentCount} comentários</span> : <span>{props.post.commentCount} comentário</span>}
            </DivBotoesPosts>
            </DivBotoesPosts>

            
        </Card>
    )
}

export default Posts;