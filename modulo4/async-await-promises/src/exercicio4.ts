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

// A) É uma função de tipagem com promises.

// B)

async function createNews(title: string, content: string, date: number): Promise<void> {
  await axios.put(`${baseUrl}/news`, {
    title: title,
    content: content,
    date: date
  });
}