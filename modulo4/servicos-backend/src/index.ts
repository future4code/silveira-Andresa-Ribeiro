import app from "./app";
import { getAddress } from "./endpoints/getAddress";


app.get("/address/:cep", getAddress);

