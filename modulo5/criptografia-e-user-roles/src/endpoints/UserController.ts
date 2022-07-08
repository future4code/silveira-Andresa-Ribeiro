import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../model/User";
import {Authenticator} from "../services/authenticator";
import { GenerateID } from "../services/GenerateID";
import { HashConfig } from "../services/HashConfig";
import { AuthenticationData } from "../types";

export class UserController {

   public createUser = async (req: Request, res: Response) => {
       try {
           const { email, password, role } = req.body

           if (!email || !password) {
               res.statusCode = 400
               throw new Error("Dados insuficientes, digite o email e senha")
           }

           if (email.indexOf("@") === -1) {
               res.statusCode = 400
               throw new Error("Email inválido, acrescente @")
           }

           if (password.length < 6) {
               res.statusCode = 400
               throw new Error("Senha inválida, mínimo 6 caracteres")
           }

           const userDB = new UserDatabase()

           const user = await userDB.getUserByEmail(email)

           if (user) {
               res.statusCode = 400
               throw new Error("Usuário já existente")
           }

           const id = new GenerateID().generateID()

           const hashConfig = new HashConfig()

           const cryptPassword = hashConfig.createHash(password)

           const newUser = new User(
               id,
               email,
               cryptPassword,
               role
           )

           await userDB.insertUser(newUser)

           const token = new Authenticator().generateToken({
               id,
               role
           })

           res.status(200).send({
               message: "Usuário criado com sucesso",
               token
           })

       } catch (error: any) {
           if (res.statusCode === 200) {
               res.status(200).send("Usuário criado com sucesso")
           } else {
               res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
           }
       }
   }

   public login = async (req: Request, res: Response) => {
       try {
           const { email, password } = req.body

           if (!email || !password) {
               res.statusCode = 400
               throw new Error("Dados insuficientes, digite o email e senha")
           }

           const userDB = new UserDatabase()

           const user = await userDB.getUserByEmail(email)

           if (!user) {
               res.statusCode = 400
               throw new Error("Usuário não existente")
           }

           const token = new Authenticator().generateToken({
               id: user!.getId(),
               role: user!.getRole()
           })

           res.status(200).send({
               message: "Usuário logado com sucesso",
               token
           })

       } catch (error: any) {
           if (res.statusCode === 200) {
               res.status(200).send("Usuário logado com sucesso")
           } else {
               res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
           }
       }
   }

   public getUserProfile = async (req: Request, res: Response) => {
       try {
           const token = req.headers.authorization as string

           const authenticator = new Authenticator()
           const tokenData = authenticator.getTokenData(token) as AuthenticationData

           if (!tokenData) {
               res.statusCode = 401
               throw new Error("Token inválido")
           }

           if (tokenData.role !== "normal") {
               throw new Error("Somente um usuário normal pode ter acesso a esta funcionalidade");
             }

           console.log(tokenData.id)

           const userDB = new UserDatabase()

           const user = await userDB.getUserById(tokenData.id)

           if (!user) {
               res.statusCode = 400
               throw new Error("Usuário não existente")
           }

           res.status(200).send({
               id: user.getId(),
               email: user.getEmail(),
               role: user.getRole()
           })

       } catch (error: any) {
           if (res.statusCode === 200) {
               res.status(200).send("Profile encontrado")
           } else {
               res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
           }
       }
   }
}