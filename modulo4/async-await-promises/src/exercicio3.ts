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

type user = {
    id: string;
    name: string;
    email: string;
}

// A) Não retorna nenhum erro de tipagem.

// B) Para que possa retornar um resultado de qualquer tipo, sem que possa causar um erro de tipagem.

// C)

const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseUrl}/subscribers`);
    return response.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email,
        };
    });
};