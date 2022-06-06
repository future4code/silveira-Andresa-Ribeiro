type Infos = {
    nome: string,
    anoLancamento: number,
    genero: GENERO,
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

function filme(pontuacao?: number): Infos = {
	    if (pontuacao) {
		 return {
    nome: nome,
    anoLancamento: anoLancamento,
    genero: genero,
    pontuacao: pontuacao
	}
} else {
	return {
	nome: nome,
    anoLancamento: anoLancamento,
    genero: genero,
}
}
}

console.log(filme("Interstellar", 2014, GENERO.FICCAO, 86));
console.log(filme("Interstellar", 2014, GENERO.FICCAO));
