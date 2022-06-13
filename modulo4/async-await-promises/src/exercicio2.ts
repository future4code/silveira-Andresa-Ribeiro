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

// A) A diferença é que na função nomeada o ASYNC fica no começo da função. E a arrow function o ASYNC fica depois do nome da função.

// B)
const getSubscribers = async (): Promise<any[]> => {
  const response = await axios.get(`${baseUrl}/subscribers`);
  return response.data;
};