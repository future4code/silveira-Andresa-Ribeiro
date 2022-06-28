import express, { Request, Response } from "express"
import { filterByType } from "../data/filterByType"

export const getUserByType = async (request: Request, response: Response) => {    
   try {
      const getUserByType = await filterByType(request.params.type as string)

      if(!request.params.type){
         response.statusCode = 404
         throw new Error("Tipo não encontrado!")
      }

      response.status(200).send(getUserByType)
      
   } catch (error) {
       response.status(500).send("Erro encontrado!")
   }
}