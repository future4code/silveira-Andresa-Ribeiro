import { sign, verify, Jwt } from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();

const expiresIn = "30min"

export interface AuthenticationData {
    id: string
}

export class Authenticator {

    generateToken = (payload: AuthenticationData) => {
        const token = sign (
            {
                id: payload.id,
            },
        
              process.env.JWT_KEY as string,
        
              { expiresIn }
        )

        return token
    }

    getTokenData = (token: string): AuthenticationData | null => {
        try {
            const tokenData = verify(
                token,
                process.env.JWT_KEY as string
            ) as any

            return tokenData
            
        } catch (error) {
            console.log(error)
            return null
        }
    }
}