/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:

1.A)

console.log(filme.elenco[0]) = "Matheus Nachtergaele"
console.log(filme.elenco[filme.elenco.length - 1]) = "Virginia Cavendish"
console.log(filme.transmissoesHoje[2]) = canal: "Globo", horario: "14h" 

2.A)

console.log(cachorro) = "{   
    nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}"

console.log(gato) = "{
	nome: "Juba", 
	idade: 3, 
	raca: "SRD"
}"

console.log(tartaruga) = "{
	nome: "Jubo", 
	idade: 3, 
	raca: "SRD"
}"
    
B) 
    
    Faz o espalhamento (spread), ou seja, consegue realizar uma cópia de um objeto (ou array) inteiro. E com isso também podemos adicionar ou alterar suas propriedades.

3.A) console.log(minhaFuncao(pessoa, "backender")) =false.
console.log(minhaFuncao(pessoa, "altura")) = undefined.

B.) Porque a chave "altura" não foi definida, então ela trás como undefined.
    
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO:

// 1.A)

    const pessoa = {
    nome: "Andresa", 
    apelidos: ["Dresa", "Dê", "Desa"]
 }

    function imprimeApelidos(texto){
    console.log(`Eu sou ${texto.nome}, mas pode me chamar de ${texto.apelidos[0]}, ${texto.apelidos[1]} ou ${texto.apelidos[2]}`)

}

    imprimeApelidos(pessoa)
    
// B.)

    const novaPessoa= {...pessoa, apelidos: ["Cachos", "Sorridente", "Ruivinha"]

}

    imprimeApelidos(novaPessoa)

// 2.A)

const aluno1 = {
    nome: "Paulo",
    idade: 28, 
    profissao: "Professor"
}

const aluno2 = {
    nome: "Andresa",
    idade: 27, 
    profissao: "Estudante"
}

//B.)

function retornaArray(objeto) {
    let nome = objeto.nome
    let quantCaracteres = objeto.nome.length
    let idade = objeto.idade
    let profissao = objeto.profissao 
    let qntdCaracteres = objeto.profissao.length
    let dados = [nome, quantCaracteres, idade, profissao, qntdCaracteres]
    console.log(dados)
    return dados
}

retornaArray(aluno1)
retornaArray(aluno2)

 
// 3.A)

    var carrinho = []

// B.)

    const fruta1 = {
        nomefruta1: "Laranja",
        disponibilidade: true,
    }

    const fruta2 = {
        nomefruta1: "Maçã",
        disponibilidade: true,
    }

    const fruta3 = {
        nomefruta1: "Banana",
        disponibilidade: true,
    }

// C.)

    function funcaoCarrinho (objeto){

        carrinho.push(objeto)

    }

    funcaoCarrinho(fruta1)
    funcaoCarrinho(fruta2)
    funcaoCarrinho(fruta3)

// D.)

    console.log(carrinho)

//------------------------------------------------------------------------------
    
// DESAFIOS

// 1.)

function imprimeObjeto() {
    let nome = prompt('Qual é o seu nome?')
    let profissao = prompt('Qual é sua profissão?')
    let idade = Number(prompt('Qual é sua idade?'))
    
    let Usuario = {
        nome: nome,
        profissao: profissao,
        idade: idade
        
    }
    console.log(Usuario)
    console.log(typeof Usuario)
}

imprimeObjeto()

// 2.)

const filme1 = {
    nome: 'Interestelar',
    lancamento: 2014
}

const filme2 = {
    nome: 'Dunkirk',
    lancamento: 2017
}

function lancamentoFilmes(objeto1, objeto2) {
    console.log(`O primeiro filme foi lançado antes do segundo? ${objeto1.lancamento < objeto2.lancamento}`)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${objeto1.lancamento === objeto2.lancamento}`)
}

lancamentoFilmes(filme1, filme2)

// 3.)

function controleEstoque(fruta) {
    const disponibilidadeFruta = {
        ...fruta,
        disponibilidade: !fruta.disponibilidade
    }
    
    return disponibilidadeFruta
}


console.log(controleEstoque(fruta1))


