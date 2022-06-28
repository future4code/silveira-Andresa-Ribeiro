import { Request, Response } from "express";
import { getData } from "../data/functionGetData";
import { functionGetUserById } from "../data/functionGetUserById";
import Authenticator from "../services/authenticator";

export default async function getUser (req: Request,res: Response): Promise<void> {

   try {
      const token = req.headers.authorization as string;

      const authenticator = new Authenticator();

      const authenticationData = authenticator.getTokenData(token)

      const user = await functionGetUserById(authenticationData.id)


      res.status(200).send({
         id: user.id,
         email: user.email
      })

   } catch (error: any) {

      res.status(400).send(error.message || error.sqlMessage)
   }
}