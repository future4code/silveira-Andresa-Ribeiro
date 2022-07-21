import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { Singup, Login } from "../Types/types";

export class UserController {

    constructor(
        private userBusiness: UserBusiness
    ) { };

    signUp = async (req: Request, res: Response) => {

        const { name, email, password } = req.body

        const newUser: Singup = {
            name,
            email,
            password
        }

        try {
            const token = await this.userBusiness.signUp(newUser)

            res.status(201).send({ message: "Usuário criado com sucesso!", token })

        } catch (error: any) {
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.status(500).send(`Erro no cadastro`)
            }
        }
    }


    login = async (req: Request, res: Response) => {

        const { email, password } = req.body

        if (!email || !password) {
            res.statusCode = 422
            throw new Error("Preecnha os campos 'email' e 'senha'.")
        }

        const intoLogin: Login = {
            email,
            password
        }

        try {
            const token = await this.userBusiness.login(intoLogin)


            res.status(200).send({ message: "Usuário logado com sucesso!", token })

        } catch (error) {
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.status(500).send(`Erro no login!`)
            }
        }
    }
}