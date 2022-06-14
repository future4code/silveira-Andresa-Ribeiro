import { connection } from "../data/connection"
import { Request, Response } from "express"

export const getPagination = async (request: Request, response: Response): Promise<void> => {
    try {
        const table = "aula49_exercicio"
        const name = request.query.name
        let sort = request.query.sort as string
        let order = request.query.order as string
        let page = Number(request.query.page)
        let size = 5
        let offset = size * (page - 1)
 
        if (page < 1 || isNaN(page)) {
           page = 1
        }
 
        const result = await connection(table)
           .where("name", "LIKE", `%${name}%`)
           .orderBy(sort, order)
           .limit(size)
           .offset(offset)
 
        const resultPageOrder = result.map(resultOrder)
 
        if (resultPageOrder.length < 1) {
           throw new Error("Usuário não encontrado!",);
        }
 
        response.status(200).send(result)
    
    } catch (error) {
      response.status(500).send("Erro encontrado!")
    }
 }

 type user = {
    id: number,
    name: string,
    email: string,
    type: string
 }

 const resultOrder = (input: any): user => {
    return {
       id: input.id,
       name: input.name,
       email: input.email,
       type: input.type,
    }
 }