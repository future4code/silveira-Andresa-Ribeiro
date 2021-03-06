/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

1) Será impresso no console: { nome: "Amanda Rangel", apelido: "Mandi" };
    { nome: "Laís Petra", apelido: "Laura" };
    { nome: "Letícia Chijo", apelido: "Chijo" }

2) Será impresso no console: ["Amanda Rangel", "Laís Petra", "Letícia Chijo"].

3) Será impresso no console: [{ nome: "Amanda Rangel", apelido: "Mandi" };
                              { nome: "Laís Petra", apelido: "Laura" }].
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1) 

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// A) 
const arrayNome = pets.map((item) => {
    return item.nome
})

console.log(arrayNome)

// B)
const arraySalsichas = pets.filter((item) => {
    return item.raca === "Salsicha"
})

console.log(arraySalsichas)

// C)
const arrayDesconto = pets.filter((item) => {
    const racaPoodle = item.raca === "Poodle"
    return racaPoodle
}).map((item) => {
    item = `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
    return item
})

console.log(arrayDesconto)

// 2) 

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// A) 
const nomeProdutos = produtos.map((item) => {
    return item.nome
})

console.log(nomeProdutos)

// B)
const descontoProdutos = produtos.map((item) => {
    const precoItem = Number(item.preco * 0.50)
    const frase = [`O(a) ${item.nome} com 50% de desconto sai por ${precoItem}`]
    return frase
})
console.log(descontoProdutos)

// C)
const arrayBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})

console.log(arrayBebidas)

// D)
const arrayYpe = produtos.filter((item) => {
    const produtoYpe = item.nome.includes("Ypê")
    return produtoYpe
})

console.log(arrayYpe)

// E)
const fraseYpe = arrayYpe.map((item) => {
    const tipoYpe =  `Compre ${item.nome} por ${item.preco}!`
    return tipoYpe
})

console.log(fraseYpe)