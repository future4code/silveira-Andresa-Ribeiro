/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:

1)

RESULTADO: a. Undefined; b. null; c. 11; d. 3; e.3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13; f. 9;

2)

RESULTADO: SUBI NUM ÔNIBUS EM MIRROCOS 27;

*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO:

//1)

const nomeDoUsuario = prompt("Qual é o seu nome?")
const emailDoUsuario = prompt("Qual é o seu email?")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`);

//2)

const comidasFav = ['pizza', 'lanche', 'macarrão com queijo', 'chocolate', 'bolo'];

console.log(comidasFav);

console.log("Essas são minhas comidas preferidas:"); console.log(comidasFav[0]);
console.log(comidasFav[1]);
console.log(comidasFav[2]);
console.log(comidasFav[3]); 
console.log(comidasFav[4]);

const comidaUsuario = prompt("Qual é a sua comida preferida?");

const novaLista = comidasFav[1] = comidaUsuario

console.log(comidasFav); 

//3) 

var listaDeTarefas = [];

const tarefa1 = prompt("Escreva 1 tarefa que você precisa realizar hoje:");

const tarefa2 = prompt("Escreva outra tarefa que você precisa realizar hoje:");

const tarefa3 = prompt("Escreva mais uma tarefa que você precisa realizar hoje:");

listaDeTarefas.push(tarefa1, tarefa2, tarefa3);

console.log(listaDeTarefas);

const indice = prompt("Digite o índice de uma tarefa que você já realizou: 0, 1 ou 2:");

const tarefaRemove = listaDeTarefas.splice(1,indice);

console.log(listaDeTarefas);