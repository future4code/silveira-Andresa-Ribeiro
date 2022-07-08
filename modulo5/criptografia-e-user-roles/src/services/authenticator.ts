import { sign, verify, Jwt } from "jsonwebtoken";
import { AuthenticationData } from "../types";
import dotenv from "dotenv"

dotenv.config();

const expiresIn = "3min"

export class Authenticator {
  generateToken = (payload: AuthenticationData) => {
    const token = sign(
      {
        id: payload.id,
        role: payload.role
    },

      process.env.JWT_KEY as string,

      { expiresIn }
    )

    return token
  }

  getTokenData = (token: string): AuthenticationData => {
    const payload = verify(token, process.env.JWT_KEY as string) as any

    const result = {
      id: payload.id,
      role: payload.role,
    };

    return result
  }
}