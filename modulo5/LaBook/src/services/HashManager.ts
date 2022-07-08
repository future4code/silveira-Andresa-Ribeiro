import * as bcrypt from "bcryptjs"


export class HashManager {

    hash = async (plainText: string): Promise<string> => {

        const rounds = Number(process.env.BCRYPT_COST)

        const salt = await bcrypt.genSaltSync(rounds)
        
        return bcrypt.hash(plainText, salt)

    }


    compare = async (plainText: string, cypherText: string): Promise<boolean> => {
        return bcrypt.compare(plainText, cypherText)
    }
    static compareHash: any
}