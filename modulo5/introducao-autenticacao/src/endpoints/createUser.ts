import { Request, Response } from "express";
import connection from "../connection";
import Authenticator from "../services/authenticator";
import { generateID } from "../services/generateID";
import { AuthenticationData } from "../types";

export default async function createUser(req: Request, res: Response): Promise<void> {

   try {
      const { email, password } = req.body

      if (!req.body.email || req.body.email.indexOf("@") === -1) {
         throw new Error("Preencha o campo 'email' que está vazio ou adicione o símbolo '@' ao seu email!")
      }

      if (!req.body.password || req.body.password.length < 6) {
         throw new Error("A senha deve conter mais de 6 caracteres ou preencha o campo 'password'!")
      }

      res.status(200).send('Token criado por jwt')

      const id = generateID()

      const newUser = { id, email, password }

      await connection('User')
         .insert(newUser)

      const payload: AuthenticationData = {
         id: newUser.id
      }

      const token = new Authenticator().generateToken(payload)

      res.status(201).send({token})

   } catch (error: any) {

      res.status(400).send(error.sqlMessage || error.message)
   }
}