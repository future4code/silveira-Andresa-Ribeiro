type perguntas = {
    dataDeNascimento: number,
    dataCarteira: number
}

function buscaIdade( dataDeNascimento: number, dataCarteira: number): boolean {
    const datas: number {
        const dataAtual: any = datas = new Date().getTime();
        const diferenca = dataAtual - dataDeNascimento;
        const renovacao = dataCarteira - dataAtual;

        if (diferenca <= 20 && renovacao === 5) {
            return true
        }

        if (diferenca <= 50 && renovacao === 10) {
            return true
        }

        if (diferenca > 50 && renovacao === 15) {
            return true
        }
        
    }
}