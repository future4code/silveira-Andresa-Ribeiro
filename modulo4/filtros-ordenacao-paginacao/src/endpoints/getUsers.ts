import orderUser from "../data/filterUser";
import { Request, Response } from "express"

export const getUsers = async (request: Request, response: Response): Promise<void> => {
    let sort = request.query.sort === "type" ? "type" : "email" || "name" ? "name": "email"
    let order = request.query.order === "ASC" ? "ASC" : "DESC"

    try {
        const result = await orderUser(order, sort)

        if (!result.length) {
            response.statusCode = 404
            throw new Error("Nenhum usuário encontrado!")
        }

        response.status(200).send(result)

    } catch (error) {
        response.status(500).send("Erro encontrado!")
    }
}
