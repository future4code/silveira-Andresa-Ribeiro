const contas = (operacao, num1, num2) => {
    switch(operacao.toLowerCase()) {
        case "add":
            console.log("Resposta:", num1 + num2)
            break;
        case "subt":
            console.log("Resposta:", num1 - num2)
            break;
        case "mult":
            console.log("Resposta:", num1 * num2)
            break;
        case "div":
            console.log("Resposta:", num1 / num2)
            break;
        default:
            console.log("Erro na operação! Insira o tipo de operação: soma, dub, mult ou div.")
    }
}

const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

if (operacao && num1 && num2) {
    contas(operacao, num1, num2)
} else (
    console.log("É preciso passar os 3 parâmetros para realizar a operação!")
)