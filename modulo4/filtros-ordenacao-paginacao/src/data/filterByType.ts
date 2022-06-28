import { connection } from "./connection"

export const filterByType = async (type: String) => {
    const result = await connection.raw(`
    SELECT id, name, email, type FROM aula49_exercicio
    WHERE type LIKE "${type}"
    `)
    return result[0]
 }