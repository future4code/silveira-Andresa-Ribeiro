// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   array.sort((a, b) => a - b);
   return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
   let lista = []
   for (let numero of array) {
      if (numero % 2 === 0) {
         lista.push(numero)
      }
   }
   return lista
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   let lista = []
   for (let numero of array) {
      if (numero % 2 === 0) {
         numero = numero ** 2
         lista.push(numero)
      }
   }
   return lista
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
   var maior = array[0];
    
    for (let i = 1; i < array.length; ++i){

        if (array[i] > maior){ 
            maior = array[i];
        }
    }
    return maior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

   let propriedades = {}
   if (num1 > num2) {
       maiorNumero = num1
       menorNumero = num2
   } else if (num2 > num1) {
       maiorNumero = num2
       menorNumero = num1
   } else {
       maiorNumero = num1
       menorNumero = num1
   }

   let maiorDivisivelPorMenor
   if (maiorNumero % menorNumero === 0) {
      maiorDivisivelPorMenor = true
   }else {
      maiorDivisivelPorMenor = false
   }

   let diferenca = (maiorNumero - menorNumero)

   return propriedades = {'maiorNumero':maiorNumero,
   'maiorDivisivelPorMenor':maiorDivisivelPorMenor,
   'diferenca':diferenca}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

   if (ladoA === ladoB && ladoA === ladoC) {
      return "Equilátero"
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
      return "Isósceles"
  } else {
      return "Escaleno"
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}