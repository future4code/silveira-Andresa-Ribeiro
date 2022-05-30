/* const posts = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]
*/

// A) 

type post = {
    autor: string,
    texto: string
}

/*

const post1: post = {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
}

const post2: post = {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
}

const post3: post = {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
}

const post4: post = {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
}

const post5: post = {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
}

console.log(post1, post2, post3, post4, post5)

*/


// B) As entradas dessa função são o posts, que é uma array de objetos contendo o post de cada pessoa e um autorInformado, que é uma string passada atraves de uma variável.

const posts: post[] = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
  },

  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
  },

  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
  },

  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
  },

  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
  }
]

function buscarPostsPorAutor(posts: post[], autorInformado: string) {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }

console.log(buscarPostsPorAutor(posts, "Dobby"))