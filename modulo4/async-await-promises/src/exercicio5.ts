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

const sendNotifications = async (users: user[], message: string): Promise<void> => {
    try {
        for (const user of users) {
            await axios.post(`${baseUrl}/notifications`, {
                subscriberId: user.id,
                message
            });
        }
        console.log("Todas as notificações foram enviadas com sucesso!");
    } catch {
        console.log("Erro!");
    }
};