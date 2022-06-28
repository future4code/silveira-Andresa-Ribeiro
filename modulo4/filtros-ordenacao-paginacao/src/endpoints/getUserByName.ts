import express, { Request, Response } from "express"

import {filterByName} from "../data/filterByName"


export const getUserByName = async(request: Request, response: Response) => {    
    try {
       const name = request.query.name

       const filterName = await filterByName(name as string)
 
       response.status(200).send(filterName)
       
       if(!request.query.name){
          response.statusCode = 404
          throw new Error("Nome não encontrado!")
       }
 
       
    } catch (error) {
        response.status(500).send("Erro encontrado!")
    }
 }

