import * as jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config();

export class TokenGenerator {
  public generate = (input: AuthenticationData): string => {
    const newToken = jwt.sign(
      {
        id: input.id
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: "30min",
      }
    );
    return newToken;
  };

  public verify(token: string) {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = { id: payload.id};
    return result;
  }
};

export interface AuthenticationData {
  id: string
};