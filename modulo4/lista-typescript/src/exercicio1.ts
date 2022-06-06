function saudacao(nome: string, data: string) {

    const separarData = data.split('/')

    return `Olá me chamo ${nome}, nasci no dia ${separarData[0]} do mês de ${separarData[1]} do ano de ${separarData[2]}`
}

console.log(saudacao("Andresa", "12/09/1994"))
