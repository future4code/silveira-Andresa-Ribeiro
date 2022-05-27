type Infos = {
    nome: string,
    anoLancamento: number,
    genero: string,
    pontuacao?: number
}

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror",
    FICCAO="ficção científica"
}

const filme: Infos = {
    nome: "Interstellar",
    anoLancamento: 2014,
    genero: GENERO.FICCAO,
    pontuacao: 86
}

console.log(filme)