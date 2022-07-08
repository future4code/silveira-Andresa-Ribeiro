## EXERCICIO 1

a. É uma boa estratégia. É bem melhor do que usar somente números porque a chance de repetição (ou colisão) de alguma string (UUID) é muito pequena.

## EXERCICIO 2

a. Foi feita uma função para criar/inserir um usuário dentro de uma tabela.

b.

CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

## EXERCICIO 3

a. Representa uma chave que será usada como base para gerar o token do usuário. Se usa uma string para que receba uma key nesse formato e possa completar as três entradas para gerar o token.

## EXERCICIO 7

a. 'as Any' deixa que a tipagem seja qualquer tipo de variável, porque podemos receber qualquer tipo de valor para a variável que está retornando.
