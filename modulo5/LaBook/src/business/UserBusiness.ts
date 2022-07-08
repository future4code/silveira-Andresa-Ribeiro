import { UserDatabase } from "../data/UserDatabase";
import { Login, Singup } from "../Types/types";
import {Authenticator} from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from '../services/HashManager'
import { User } from "../model/User";

export class UserBusiness {

    constructor(
        private userDatabase: UserDatabase,
        private generateId: GenerateId,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    signUp = async (singup: Singup) => {
        const { name, email, password } = singup;

        if (!name || !email || !password) {
            throw new Error("Os campos 'nome', 'email' e 'senha' são obrigatórios.")
        }

        const accountExists = await this.userDatabase.findAccountByEmail(email);

        if (accountExists.length > 0) {
            throw new Error("Email já cadastrado!")
        }

        if (password.length <= 6) {
            throw new Error(`A senha deve ter mais que 6 caracteres`)
        }

        const id = this.generateId.idGenerate();

        const hashPassword = await this.hashManager.hash(password)

        const user = new User(
            id,
            name,
            email, hashPassword)

        await this.userDatabase.signUp(user)

        const token = this.authenticator.generateToken({ id })

        return token
    }


    login = async (inputLogin: Login) => {

        const { email, password } = inputLogin;

        if (!email || !password) {
            throw new Error("Preencha todos os campos.");
        }

        const [userLogin] = await this.userDatabase.findAccountByEmail(email)

        if (!userLogin) {
            throw new Error("Usuário não cadastrado!");
        }

        const comparePassword = this.hashManager.compare(userLogin.password, password)

        if (!comparePassword) {
            throw new Error("Senha incorreta!");
        }

        const { id } = userLogin;

        const token = this.authenticator.generateToken({ id })

        return token
    }

}