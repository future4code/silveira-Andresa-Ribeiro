import { sign, verify } from "jsonwebtoken"
import { USER_ROLES } from "../types/user"


export interface AuthenticationData {
    id: string,
    role: USER_ROLES
}

export class Authenticator {

    generateToken = (payload: AuthenticationData) => {
        const token = sign(
            {payload},
            process.env.JWT_KEY as string,
            {expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN}
        )

        return token
    }

    getTokenData = (token: string): AuthenticationData => {
          const tokenData = verify(
                token,
                process.env.JWT_KEY as string
            ) as any

            return tokenData.payload


    }
}