import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

type User = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}

let users: User[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]

// EXERCICIO 1


app.get("/users", (request, response) => {
    let errorCode = 400

    try {
        const allUsers = users;

        response.status(200).send(allUsers)

    } catch (error) {
        response.status(errorCode).send("Falha na requisição")
    }
})

// a) Para receber informações deve-se usar o método GET.

// b) Indico pelo nome users, que faz referência a lista. Usando aspas duplas e uma barra: "/users";

// EXERCICIO 2


app.get("/users/search", (request: Request, response: Response) => {
    let errorCode = 400

    try {
        const type: string = request.query.type as string
        const Search: User[] = users.filter((user) => {
            return user.type === type.toUpperCase();
        })

        if (Search.length === 0) {
            errorCode = 404
            throw new Error("Tipo não encontrado!")
        }

        response.status(200).send(Search)

    } catch (error: any) {
        response.status(errorCode).send({ message: error.message })
    }
})

// a) Usando a função filter no banco de dados, fazendo a comparação com a array de users para cada parametro digitado e comparando com o valor da chave type de cada usuário.

// b) Ao retornar um parâmetro que não existe no type dos users, assim mudo o retorno para um array vazio, usando length === 0 .

// EXERCICIO 3


app.get("/users/search-name", (request: Request, response: Response) => {
    let errorCode = 400

    try {
        const name: string = request.query.name as string
        const Search: User | undefined = users.find((user) => {
            return user.name.toLowerCase() === name.toLowerCase();
        })

        if (!Search) {
            errorCode = 404
            throw new Error("Usuário não encontrado!")
        }

        response.status(200).send(Search)

    } catch (error: any) {
        response.status(errorCode).send({ message: error.message })
    }
})

// a) Query parameters.

// EXERCICIO 4


app.post('/users/create-user', (request: Request, response: Response) => {
    let errorCode = 400

    try {
        const { name, email, type, age } = request.body

        if (!name || !email || !type || !age) {
            errorCode = 422
            throw new Error("Preencha todos os campos!")
        }

        if (typeof name !== "string") {
            throw new Error("Nome inválido, escreva no formato string!")
        }

        if (typeof email !== "string") {
            throw new Error("Email inválido, escreva no formato string!")
        }

        if (typeof age !== "number") {
            throw new Error("Idade inválida, escreva no formato number!")
        }

        users.forEach(user => {
            if (user.email === email) {
                throw new Error("Email já cadastrado!")
            }
        })

        const newUser: User = {
            id: users.length + 1,
            name: name,
            email: email,
            type: type,
            age: age
        }

        users.push(newUser)

        response.status(200).send({ message: "Usuário criado com sucesso!" })
    } catch (error: any) {
        response.status(errorCode).send({ message: error.message })
    }
})

// a) Não ouve diferença, deu pra adicionar um usuário com os dois métodos.

// b) Apesar do PUT criar um recurso se ele não existir, a melhor maneira pra aprendizagem e uma boa prática é usar o método certo, o Post.


// DESAFIOS :

// EXERCICIO 5

app.put("/users/:id", (request: Request, response: Response) => {

    try {
        const id = Number(request.params.id)

        if (id === NaN) {
            throw new Error("Id inválido!")
        }

        users.forEach((user) => {
            if (user.id === id) {
                user.name += "-ALTERADO"
                return response.status(200).end
            }
        })

        response.status(204).send("Usuário não encontrado")

    } catch (error: any) {
        response.status(400).send(error.message)
    }
})

// EXERCICIO 6


app.patch("/users/:id", (request: Request, response: Response) => {

    try {
        const id = Number(request.params.id)

        if (id === NaN) {
            throw new Error("Id inválido!")
        }

        users.forEach((user) => {
            if (user.id === id) {
                user.name += "-REALTERADO"
                return response.status(200).end
            }
        })

        response.status(204).send("Usuário não encontrado")

    } catch (error: any) {
        response.status(400).send(error.message)
    }
})


// EXERCICIO 7


app.delete("/users/:id", (request: Request, response: Response) => {

    try {
        const id = Number(request.params.id)

        if (id === NaN) {
            throw new Error("Id inválido!")
        }

        for (let i = 0; i < users.length; i++) {
            if (users[i].id === id) {
                users.splice(i, 1)
                return response.status(200).end
            }
        }

        response.status(204).send("Usuário não encontrado")

    } catch (error: any) {
        response.status(400).send(error.message)
    }
})