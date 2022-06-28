import { connection } from "./connection"

export const filterByName = async (name: String) => {
    const result = await connection.raw(`
    SELECT id, name, email, type FROM aula49_exercicio
    WHERE name LIKE "${name}"
    `)
    return result[0]
}