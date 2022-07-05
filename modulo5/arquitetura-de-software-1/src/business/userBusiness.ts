import { userInput } from './../types/user';
import { compare } from './../services/hashManager';
import { generateToken, getTokenData } from '../services/authenticator';
import { hash } from '../services/hashManager';
import { generateId } from '../services/idGenerator';
import { UserData } from '../data/UserDatabase';

export class UserBusiness {
    async createUser(user: userInput) {

        try {
            if (!user.name || !user.email || !user.password || !user.role) {
                throw new Error("Preencha todos os campos!");
            }

            if (user.email.indexOf("@") === -1) {
                throw new Error("Email Inválido");
            }

            if (user.password.length < 6) {
                throw new Error("Senha deve ter no mínimo 6 caracteres!");
            }

            const id = generateId();
            const hashPassword = await hash(user.password);
            const userData = new UserData();
            await userData.createUser(id, user.email, user.name, hashPassword, user.role);
            const role = user.role;
            const token = generateToken({ id, role });

            return token;

        } catch (error: any) {
            throw new Error(error.message || "Erro ao criar usuário. Verifique com o administrador!");
        }
    }


    async get(token: string) {
        getTokenData(token);
        const userData = new UserData();
        return await userData.get();
    }

    async getUserByEmail(user: any) {

        const userDatabase = new UserData;

        const userFromDB = await userDatabase.getUserByEmail(user.email);

        const hashCompare = await compare(user.password, userFromDB.getPassword());

        const accessToken = generateToken({ id: userFromDB.getId(), role: user.role });

        if (!hashCompare) {
            throw new Error("Senha Inválida!");
        }

        return accessToken;
    }

    async deleteUser(input: { id: string, token: string }) {

        const verifiedToken = getTokenData(input.token);

        if (verifiedToken.role !== "ADMIN") {
            throw new Error("Apenas administradores podem deletar usuários!")
        }

        const userDatabase = new UserData;
        return await userDatabase.deleteUser(input.id);
    }
}