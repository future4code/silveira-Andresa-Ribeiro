import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    protected table = "labook_users"

    signUp = async (user: User): Promise<void> => {
        try {
            await BaseDatabase
                .connection(this.table)
                .insert(user)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }


    findAccountByEmail = async (email: string) => {
        try {
            const account = await UserDatabase
                .connection(this.table)
                .select()
                .where({ email })

            return account;
            
        } catch (error: any) {
            let err = error.message || error.sqlMessage
            throw new Error(err)
        }
    }
}