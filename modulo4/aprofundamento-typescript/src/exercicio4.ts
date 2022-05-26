// A)

type pokemon = {
    name: string,
    types: string,
    healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

// B) Para que o código em TS seja transpilado para JS é necessário inserir o comando tsc no terminal com nomedoarquivo.ts.

// C) A única diferença seria ao usar o comando tsc, pois tem que colocar o caminho específico do arquivo TS no terminal.

// D) Existem alguns: Rodar o comando tsc e colocar os nomes dos arquivos que precisam transpilar separados por espaço. Ou somente o comando tsc, sem parâmetros, dessa forma ele irá transpilar todos os arquivos com a extensão .ts.