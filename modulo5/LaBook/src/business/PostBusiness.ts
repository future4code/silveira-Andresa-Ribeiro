import { CreatePost } from "../Types/types";
import {Authenticator} from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from '../services/HashManager'
import { PostDatabase } from "../data/PostDatabase";
import { Post } from "../model/Post";

export class PostBusiness {

    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: GenerateId,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    createPost = async (createPost: CreatePost, token: string | undefined) => {

        const { photo, description, created_at, type } = createPost;

        if (!photo || !description || !created_at) {
            throw new Error("Preencha todos os campos, eles são obrigatórios!")
        }

        if (type.toUpperCase() !== "NORMAL" && type.toUpperCase() !== "EVENTO") {
            throw new Error(`Preencha o type corretamente com um dos dois tipos: NORMAL ou EVENTO`)
        }

        if (!token || token === undefined) {
            throw new Error(`Preencha o authorization nos headers!`)
        }

        const authorId = this.authenticator.getTokenData(token);
        if (!authorId) {
            throw new Error(`Usuário não existe`)
        }

        const date = created_at.split("/")

        const formatDate = date[1] + '-' + date[0] + '-' + date[2]

        const newCreatedAt = new Date(formatDate)

        const id = this.idGenerator.idGenerate()

        const post = new Post(id, photo, description, newCreatedAt, type, authorId.id)

        await this.postDatabase.createPost(post)

        return post
    }


    getPostById = async (id: string, token: string | undefined) => {

        if (!id) {
            throw new Error(`Preencha o id corretamente nos parâmetros!`)
        }

        if (!token || token === undefined) {
            throw new Error(`Preencha o authorization corretamente nos headers`)
        }

        const userId = this.authenticator.getTokenData(token);

        if (!userId) {
            throw new Error(`Usuário não existe`)
        }

        const post = await this.postDatabase.findPostById(id);
        
        if (!post) {
            throw new Error(`Post não encontrado`)
        }

        return post;
    }
}
