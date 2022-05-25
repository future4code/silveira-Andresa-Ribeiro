/* 
a) Através da propriedade process.argv, onde podemos passar um valor como entrada pelo terminal e é acessada pelo código pela propriedade process.argv.
*/

// b) 
const nome = process.argv[2]
const idade = Number(process.argv[3])

if (nome && idade) {
    console.log(`Olá, ${nome}! Você tem ${idade} anos.`)
} else {
    console.log("Erro! Estão faltando dados, verifique novamente.")
}


// c)

if (nome && idade) {
  console.log(`Olá, ${nome}! Você tem ${idade} anos. Daqui sete anos você terá ${idade + 7} anos.`);
} else {
    console.log("Erro! Estão faltando parâmetros. Verifique seus dados novamente.");
}