import express, { Request, Response } from 'express';
import cors from 'cors';
import { accounts } from './accounts';
import { Account } from './data';

const app = express();
app.use(express.json());
app.use(cors());


app.post('/users/create-user', (request: Request, response: Response) => {
    let errorCode: number = 400

    try {
        const { name, cpf, dateOfBirthAsString } = request.body

        const [day, month, year] = dateOfBirthAsString.split("/")

        const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)

        // validar as requisições

        const ageInMilisseconds: number = Date.now() - dateOfBirth.getTime()

        const ageInYears: number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365

        if (ageInYears < 18) {
            response.statusCode = 406
            throw new Error("Idade deve ser maior que 18 anos para criar conta.")
        }

        if (!name || !cpf || !dateOfBirthAsString) {
            errorCode = 422
            throw new Error("Preencha todos os campos!")
        }

        if (typeof name !== "string") {
            throw new Error("Nome inválido!")
        }

        if (cpf === "000.000.000-00") {
            throw new Error("CPF inválido!")
        }

        if (cpf === NaN || dateOfBirthAsString === NaN) {
            throw new Error("Erro! Confira seu cpf/data de nascimento")
        }

        // consultar ou alterar a base de dados

        accounts.push({
            name,
            cpf,
            dateOfBirth,
            balance: 0,
            statement: []
        });

        // enviar resposta 

        response.status(201).send("Conta criada com sucesso!")

    } catch (error: any) {
        console.log(error)
        response.send(error.message)
    }
})

app.get("/users", (request: Request, response: Response) => {
    try {
        if (!accounts.length) {
            let errorCode = 400
            throw new Error("Nenhuma conta foi encontrada!")
        }
        response.status(200).send(accounts)
    } catch (error: any) {
        response.send(error.message)
    }
})


app.get("/users/search-for-balance", (request: Request, response: Response) => {
    let errorCode = 400

    try {
        const name: string = request.query.name as string
        const cpf = request.query.cpf

        const Search: Account | undefined = accounts.find((user) => {
            if (user.name === name && user.cpf === cpf) {
                return user.balance
            }

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


app.put("/users/add-balance", (request: Request, response: Response) => {
    let errorCode = 400

    try {
        const { name, balance } = request.body
        const value = request.body.value
        const date = request.body.date
        const description = request.body.description

        if (description === undefined) {
            throw new Error("Descrição inválida!")
        }

        if (value === NaN) {
            throw new Error("Valor inválido!")
        }

        if (date === undefined) {
            return Date.now()
        }

        if (date < Date.now()) {
            throw new Error("Você não pode agendar um pagamento para um dia que já passou!")
        }

        if (value > balance) {
            throw new Error("Valor do pagamento maior que o saldo!")
        }
        

        const addBalance = accounts.find((user) => {
            if (user.name === name) {
                return user.balance = user.balance + balance
            }
        })

        response.status(200).send(addBalance)

    } catch (error: any) {
        response.status(errorCode).send({ message: error.message })

    }
})

app.listen(3003, () => {
    console.log("Servidor ligado, rodando na porta 3003!")
})
