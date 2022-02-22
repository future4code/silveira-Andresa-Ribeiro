/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:

1) let a = 10
let b = 10

console.log(b) (RESULTADO: 10)

b = 5
console.log(a, b) (RESULTADO: 10, 5);

2) let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) (RESULTADO: C = 10, B = 10, A = 20);

3) let horasTrabalho = prompt("Quantas horas você trabalha por dia?")
let salarioDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`) */

// EXERCÍCIOS DE ESCRITA DE CÓDIGO:

/*1. a)*/
var nome = undefined;

/*1.b)*/
let idade = undefined;

/*1.c)*/
console.log(typeof nome);
console.log(typeof idade);

/*3.d - Porque o valor do nome e da idade não foram definidos */


/*1.e)*/
const nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é o seu idade?");

console.log(nome);
console.log(idade);

/* 1.f)
Os valores que o usuário atribuiu apareceu, mas a idade ficou como string.*/

/* 1.g)*/
console.log("Olá", nome,"você tem", idade, "anos.")

/* 2)*/

const roupa = prompt("Você está usando uma roupa azul hoje?");
const pizza = prompt("Você comeu pizza hoje?");
const tattoo = prompt("Você tem tatuagens?");

console.log("Você está usando uma roupa azul hoje? - ", roupa);
console.log("Você comeu pizza hoje? - ", pizza);
console.log("Você tem tatuagens? - ", tattoo);

/*3.)*/

let a = 10
let b = 25

c = a;
a = b;
b = c;

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)