import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

// EXERCICIO 1
app.get("/", (req, res) => {          
    res.send("Meu primeiro endpoint")
})

// EXERCICIO 2

app.get('/users',(request: Request, response: Response) => {

    const arrayId = [{id:1, nome:'Andresa', telefone: '3000-1000', email: 'andresa_15ga@hotmail.com', website: 'www.google.com.br'}, {id:2,nome:'Paulo', telefone: '3000-2000', email: 'paulo@hotmail.com', website: 'www.google.com.br'}]
    
        response.status(200).send({arrayId})
})

// EXERCICIO 3

type Dados = {
    id: number,
    name: string,
    idade: number,
    telefone: string,
    email: string,
    corFavorita: string
}

const Users: Dados[] = [
    {
    id: 1,
    name: "Andresa",
    idade: 27,
    telefone: '3000-1000', 
    email: 'andresa_15ga@hotmail.com',
    corFavorita: "vermelho"
},

{
    id: 2,
    name: "Paulo",
    idade: 28,
    telefone: '3000-2000', 
    email: 'paulo@hotmail.com',
    corFavorita: "preto"
},

{
    id: 3,
    name: "Andrei",
    idade: 21,
    telefone: '3000-3000', 
    email: 'andrei@hotmail.com',
    corFavorita: "azul"
},

{
    id: 4,
    name: "Adriana",
    idade: 21,
    telefone: '3000-4000', 
    email: 'adriana@hotmail.com',
    corFavorita: "amarelo"
},

{
    id: 5,
    name: "Miguel",
    idade: 10,
    telefone: '3000-5000', 
    email: 'miguel@hotmail.com',
    corFavorita: "verde"
}
]

// EXERCICIO 4

app.get('/lista-de-users',(request: Request, response: Response) => {    
    response.status(200).send({Users})
})

// EXERCICIO 5

app.get('/posts', (request: Request, response: Response) => {

    const posts = [
        {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
        },

        {
            userId: 2,
            id: 2,
            title: "qui est esse",
            body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
        }]

    response.status(200).send({posts})
})

// EXERCICIO 6

type InfoPosts = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

const PostsList: InfoPosts[] = [
    {
        userId: 1,
        id: 21,
        title: "asperiores ea ipsam voluptatibus modi minima quia sint",
        body: "repellat aliquid praesentium dolorem quo sed totam minus non itaque nihil labore molestiae sunt dolor eveniet hic recusandae veniam tempora et tenetur expedita sunt"
      },

      {
        userId: 2,
        id: 22,
        title: "dolor sint quo a velit explicabo quia nam",
        body: "eos qui et ipsum ipsam suscipit aut sed omnis non odio expedita earum mollitia molestiae aut atque rem suscipit nam impedit esse"
      },

      {
        userId: 3,
        id: 23,
        title: "maxime id vitae nihil numquam",
        body: "veritatis unde neque eligendi quae quod architecto quo neque vitae est illo sit tempora doloremque fugit quod et et vel beatae sequi ullam sed tenetur perspiciatis"
      },

      {
        userId: 4,
        id: 24,
        title: "autem hic labore sunt dolores incidunt",
        body: "enim et ex nulla omnis voluptas quia qui voluptatem consequatur numquam aliquam sunt totam recusandae id dignissimos aut sed asperiores deserunt"
      },

      {
        userId: 5,
        id: 25,
        title: "rem alias distinctio quo quis",
        body: "ullam consequatur ut omnis quis sit vel consequuntur ipsa eligendi ipsum molestiae et omnis error nostrum molestiae illo tempore quia et distinctio"
      },

      {
        userId: 6,
        id: 26,
        title: "est et quae odit qui non",
        body: "similique esse doloribus nihil accusamus omnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus perspiciatis cum ut laudantium omnis aut molestiae vel vero"
      },
]

// Acho melhor colocar fora do array de usuários para não misturar as informações das duas listas.

// EXERCICIO 7

app.get('/lista-de-posts', (request: Request, response: Response) => {
    response.status(200).send({ PostsList })
})

// EXERCICIO 8 E DESAFIO 9 E 10

type PostUser = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

const userPosts: PostUser[] = [
    {
        userId: 1,
        id: 21,
        title: "asperiores ea ipsam voluptatibus modi minima quia sint",
        body: "repellat aliquid praesentium dolorem quo sed totam minus non itaque nihil labore molestiae sunt dolor eveniet hic recusandae veniam tempora et tenetur expedita sunt"
    },

    {
        userId: 2,
        id: 22,
        title: "dolor sint quo a velit explicabo quia nam",
        body: "eos qui et ipsum ipsam suscipit aut sed omnis non odio expedita earum mollitia molestiae aut atque rem suscipit nam impedit esse"
    },

    {
        userId: 3,
        id: 23,
        title: "maxime id vitae nihil numquam",
        body: "veritatis unde neque eligendi quae quod architecto quo neque vitae est illo sit tempora doloremque fugit quod et et vel beatae sequi ullam sed tenetur perspiciatis"
    },
]

app.get('/posts/:id', (request, response) => {
    const id = Number(request.params.id)

    const usuarioPost = userPosts.filter((post) => {
        return post.id === id
    })
    response.status(200).send(usuarioPost)
})

app.delete('/delete/posts/:idUser/:postId', (request, response) => {

    const newPost = userPosts.filter((item) => {
        return item.userId !== +request.params.idUser && item.id !== +request.params.postId
    })
    const deletadoPost = {
        message: 'Post deletado',
        newPosts: newPost
    }
    response.status(200).send(deletadoPost)
});

app.delete('/delete/users/:id', (request, response) => {

    const newUser = userPosts.filter((item) => {
        return item.id !== +request.params.id
    })
    const deletadoUser = {
        message: 'Usuário deletado',
        newUsers: newUser
    }
    response.status(200).send(deletadoUser)
});



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});