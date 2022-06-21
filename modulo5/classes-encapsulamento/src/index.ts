import app from "./app";

// EXERCÍCIO 1

/* A) Construtores são basicamente funções de criação, atualização ou inicialização de uma classe, as quais são invocadas no momento em que objetos desta classe são criadas.
A principal utilidade de se implementar o construtor do objeto é exigir parâmetros sem os quais o objeto não pode viver sem, sem os quais ele não faz sentido.
Podemos chamá-lo através de uma nova instancia referenciada usando o new e o "nome da classe".

B)

type Transaction = {
  description: string,
  value: number,
  date: string
}

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }
}

const newUser = new UserAccount ("01234567891", "Andresa", 27)

A mensagem foi impressa uma única vez.

C) Conseguimos ter acesso dentro da própria classe usando o "THIS", mas também conseguimos acessá-las através de métodos públicos. Como por exemplo: setters e getters.

*/

// EXERCÍCIO 2

class Transaction {
    private description: string
    private value: number
    private date: string

    constructor(description: string, value: number, date: string) {
        console.log("Chamando o construtor da classe UserAccount")
        this.description = description;
        this.value = value;
        this.date = date;
    }

    public getDescription(): string {
        return this.description
    }

    public getValue(): number {
        return this.value
    }

    public getDate(): string {
        return this.date
    }
}

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(cpf: string, name: string, age: number) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    public getCpf(): string {
        return this.cpf
    }

    public getName(): string {
        return this.name
    }

    public getAge(): number {
        return this.age
    }

    public getBalance(): number {
        return this.balance
    }

    public getTransactions(): Transaction[] {
        return this.transactions
    }

    public setTransactions(newTransaction: Transaction): void {
        this.transactions.push(newTransaction)
    }
}

const newUser = new UserAccount(
    "01234567891",
    "Andresa",
    27
)
const newTransaction = new Transaction(
    "Pagar boleto",
    300,
    "20/06/2022"
)

newUser.setTransactions(newTransaction)
console.log(newUser.getTransactions())


// EXERCÍCIO 3

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }

    public setAccounts(newAccount: UserAccount): void {
        this.accounts.push(newAccount)
    }
    public getAccounts(): UserAccount[] {
        return this.accounts
    }
}