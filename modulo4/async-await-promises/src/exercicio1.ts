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


// A) O endpoint a ser usado é o GET.

// B) Indicamos adicionando o Promise<any[]> na função.

// C) 
async function getSubscribers(): Promise<any[]> {
  const response = await axios.get(`${baseUrl}/subscribers`);
  return response.data;
};