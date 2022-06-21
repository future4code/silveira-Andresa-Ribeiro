import app from "./app";

// HERANÇA

// EXERCICIO 1


class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(id: string, email: string, name: string, password: string) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name 
        this.password = password
}
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }

      // EXERCICIO 4

      public introduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`
     }
  }

const newUser: User = new User(
    "001",
    "andresa@email.com",
    "Andresa",
    "password"
)

console.log({id: newUser.getId(), email: newUser.getEmail(), name: newUser.getName()})

// EXERCICIO 2


class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
}

const newCostumer: Customer = new Customer (
    "002",
    "paulo@email.com",
    "Paulo",
    "password",
    "0123456789101112"
)

console.log({id: newCostumer.getId(), email: newCostumer.getEmail(), name: newCostumer.getName(), creditCard: newCostumer.getCreditCard()})


// EXERCICIO 3


const otherCostumer: Customer = new Customer (
    "003",
    "adriana@email.com",
    "Adriana",
    "password",
    "0123456789131415"
)

console.log({id: otherCostumer.getId(), email: otherCostumer.getEmail(), name: otherCostumer.getName(), purchaseTotal: otherCostumer.purchaseTotal, creditCard: otherCostumer.getCreditCard()})


// EXERCICIO 4


const customer: Customer = new Customer (
    "004",
    "andrei@email.com",
    "Andrei",
    "password",
    "0123456789131415"
)

console.log(customer.introduceYourself())


// POLIMORFISMO

// EXERCICIO 1

export interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number;
}

const newClient: Client = {
    name: "Andresa",
    registrationNumber: 1,
    consumedEnergy: 120,
    calculateBill: () => {
        return 2
    }
}

console.log(newClient)

// EXERCICIO 2


export abstract class Place {
    constructor (protected cep: string) {}

    public getCep(): string {
        return this.cep;
    }
}


// EXERCICIO 3


export class Residence extends Place {
    constructor (
        protected residentsQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) {
        super(cep);
    }
}


export class Commerce extends Place {
    constructor (
        protected floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep);
    }
}


export class Industry extends Place {
    constructor (
        protected machinesQuantity: number,
        // Refere-se à quantidade de máquinas do local 

        cep: string
    ) {
        super(cep);
    }
}

// EXERCICIO 4


export class ResidentialClient extends Residence implements Client {
    constructor (
        private cpf: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep)
    }

    public getCpf(): string {
        return this.cpf;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75;
    }
}

// EXERCICIO 5


export class CommercialClient extends Commerce implements Client {
    constructor (
        private cnpj: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep);
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53;
    }

    public getCnpj(): string {
        return this.cnpj;
    }
}

// EXERCICIO 6


export class IndustrialClient extends Industry implements Client {
    constructor (
        private insdustryRegisterNumber: number,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep);
    }

    public getInsdustryRegisterNumber(): number {
        return this.insdustryRegisterNumber;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
}