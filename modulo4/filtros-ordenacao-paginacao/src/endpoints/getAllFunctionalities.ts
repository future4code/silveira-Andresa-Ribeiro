import { connection } from "../data/connection"
import { Request, Response } from "express"

export const getAllFunctionalities = async (request: Request, response: Response): Promise<void> => {
    try {
        const table = "aula49_exercicio"
        let name = request.query.name 
        let sort = request.query.sort as string
        let order = request.query.order as string
        let page = Number(request.query.page)
        let size = 5
        let offset = size * (page - 1)

        if (!name) {
            name = "%"
        }

        if (!order) {
            sort === "name" && order === "DESC"
        }
 
        if (!page || page < 1 || isNaN(page)) {
           page = 1
        }
 
        const result = await connection(table)
           .where("name", "LIKE", `%${name}%`)
           .orderBy(sort, order)
           .limit(size)
           .offset(offset)
 
        const resultMapOrder = result.map(resultOrder)
 
        if (resultMapOrder.length < 1) {
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