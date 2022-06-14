export type Account = {
    name: string,
    cpf: string | number,
    dateOfBirth: Date,
    balance: number,
    statement: Array<Transaction>
}

export type Transaction = {
    value: number,
    date: Date,
    description: string
}

