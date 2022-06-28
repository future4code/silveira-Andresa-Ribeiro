import { Request, Response } from "express";
import { functionGetUserByEmail } from "../data/functionGetUserByEmail";
import Authenticator from "../services/authenticator";
import { AuthenticationData } from "../types";


export default async function login (req: Request, res: Response): Promise<void> {

    try {

        const { email, password } = req.body

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Preencha o campo 'email' que está vazio ou adicione o símbolo '@' ao seu email!")
        }

        const userData = {
            email: req.body.email,
            password: req.body.password
        }

        const user = await functionGetUserByEmail(userData.email)

        if (!req.body.password || req.body.password.length < 6 || user.password !== userData.password) {
            throw new Error("Senha inválida!")
        }

        res.status(200).send('jwt generated token')

        const token = new Authenticator().generateToken({ id: user.id });

        res.status(201).send({token})

    } catch (error: any) {

        res.status(400).send(error.sqlMessage || error.message)
    }
}