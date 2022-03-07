/*EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:

1.A)

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

RESPOSTA: 10, 50.

B) Não iria imprimir o resultado, porque pra imprimir precisa do console.log.

2.A) A função irá pegar o texto do usuário e irá transformar tudo em letras minúsculas e também irá verificar se existe a palavra "cenoura" no texto.Se existir a palavra "cenoura"  ela irá retornar true ou false se não tiver.

B)

i. true
ii. true
iii. true
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO:

//1.A)

console.log("Eu sou Andresa, tenho 27 anos, moro em Cosmópolis e sou estudante.") 

//B)

const nome = prompt("Qual é o seu nome?");
const idade = Number(prompt("Qual é o sua idade?"));
const cidade = prompt("Em qual cidade você mora?");
const profissao = prompt("Qual é a sua profissão?");

console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`);

// 2.A)

function somar(num1, num2) {
    let soma = num1 + num2
    console.log(soma)
    return soma
}

somar(8, 2);

//B)

function maiorIgual(num1, num2) {
    let maior = num1 >= num2
    console.log(maior)
    return maior
}

maiorIgual(4, 9);

//C)

function numPar (num) {
    let par = (num % 2)
    let resto = par === 0
    console.log(resto)
    return resto
}

numPar(268);

//D)

function frase(frase1) {
    console.log(frase1.toUpperCase(), frase1.length)
    return frase
}

frase("estou aprendendo muito");

//3)

function operacoes(num1, num2) {
    let soma = num1 + num2
    let subtracao = num1 - num2
    let multi = num1 * num2
    let divisao = num1 / num2

    console.log("Números inseridos:", num1,"e", num2);
    console.log("Soma:", soma);
    console.log("Diferença:", subtracao);
    console.log("Multiplicação:", multi);
    console.log("Divisão:", divisao)

    return soma, subtracao, multi, divisao
}

const num1 = Number(prompt("Digite um número"));
const num2 = Number(prompt("Digite mais um número"));

operacoes(num1, num2);
