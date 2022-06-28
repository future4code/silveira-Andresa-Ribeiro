import { connection } from "./data/connection";
import { app } from "./app";
import { getAllFunctionalities } from "./endpoints/getAllFunctionalities";
import { getUserByName } from "./endpoints/getUserByName";
import { getUserByType } from "./endpoints/getUserByType";
import { getUsers } from "./endpoints/getUsers";
import { getPagination } from "./endpoints/getPagination"


app.get(`/users`, getAllFunctionalities)

app.get(`/filter-name`, getUserByName)

app.get(`/filter-type/:type`, getUserByType)

app.get(`/order-Users`, getUsers)

app.get("/pagination", getPagination)

