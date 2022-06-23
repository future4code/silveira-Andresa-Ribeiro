import express, {Request, Response } from 'express'
import cors from 'cors'
import knex from "knex";
import dotenv from "dotenv";

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
    },
});


const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});

// Tabela de usuários

const createUser = async (name: string, nickname: string, email: string): Promise<any> => {
    await connection("ToDoListUser")
        .insert({
            id: Date.now(),
            name: name,
            nickname: nickname,
            email: email
        })
}

app.post("/user", async (request: Request, response: Response) => {
    try {
        const { name, nickname, email } = request.body

        if (!name || !nickname || !email) {
            response.statusCode = 406
            throw new Error("Preencha todos os campos!")
        }

        await createUser(name, nickname, email)

        response.status(200).send("Usuário criado com sucesso!")
    } catch (error: any) {
        response.status(400).send(error.message)
    }
})

const getUserById = async (id: number): Promise<any> => {
    const result = await connection("ToDoListUser")
        .select("id", "nickname")
        .where("id", id)

    return result
}

app.get("/user/:id", async (request: Request, response: Response) => {
    try {
        const id: any = request.params.id

        const user = await getUserById(id)
        if (user.length === 0) {
            response.statusCode = 404
            throw new Error("Usuário não encontrado!")
        }

        response.status(200).send(user)
    } catch (error: any) {
        response.status(400).send(error.message)
    }
})

const editUser = async (id: number, name: string, nickname: string): Promise<any> => {
    await connection("ToDoListUser")
    .update({name: name, nickname: nickname})
    .where("id", id)
}

app.put("/user/edit/:id", async (request: Request, response: Response) => {
    try {
        const id: any = request.params.id
        const { name, nickname } = request.body

        if (!name || !nickname) {
            response.statusCode = 406
            throw new Error("Preencha todos os campos!")
        }

        await editUser(id, name, nickname)

        response.status(200).send("Usuário criado com sucesso!")
    } catch (error: any) {
        response.status(400).send(error.message)
    }
})

// Tabela de tarefas

const createTask = async (title: string, description: string, limit_date: Date, creator_user_id: number): Promise<any> => {
    await connection("ToDoListTask")
    .insert({title: title, description: description, limit_date: limit_date, creator_user_id: creator_user_id})
}

app.post("/task", async(request: Request, response: Response) => {
    try {
        const {title, description, limit_date, creator_user_id} = request.body
        const [day, month, year] = limit_date.split("/")
        const limitDate: Date = new Date(`${day}-${month}-${year}`)

        if(!title || !description || !limit_date || !creator_user_id) {
            response.statusCode = 422
            throw new Error("Preencha todos os campos!")
        }

        await createTask(title, description, limitDate, creator_user_id)

        response.status(200).send("Tarefa criada com sucesso!")
    } catch (error: any) {
        response.status(response.statusCode).send(error.message)
    }
})

const getTaskById = async (id: number): Promise<any> => {
    const result = await connection("ToDoListUser")
    .innerJoin("ToDoListTask", "ToDoListUser.id", "ToDoListTask.creator_user_id")
    .select('ToDoListTask.id', 'title', 'description', 'limit_date', 'creator_user_id')
    .where("ToDoListTask.id", id)

    return result
}

app.get("/task/:id", async (req: Request, res: Response) => {
    try {
        const id: any = req.params.id
        const task = await getTaskById(id)

        let formatedDate = task[0].limit_date
        let realDate = ((formatedDate.getDate() )) + "/" + ((formatedDate.getMonth() + 1)) + "/" + formatedDate.getFullYear(); 
        
        const formatedTask = {...task[0], limit_date: realDate}

        if (task.length === 0) {
            res.statusCode = 404
            throw new Error("Tarefa não encontada.")
        }

        res.status(200).send(formatedTask)
    } catch (error:any) {
        res.status(res.statusCode).send(error.message)
    }    
})
