let usuario = []
let computador = []

if(confirm("Bem-vindo(a) ao jogo de Blackjack!" + "\n" + "Quer iniciar uma nova rodada?")){

   let cartasOk = false
   while (!cartasOk){
      usuario.push(comprarCarta())
      usuario.push(comprarCarta())
      computador.push(comprarCarta())
      computador.push(comprarCarta())
      if ((usuario[0].valor === 11 && usuario[1].valor === 11) ||
         (computador[0].valor === 11 && computador[1].valor === 11)) {
            usuario = []
            computador = []
      } else {
         cartasOk = true
      }
   }

   let comprando = true

   while(comprando){
      let textos = ""
      let pontos = 0
      for (let carta of usuario){
         textos += carta.texto + " "
         pontos += carta.valor
      }

      if (pontos > 21){
         comprando = false
      } else {
         let confirmCompra = confirm(
            `Suas cartas são ${textos}. A carta revelada do computador é ${computador[0].texto}.` +
            "\n"+ 
            "Deseja comprar mais uma carta?"
         )
      
         if (confirmCompra){
            usuario.push(comprarCarta())
         } else {
            comprando = false
         }
      }
   }

   let pontuacaoDoPc = 0
   let pontuacaoDoUsuario = 0
   let textosDoPc = ""
   let textosDoUsuario = ""

   for (let carta of computador){
      pontuacaoDoPc += carta.valor
      textosDoPc += carta.texto + " "
   }
   for (let carta of usuario){
      pontuacaoDoUsuario += carta.valor
      textosDoUsuario += carta.texto + " "
   }

   if (pontuacaoDoUsuario <= 21){
      while (pontuacaoDoPc < pontuacaoDoUsuario && pontuacaoDoPc <= 21){
         computador.push(comprarCarta())
         pontuacaoDoPc = 0
         textosDoPc = ""
         for (let carta of computador){
            pontuacaoDoPc += carta.valor
            textosDoPc += carta.texto + " "
         }
      }
   }
  
   let resultado = ""

   if (pontuacaoDoUsuario > pontuacaoDoPc && pontuacaoDoUsuario <= 21){
      console.log("O usuário ganhou!")
   } else if (pontuacaoDoPc > pontuacaoDoUsuario && pontuacaoDoPc <= 21){
      console.log("O computador ganhou!")
   } else if (pontuacaoDoPc > 21 && pontuacaoDoUsuario <= 21){
      console.log("O usuário ganhou!")
   } else if (pontuacaoDoUsuario > 21 && pontuacaoDoPc <= 21){
      console.log("O computador ganhou!")
   } else {
      console.log("Empate!")
   }

   alert(`Suas cartas são: ${textosDoUsuario} \n Sua pontuação é de: ${pontuacaoDoUsuario} + \n ---------------------------- \n As cartas do computador são: ${textosDoPc} \n A pontuação dele é de: ${pontuacaoDoPc} \n ---------------------------- \n`, ` ${resultado}`
   )
   
} else {
   alert("O jogo acabou!")
}


/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

