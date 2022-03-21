ˋˋˋ
 function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
 let numero = 0
  for (let element of arrayDeNumeros) {
    if (element === numeroEscolhido) {
      numero = numero + 1
    } 
  } 
  if (numero > 0) {
    return `O número ${numeroEscolhido} aparece ${numero}x`
  } else {
    return "Número não encontrado"
  }
}
ˋˋˋ