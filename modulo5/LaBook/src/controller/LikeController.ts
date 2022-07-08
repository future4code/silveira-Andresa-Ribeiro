import { Like } from '../Types/types';
import { Request, Response } from 'express';
import LikeBusiness from '../business/LikeBusiness';

export class LikeController {

    constructor(
        private likeBusiness: LikeBusiness
    ) {};


    like = async (req: Request, res: Response) => {
        const post_id = req.body.post_id as string;

        const token = req.headers.authorization as string;

        const input: Like = {
            post_id
        }

        try {
            const post = await this.likeBusiness.like(input, token);
            res.status(201).send(post)

        } catch (error) {
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.status(500).send(`Erro na requisição`)
            }
        }
    };


    dislike = async (req: Request, res: Response) => {
        const post_id = req.body.post_id as string;

        const token = req.headers.authorization as string;

        const input: Like = {
            post_id
        }
        
            try {
                const post = await this.likeBusiness.dislike(input, token)
                res.status(200).send(post);
            } catch (error) {
                if (error instanceof Error) {
                    res.send(error.message)
                } else {
                    res.status(500).send(`Erro no cadastro`)
                }
            }
        };
    }