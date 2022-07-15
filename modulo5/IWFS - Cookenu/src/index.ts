import { Request, Response } from "express"
import app from "./app"
import createRecipe from "./endpoints/createRecipe"
import followUser from "./endpoints/followUser"
import getProfile from "./endpoints/getProfile"
import getRecipeById from "./endpoints/getRecipeById"
import login from "./endpoints/login"
import signup from "./endpoints/signup"

app.get("/", (req: Request, res: Response) => {
    res.send("Deu certo!")
    console.log("configurações funcionando")
})

app.post("/signup", signup)
app.post("/login", login)
app.get("/user/profile", getProfile)
app.get("/user/:id", followUser)
app.post("/recipe", createRecipe)
app.get("/recipe/:id", getRecipeById)