import { UserDatabase } from "../data/UserDatabase";
import { User, USER_ROLES } from "../types/user";
import { Authenticator } from "../services/Authenticator";
import { generateId } from "../services/idGenerator";
import { HashManager }from '../services/HashManager'


export class UserBusiness {
    async createUser (name: string, email: string, password: string, role: USER_ROLES) {
        try {

            if(!name || !email || !password || !role) {
                throw new Error("Preencha todos os campos.");

            }

            if(email.indexOf("@") === -1){
                throw new Error("Email Inválido!");
            }

            const id: string = generateId()

            const hashPassword = new HashManager().createHash(password)

            const authenticator = new Authenticator()
            const token = authenticator.generateToken({ id, role })


            await new UserDatabase().insertUser(id, name, email, hashPassword, role)

            return token

        } catch (error: any) {

            return {message: error.sqlMessage || error.message}

        }
    }

    async login (email: string, password: string) {
        try {

            if(!email || !password) {
                throw new Error("Preencha todos os campos.");
            }

            const userData = await new UserDatabase().getUserByEmail(email)
            console.log(userData)
            if(!userData) {
                throw new Error("Usuário não cadastrado!");
            }

            const correctPassword: boolean = new HashManager().compareHash(password, userData.password)

            const authenticator = new Authenticator()
            const token = authenticator.generateToken({ id: userData.id, role: userData.role })

            if(!correctPassword) {
                throw new Error("Senha incorreta!");
            }

            return token

        } catch (error:any) {
            return {message: error.sqlMessage || error.message}
        }
    }

    async getEveryone (token: string) {
        try {
            if(!token) {
                throw new Error("Cadê o token?");
            }

            const tokenData = new Authenticator().getTokenData(token)

            if (!tokenData) {
                throw new Error("Token Inválido");
            }

            const userData = await new UserDatabase().getAllUsers()

            if(!userData) {
                throw new Error("Usuário não encontrado.");
            }

            return userData

        } catch (error: any) {
            return {message: error.sqlMessage || error.message}
        }
    }

    async deleteUser (token: string, id: string) {
        try {

            const verifyToken = new Authenticator().getTokenData(token)

            if(verifyToken.role !== "ADMIN") {
                throw new Error("Soemnte ADMIN pode deletar usuário.");
            }

            return await new UserDatabase().deleteUSerById(id)

        } catch (error:any) {
            return {message: error.sqlMessage || error.message}
        }
    }
}