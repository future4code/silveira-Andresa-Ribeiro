import express, { Request, Response } from "express";
import cors from "cors";
import { Produtos, produto } from './data';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

// EXERCICIO 1

app.get("/test", (req, res) => {
    res.send("API está funcionando!")
})

// EXERCICIO 3 E 7


app.post('/criar-produto', (request: Request, response: Response) => {

    try {
        if (!request.body.name && !request.body.price) {
            response.status(400).send("Parâmetros inválidos!")
        }

        if (request.body.name !== String) {
            response.status(400).send("Nome do produto inválido, não é uma string!")
        }

        if (request.body.price !== Number) {
            response.status(400).send("Preço inválido, não é um número!")
        }

        if (request.body.price <= 0) {
            response.status(400).send("Preço inválido, digite um preço maior que 1!")
        }


        const novosProdutos: produto = {
            id: Date.now().toString(),
            name: (request.body.name),
            price: (request.body.price)
        }

        Produtos.push(novosProdutos)

        response.status(201).send({ message: "Produto criado com sucesso!", novosProdutos })
    } catch (error: any) {
        if (response.statusCode === 200) {
            response.status(500).end()
        } else {
            response.send(error.message)
        }
    }
})


// EXERCICIO 4 E DESAFIO 10

app.get('/produtos', (request: Request, response: Response) => {
    const produtoFiltrado: any = []

    const listaProdutos = Produtos.map((produtos) => {
        if (request.query.search === produtos.name) {
            produtoFiltrado.push(produtos)
        }
    })

    response.status(200).send(produtoFiltrado)
})

// EXERCICIO 5 E 8


app.put('/editar-preco/:id', (request: Request, response: Response) => {
    const idProduto = request.params.id as string
    const price = Number(request.body.price)

    const procuraProduto = Produtos.map((Produtos) => {
        if (Produtos.id === idProduto) {
            return Produtos.price = request.body.price
        }
    })

    try {
        if (!price) {
            response.status(400).send("Preço não recebido!")
        }

        if (typeof price !== "number") {
            response.status(400).send("Preço inválido, insira um número!")
        }

        if (price <= 0) {
            response.status(400).send("Preço inválido!")
        }

        if (!idProduto) {
            response.status(400).send("Id não recebida!")
        }

        response.status(201).send({ message: "Preço modificado com sucesso!", Produtos })
    } catch (error: any) {
        if (response.statusCode === 200) {
            response.status(500).end()
        } else {
            response.send(error.message)
        }
    }
})

// EXERCICIO 6 E 9


app.delete('/produtos/:id'), (request: Request, response: Response) => {
    try {
        const idProduto = request.params.id

        const deletar = Produtos.findIndex((produto) => {
            if (produto.id !== idProduto) {
                return produto
            }
        })

        if (!idProduto) {
            response.statusCode = 400
            throw new Error("Id inválido!")
        }

        if (idProduto === undefined) {
            response.statusCode = 404
            throw new Error("Produto não encontrado!")
        }

        response.status(200).send({ deletar })
    } catch (error: any) {
        if (response.statusCode === 200) {
            response.status(500).end()
        } else {
            response.send(error.message)
        }
    }

}

