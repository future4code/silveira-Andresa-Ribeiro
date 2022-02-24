// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

/*1)

RESULTADOS: a. false; b. false; c. false; d. boolean

2) 

Tem sim um problema no código. Vai aparecer os dois numeros concatenados porque ainda são strings.

3) Adicionar o Number nas perguntas pra transformar de string para numero:

let primeiroNumero = Number(prompt("Digite um numero!"));
let segundoNumero = Number(prompt("Digite outro numero!"));

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO:

//1.)

let idadeUsuario = Number(prompt("Qual é a sua idade?"));
let idadeAmigo = Number(prompt("Qual é a idade do seu amigo(a)?"));

comparacao = idadeUsuario > idadeAmigo

diferenca = idadeUsuario - idadeAmigo

console.log("Sua idade é maior do que a do seu melhor amigo?", comparacao)

console.log("A diferença de idade entre vocês é de ", diferenca, "anos.")

//2.)

let par = Number(prompt("Insira um número par!"));

restoDiv = par % 2

console.log("O resto desta divisão é: ", restoDiv)

//c.) O resto da divisão sempre será 0.

//d.) O resto da divisão será 1. 

//3.) 

let idade = Number(prompt("Qual é a sua idade?"));

const meses = 12;
const dias = 365;
const  horas = 24

let idadeMeses = meses * idade;
let idadeDias = dias * idade;
let idadeHoras = horas * dias * idade

console.log("Sua idade em meses é de:",idadeMeses, "meses.");
console.log("Sua idade em dias é de:",idadeDias, "dias.");
console.log("Sua idade em horas é de:",idadeHoras, "horas.");

//4.)

let num1 = Number(prompt("Insira um número:"));
let num2 = Number(prompt("Insira outro número:"));

perg1 = num1 > num2;
perg2 = num1 == num2;
perg3 = num1 % num2 == 0;
perg4 = num2 % num1 == 0;


console.log("O primeiro numero é maior que o segundo?", perg1);
console.log("O primeiro numero é igual ao segundo?", perg2);
console.log("O primeiro numero é divisível pelo segundo?", perg3);
console.log("O segundo numero é divisível pelo primeiro?", perg4);
