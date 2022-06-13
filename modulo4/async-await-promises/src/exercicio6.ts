import express from "express";
import cors from "cors";
import { baseUrl } from "./constants/Url.js";
import axios from "axios";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});

// A) O Promisse.all resolve queda de performance por não deixar uma requisição esperar antes de enviar outra. Ela recebe um array de Promises e retorna outra Promise, que retorna um array de respostas.

// B) Ele pode enviar todas as requisições de uma vez. Deixando a performance e retorno mais rápidos.

// C)

type user = {
    id: string;
    name: string;
    email: string;
}

const sendNotifications = async (users: user[], message: string): Promise<void> => {
    try {
        const promises = users.map(user => {
            return axios.post(`${baseUrl}/notifications`, {
                subscriberId: user.id,
                message: message,
            })
        })
        await Promise.all(promises);

    } catch {
        console.log("Erro!");
    }
};