import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    async createUser(user: User) {
        try {

            await UserDatabase.connection('')
                .insert({
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    password: user.getPassword()
                })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message )
        }
    }
}