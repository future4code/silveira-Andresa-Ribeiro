/* A) Ao atribuir um number á uma variável do tipo string, ocorre um erro: "O tipo 'number' não pode ser atribuído ao tipo 'string'."

let minhaString: string = 24
console.log(minhaString)
*/

//  B) Para que a variável aceite mais de um parâmetro podemos usar o Type Aliases + Union Type. Assim podemos determinar que pode ser um number OU uma string.

let meuNumero: number = 24
console.log(meuNumero)


// C) 

type Pessoa = {
    name: string,
    idade: number,
    corFavorita: string
}

const User: Pessoa = {
    name: "Andresa",
    idade: 27,
    corFavorita: "vermelho"
}

const User2: Pessoa = {
    name: "Paulo",
    idade: 28,
    corFavorita: "preto"
}

const User3: Pessoa = {
    name: "Andrei",
    idade: 21,
    corFavorita: "azul"
}

console.log(User, User2, User3)


// D)

enum ArcoIris {
    VERMELHO = "vermelha",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = 'verde',
    AZUL = "azul",
    AZULESCURO = "azul-escuro",
    VIOLETA = "violeta"
}

const User4: Pessoa = {
    name: "Adriana",
    idade: 49,
    corFavorita: ArcoIris.VIOLETA
}

console.log(User4)
