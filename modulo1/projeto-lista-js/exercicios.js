// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {

  let altura = prompt("Digite a altura de um retângulo:");
  let largura = prompt("Digite a largura de um retângulo:");

  let area = altura * largura

  console.log(area);

}

// EXERCÍCIO 02
function imprimeIdade() {

  let anoAtual = prompt("Em que ano você está?");
  let anoNasc = prompt("Em que ano você nasceu:");

  let idadeUsuario = anoAtual - anoNasc

  console.log(idadeUsuario);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

  const imc = peso / (altura * altura)

  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {

  let nome = prompt("Digite o seu nome:");
  let idade = Number(prompt("Digite o sua idade:"));
  let email = prompt("Digite o seu email:");
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  
  let cor1 = prompt("Digite sua cor favorita:");
  let cor2 = prompt("Digite outra cor favorita:");
  let cor3 = prompt("Digite mais uma cor favorita:");

  let listaCores = [cor1, cor2, cor3];

  console.log(listaCores);

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  
  maiuscula = string.toUpperCase()

  return maiuscula;

}

retornaStringEmMaiuscula("estou indo bem");

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  
  total = custo;
  ingresso = valorIngresso;

  semPrejuizo = custo / valorIngresso;

  return semPrejuizo;

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
  palavra1 = string1;
  palavra2 = string2;

  tamanho = string1.length === string2.length

  return tamanho

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  
  return array[0]
  
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  
  return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  
  let listaNum = array[0]
  array[0] = array[array.length-1]
  array[array.length-1] = listaNum

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {

  let tamanho = string1.toLowerCase() === string2.toLowerCase()

  return tamanho

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  
  let esteAno = prompt("Em que ano você está:");
  let nasc = prompt("Digite sua data de nascimento:");
  let carteira = prompt("Em que ano sua carteira de identidade foi omitida:");
  let idade = esteAno - nasc
  let diferenca = esteAno - carteira

  const condicao1 = (idade <= 20 && diferenca >= 5);
  const condicao2 = ((idade > 20 && idade <=50) && diferenca >= 10);
  const condicao3 = (idade > 50 && diferenca >= 15) 

  console.log(condicao1 || condicao2 || condicao3)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  
  const condicao1 = ((ano % 4 === 0) && (ano % 100 === 0) && (ano % 400 === 0))
  const condicao2 = ((ano % 4 === 0) && (ano % 100 !== 0))

  return (condicao1 || condicao2)

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  
  let maiorIdade = prompt("Você tem mais de 18 anos?");
  let ensinomed = prompt("Você possui ensino médio completo?");
  let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?");

  const condicao = maiorIdade === "sim"
  const condicao2 = ensinomed === "sim"
  const condicao3 = disponibilidade === "sim"

  console.log(condicao && condicao2 && condicao3)

}