import { Request, Response } from 'express'
import { PostBusiness } from '../business/PostBusiness';


export class PostController {
    
    constructor(
        private postBusiness: PostBusiness
    ) {};

    createPost = async (req: Request, res: Response) => {

        const { photo, description, created_at, type } = req.body

        const token = req.headers.authorization as string

        const newPost = {
            photo,
            description,
            created_at,
            type,
        }

        try {
            const post = await this.postBusiness.createPost(newPost, token)

            res.status(201).send({ message: "Post criado com successo!", post })
        } catch (error: any) {
            res.status(400).send({ error: error.message || "Erro ao criar o post"});
        }
    }


    getPostById = async (req: Request, res: Response) => {
        const id = req.params.id as string;

        const token = req.headers.authorization as string;

        try {
            const post = await this.postBusiness.getPostById(id, token)
            res.status(200).send(post);
        } catch (error) {
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.status(500).send(`Erro ao pegar o post`)
            }
        }
    };
}