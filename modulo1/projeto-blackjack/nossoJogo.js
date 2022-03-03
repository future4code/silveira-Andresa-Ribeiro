alert ("Bem vindo(a) ao jogo de Blackjack!")

let jogo = confirm("Quer iniciar uma nova rodada?");

if (confirm("Quer iniciar uma nova rodada?")) {
   let cartaUsuario1 = comprarCarta()
   let cartaUsuario2 = comprarCarta()
   let cartaPc1 = comprarCarta()
   let cartaPc2 = comprarCarta()

   let pontuacaoDoUsuario = cartaUsuario1.valor + cartaUsuario2.valor
   let pontuacaoDoPc = cartaPc1.valor + cartaPc2.valor

   console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação = ${pontuacaoDoUsuario}`)
   console.log(`Computador - cartas: ${cartaPc1.texto} ${cartaPc2.texto} - pontuação = ${pontuacaoDoPc}`)

   if (pontuacaoDoUsuario > pontuacaoDoPc && pontuacaoDoUsuario <= 21) {
      alert("O usuário ganhou!")
      console.log("O usuário ganhou!") 
   } else if (pontuacaoDoPc > pontuacaoDoUsuario && pontuacaoDoPc <= 21) {
      alert("O computador ganhou!")
      console.log("O computador ganhou!")
   } else if (pontuacaoDoPc > 21 && pontuacaoDoUsuario <= 21){
      console.log("O usuário ganhou!")
   } else if (pontuacaoDoUsuario > 21 && pontuacaoDoPc <= 21){
      console.log("O computador ganhou!")
   } else {
      alert("Empate!")
      console.log("Empate!")
   }

} else {
   console.log("O jogo acabou!")
}
