enum setor {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

type colaboradores = {
    nome: string,
    salário: number,
    setor: string,
    presencial: boolean
}

const filtrarColaboradores: colaboradores[] = [
	{ nome: "Marcos", salário: 2500, setor: setor.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: setor.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: setor.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: setor.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: setor.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: setor.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: setor.MARKETING, presencial: true }
]

function buscarColaboradores(filtrarColaboradores: colaboradores[]) {
    return filtrarColaboradores.filter(
        (colaboradores) => {
            return colaboradores.setor === "marketing" && colaboradores.presencial === true
        }
    )
}

console.log(buscarColaboradores(filtrarColaboradores))