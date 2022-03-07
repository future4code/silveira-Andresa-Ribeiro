/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:

1.A)

Permite realizar uma determinada ação dependendo de uma condição. Teste de se as condicionais são verdadeiras ou falsas.

B.) Números pares.

C.) Números ímpares.

2.A) Para simplificar as condicionais do código.

B.) Se o valor de fruta for "Maçã", será impressa a mensagem: O preço da fruta maçã é R$ 2.25

C.) Irá imprimir o resultado normalmente: O preço da fruta pêra é R$ 5 

3.A) Pedindo ao usuário para escolher e digitar um número

B.) Se o usuário digitou o número 10, a mensagem do terminal será: "Esse número passou no teste".
    Se o usuário digitou o número -10, nenhuma mensagem irá aparcer no terminal, pq não tem a condicional ELSE ou ELSEIF.
    
C.)Sim, retornará um erro. Irá aparcer mensagem is not defined, porque o console.log não está dentro do bloco IF. */

// EXERCÍCIOS DE ESCRITA DE CÓDIGO:

// 1)

const idade =  Number(prompt("Qual é a sua idade?"))

let condicao1 = idade >= 18
let condicao2 = idade < 18

if (condicao1) {
    console.log("Você pode dirigir")

}
else if (condicao2) {
    console.log("Você não pode dirigir.")
}

// 2)

const periodo = prompt("Em que período do dia você está Matutino(M), Vespertino(V) ou Noturno(N)?").toUpperCase()

    if (periodo === "M") {
        console.log ("Bom Dia!")
    } else if (periodo === "V") {
        console.log ("Boa Tarde!")
    } else if (periodo === "N") {
        console.log ("Boa Noite!")
    } else{
        console.log ("Período não encontrado, digite novamente!")
    } 

// 3)

const periodo1 = prompt("Em que período do dia você está Matutino(M), Vespertino(V) ou Noturno(N)?").toUpperCase()

switch (periodo1) {
    case "M":
        console.log("Bom Dia!")
        break
    case "V":
        console.log ("Boa Tarde!")
        break
    case "N":
        console.log ("Boa Noite!")
        break
    default:
        console.log ("Período não encontrado, digite novamente!")
        break
}

// 4)

const genero = prompt("Qual o gênero de filme que você deseja assistir?")
const ingresso = Number(prompt("Qual é o preço do ingresso?"))

if (genero === "fantasia" && ingresso < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}

//---------------------------------------------------------------------------

//DESAFIOS

// 1)

const genero1 = prompt("Qual o gênero de filme que você deseja assistir?")
const ingresso1 = Number(prompt("Qual é o preço do ingresso?"))

if (genero1 === "fantasia" && ingresso1 < 15) {
    const lanchinho = prompt("Qual snack que você quer comprar?")
    console.log("Bom filme!")
    console.log(`Aproveite o seu ${lanchinho}!`)
} else {
    console.log("Escolha outro filme :(")
}



