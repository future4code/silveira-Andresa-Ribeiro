// A) A entrada para essa função é uma array de números sortidos, e a saída é um objeto declarado como estatistica, e que retorna esse objeto com as chaves maior, menor e média.

function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// B)

// C)

type amostraDeDados = {
    numeros: number[],

    obterEstatisticas: (numeros: number[]) => {
        maior: number,
        menor: number,
        media: number
    }
}

const amostra: amostraDeDados = {
    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas
}

console.log(amostra)