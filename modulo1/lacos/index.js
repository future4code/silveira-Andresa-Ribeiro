// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

/* 1) Está fazendo uma soma usando o laço FOR. O resultado será: 10.

2.A) O resultado será: 19, 21, 23, 25, 27, 30.

B)
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  let posicao = lista.indexOf(numero)
   
		console.log(`${numero}, seu índice é ${posicao}`)
	}

3) RESPOSTA: 

*
**
***
****

*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1)

let qntdBichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))

if (qntdBichinhos == 0) {
  console.log("Que pena! Você pode adotar um pet!")
}

if (qntdBichinhos > 0) {
  for (let i=0; i < qntdBichinhos; i++) {
    const nomesBichos = prompt("Escreva os nomes dos bichinhos de estimação que você tem:")
    const nomesBichinhos = [nomesBichos]
    console.log(nomesBichinhos)

  }
}

// 2)

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// A)

const imprimeArray = (array) => {
  for (let numero of array) {
      console.log(numero)
  }
}
console.log('Valores originais são: ')
imprimeArray(arrayOriginal)

// B)

const imprimeArrayDivididos = (array) => {
  for (let numero of array) {
    let divisao = numero / 10
      console.log(divisao)
  }
}
console.log('Os valores originais divididos por 10 são: ')
imprimeArrayDivididos(arrayOriginal)

// C)

const imprimeArrayPares = (array) => {
  const numerosPares = []
  for (let numero of array) {
    if (numero % 2 === 0) {
      numerosPares.push(numero)
    }
  }
  console.log(numerosPares)
}
console.log('Os valores pares dos valores originais são: ')
imprimeArrayPares(arrayOriginal)


// D)

const listaStrings = ["Olá", ",","como", "vai", "você", "?"]
for (let palavras of listaStrings) {
  let posicao = listaStrings.indexOf(palavras)
   
		console.log(`O elemento do índex ${posicao} é: ${palavras}`)
	}

// E)

const imprimeMaioreMenor = (array) => {
  let valorMaximo = 0
  let valorMinimo = 99999
  for (let numero of array) {
    if (numero > valorMaximo) {
      valorMaximo = numero
    }else if (numero < valorMinimo) {
      valorMinimo = numero
    }
  }
  console.log(`O maior número é ${valorMaximo} e o menor número é ${valorMinimo} `)
}

imprimeMaioreMenor(arrayOriginal)