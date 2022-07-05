import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";


export class UserController {
    async signUp (req: Request, res: Response) {
        try {
            const {name, email, password, role} = req.body

            const token = await new UserBusiness().createUser(name, email, password, role)

            res.status(200).send({token})
        } catch (error:any) {
            res.status(400).send({message: error.message || error.sqlMessage})
        }
    }

    async loginUser (req: Request, res: Response) {
        try {
            const {email, password} = req.body

            const token = await new UserBusiness().login(email, password)

            res.status(200).send({token})
        } catch (error:any) {
            res.status(400).send({message: error.message || error.sqlMessage})
        }
    }

    async getAllUsers (req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string

            const users = await new UserBusiness().getEveryone(token)

           res.status(200).send(users)

        } catch (error:any) {
            res.status(400).send({message: error.message || error.sqlMessage})
        }
    }

    async deleteUser (req: Request, res: Response) {
        try {

            const token = req.headers.authorization as string
            const id = req.params.id as string

            const user = await new UserBusiness().deleteUser(token, id)

            res.status(200).send(user)
        } catch (error:any) {
            res.status(400).send({message: error.message || error.sqlMessage})
        }
    }
}