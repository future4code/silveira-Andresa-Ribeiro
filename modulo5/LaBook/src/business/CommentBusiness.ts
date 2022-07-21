import { CommentDatabase } from '../data/CommentDatabase';
import { GenerateId } from '../services/GenerateId';
import { LikeDatabase } from '../data/LikeDatabase';
import { Comments } from '../Types/types';
import { Authenticator } from './../services/Authenticator';
import { PostDatabase } from '../data/PostDatabase';
import { Comment } from '../model/Comment';


export default class CommentBusiness {
    constructor(
        private commentData: CommentDatabase,
        private postDatabase: PostDatabase,
        private authenticator: Authenticator,
        private generateId: GenerateId
    ) {}


    comment = async (inputComment: Comments, token: string) => {
        const { post_id, comment } = inputComment;

        if (!post_id || !comment) {
            throw new Error(`Insira o id do post e o comentário no body!`)
        }

        const postExists = await this.postDatabase.findPostById(post_id);
        if (!postExists) {
            throw new Error(`Post não encontrado!`)
        }

        if (!token) {
            throw new Error(`Insira o token no campo headers corretamente!`)
        }

        const data = this.authenticator.getTokenData(token);

        if (!data) {
            throw new Error(`Usuário não encontrado!`)
        }
        const id = this.generateId.idGenerate();

        const newComment = new Comment(
            id,
            data.id,
            post_id,
            comment
        )

        await this.commentData.comment(newComment);

        return newComment;
    }
}