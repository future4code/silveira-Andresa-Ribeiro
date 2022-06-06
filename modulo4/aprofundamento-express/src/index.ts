import express, { Request, Response } from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())


// EXERCICIO 1


app.get("/ping", (req, res) => {
  res.send("Pong! 🏓")
})

// EXERCICIO 2


type tarefasTipo = {
  userId: number,
  id: number,
  title: string,
  completed: string | boolean,
}

// EXERCICIO 3


const Tarefas: tarefasTipo[] = [
  {
    userId: 1,
    id: 10,
    title: "Varrer a casa",
    completed: false
  },

  {
    userId: 2,
    id: 20,
    title: "Lavar a louça",
    completed: true
  },

  {
    userId: 3,
    id: 30,
    title: "Lavar a roupa",
    completed: false
  },

  {
    userId: 4,
    id: 40,
    title: "Fazer o almoço",
    completed: true
  },
]

// EXERCICIO 4


app.get('/afazeres', (request, response) => {
  const listaAfazeres = Tarefas.filter((Tarefas) => {
    return Tarefas.completed === true
  })
  response.status(200).send(listaAfazeres)
})

// EXERCICIO 5


app.post('/criar-tarefa', (request: Request, response: Response) => {
  const novosAfazeres = {
    id: Date.now(),
    userId: (request.body.id),
    title: (request.body.title),
    completed: (request.body.completed)
  }

  Tarefas.push(novosAfazeres)

  response.status(200).send({ Tarefas })
})

// EXERCICIO 6


app.put('/afazeres/:id', (request: Request, response: Response) => {
  const idUpdate = Number(request.params.id)

  const novoStatus = Tarefas.filter((filtro) =>{
    if (filtro.id === idUpdate) {
      filtro.completed !== filtro.completed
    }
  })

  response.status(200).send({ Tarefas })
})


// EXERCICIO 7


app.delete('/afazeres/:id', (request: Request, response: Response) => {
  const idParams = Number(request.params.id)

  const deletandoId = Tarefas.filter((deletar) => {
      if(deletar.id !== idParams) {
          return deletar;
      }
  })
  response.status(200).send({ deletandoId })
})


// EXERCICIO 8


app.get('/afazeres/:userId', (request: Request, response: Response) => {
  const userIdList = Number(request.params.userId)

  const afazeresUsuario = Tarefas.filter((Tarefas) => {
      if(Tarefas.userId === userIdList) {
          return Tarefas;
      };
  })

  response.status(200).send({tarefas: {afazeresUsuario} })
})



app.listen(3003, () => console.log("Servidor disponível em http://localhost:3003"))
