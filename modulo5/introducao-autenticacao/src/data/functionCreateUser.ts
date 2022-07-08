import connection from "../connection"

export const functionCreateUser = async (id: string, email: string, password: string) => {
    await connection('User')
        .insert({
            id: id,
            email: email,
            password: password
        })
}

