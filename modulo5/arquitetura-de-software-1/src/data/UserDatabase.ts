import { BaseDatabase } from "./BaseDatabase";
import { User } from "../types/user";


export class UserDatabase extends BaseDatabase {

  public async insertUser(
    id: string,
    name: string,
    email: string,
    password: string,
    role: string
  ): Promise<void> {
    try {
      await BaseDatabase.connection("User_Arq")
        .insert({
          id,
          name,
          email,
          password,
          role
        })
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserByEmail(email: string): Promise<any> {
    try {
      const result = await BaseDatabase.connection("User_Arq")
        .select('*')
        .where({ email })

      if (!result[0]) {
        throw new Error("Usuário não encontrado!");
      }

      return result[0]

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getAllUsers() {
    try {

      const users = await BaseDatabase.connection("User_Arq")
        .select("*")

      return users

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async deleteUSerById (id: string){
    await UserDatabase.connection("User_Arq")
    .delete()
    .where({id})
  }
}