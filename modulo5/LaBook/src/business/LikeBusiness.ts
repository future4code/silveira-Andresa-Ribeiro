import { LikeDatabase } from '../data/LikeDatabase';
import { Like } from '../Types/types';
import {Authenticator} from '../services/Authenticator';
import { Likes } from '../model/Likes';
import { PostDatabase } from '../data/PostDatabase';


export default class LikeBusiness {
    constructor(
        private likeDatabase: LikeDatabase,
        private postDatabase: PostDatabase,
        private authenticator: Authenticator
    ) {}


    like = async (inputLike: Like, token: string) => {
        const { post_id } = inputLike;

        if (!post_id) {
            throw new Error(`Preencha o id do post no body!`)
        }

        const postExists = await this.postDatabase.findPostById(post_id);
        if(!postExists) {
            throw new Error(`O post não foi encontrado!`)
        }

        if (!token) {
            throw new Error(`Forneça o token no campo headers!`)
        }
        const data = this.authenticator.getTokenData(token);

        if (!data) {
            throw new Error(`Usuário não encontrado!`)
        }
        const liked = true;

        const connection = new Likes(
            data.id,
            post_id,
            liked
        )

        const postIsLiked = await this.likeDatabase.findingLikes(connection);
        if (postIsLiked.length>0) {
            throw new Error(`Você não pode dar like novamente.`)
        }

        await this.likeDatabase.like(connection);

        return connection;
    }


    dislike =  async (inputLike: Like, token: string) => {
        const { post_id } = inputLike;

        if (!post_id) {
            throw new Error(`Preencha o id do post no body!`)
        }

        const postExists = await this.postDatabase.findPostById(post_id);
        if(!postExists) {
            throw new Error(`O post não foi encontrado!`)
        }

        if (!token) {
            throw new Error(`Forneça o token no campo headers!`)
        }
        const data = this.authenticator.getTokenData(token);

        if (!data) {
            throw new Error(`Usuário não encontrado!`)
        }
        const liked = false;

        const connection = new Likes(
            data.id,
            post_id,
            liked
        )

        const [postIsLiked] = await this.likeDatabase.findingLikes(connection);
        console.log(postIsLiked)
        if (!postIsLiked) {
            throw new Error(`Você não curtiu o post.`)
        }

        await this.likeDatabase.dislike(connection);

        return connection;
    }
}