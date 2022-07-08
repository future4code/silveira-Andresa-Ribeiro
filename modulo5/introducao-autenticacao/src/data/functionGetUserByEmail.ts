import connection from "../connection"

export const functionGetUserByEmail = async (email: string): Promise<any> => {
    const result = await connection('User')
        .select('*')
        .where('email', email)

    return result[0]
}
