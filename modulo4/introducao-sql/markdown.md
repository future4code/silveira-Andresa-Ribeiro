USE `silveira-21814356-andresa-ribeiro`;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

-- EXERCÍCIO 1

-- A) O VARCHAR siginifa que aceita strings.
-- O PRIMARY KEY é o identificador único de um registro na tabela.
-- FLOAT são para receber numeros não inteiros.
-- NOT NULL significa que não recebe dados nulos.
-- O Date representa uma data.

-- B) O SHOW DATABASES mostra as informações do banco de dados. E o SHOW TABLES mostra todas as tabelas existentes.

-- C) O DESCRIBE Actor mostra os tipos de cada dados que estão inseridos na tabela.

SHOW DATABASES;

SHOW TABLES;

DESCRIBE Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

-- EXERCICIO 2
-- A)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  120000000,
  "1963-08-23", 
  "female"
);

-- B) Gerou um erro porque eu coloquei um mesmo id duas vezes. E como é uma primary key não se pode repetir uma id.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Adriana Esteves",
  150000000,
  "1969-12-15", 
  "female"
);

-- C)

INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

-- O erro ocorreu porque tem mais quantidades de colunas do que a quantidade de valores passados.

-- INSERT INTO Actor (id, name, salary, birth_date, gender)
-- VALUES(
-- "003", 
-- "Fernanda Montenegro",
-- 300000,
-- "1929-10-19", 
-- "female"
-- );

-- D)

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

-- O motivo do erro foi a falta do valor 'name', sendo que de acordo com a tabela é um valor que não pode ser nulo.

-- INSERT INTO Actor (id, name, salary, birth_date, gender)
-- VALUES(
-- "004",
-- "Antônio Fagundes",
-- 400000,
-- "1949-04-18", 
-- "male"
-- );

-- E)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

-- O erro está no formato data que está incorreto, deveria estar entre aspas.

-- INSERT INTO Actor (id, name, salary, birth_date, gender)
-- VALUES(
-- "005", 
-- "Juliana Paes",
-- 719333.33,
-- "1979-03-26", 
-- "female"
-- );

-- F)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Maria Fernanda Cândido",
  2719333.33,
  "1974-05-21", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Rodrigo Santoro",
  10719333.33,
  "1975-08-22", 
  "male"
);

-- EXERCICIO 3

SELECT * FROM Actor;

SELECT id, salary from Actor;

SELECT id, name from Actor WHERE gender = "male";

-- A)

SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "female";

-- B)

SELECT salary from Actor WHERE name = "Tony Ramos";

-- C)

SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "invalid";

-- Não retornou nada porque não existe um genero "invalid" na tabela.alter

-- D)

SELECT id, name, salary from Actor WHERE salary <= 500000;

-- E)

SELECT id, nome from Actor WHERE id = "002";

-- O erro foi porque não existe uma coluna chamada 'nome', mas sim 'name'.

SELECT id, name from Actor WHERE id = "002";

-- EXERCICIO 4

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

-- A) Essa query vai buscar em toda a tabela atores que tem o nome que começa com a letra a OU j E que tenham o salário maior que 300000.alter

-- B)  

SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

-- C)

SELECT * FROM Actor
WHERE (name LIKE "G%" OR name Like "%G%" OR name Like "%G");

-- D)

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "G%") AND salary >= 350000 AND salary <= 900000;

-- EXERCICIO 5

CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    lancamento DATE NOT NULL,
    avaliacao INT(10) NOT NULL
);

-- A) É uma query usada para armazenamento de textos. Ela possui as variações TINY, MEDIUM e LONG. O tamanho máximo de caracteres são 65.535.

-- B) 

INSERT INTO Filmes (id, nome, sinopse, lancamento, avaliacao)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-06-01", 
  7
);

-- C)

INSERT INTO Filmes (id, nome, sinopse, lancamento, avaliacao)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);

-- D)

INSERT INTO Filmes (id, nome, sinopse, lancamento, avaliacao)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);

-- E)

INSERT INTO Filmes (id, nome, sinopse, lancamento, avaliacao)
VALUES(
  "004", 
  "O Auto da Compadecida",
  "As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
  "2000-09-10", 
  10
);

-- EXERCICIO 6

-- A)
SELECT id, nome, avaliacao from Filmes WHERE id = "002";

-- B)
SELECT id, nome, sinopse, lancamento, avaliacao from Filmes WHERE nome = "Doce de Mãe";

-- C)
SELECT id, nome, sinopse from Filmes WHERE avaliacao >= 7;

-- EXERCICIO 7
-- A)

SELECT * FROM Filmes WHERE nome LIKE "%vida%";

-- B)

SELECT * from Filmes WHERE nome LIKE "%maridos%" OR sinopse LIKE "%maridos%";

-- C)

SELECT * from Filmes WHERE lancamento <= "2022/06/06";

-- D)

SELECT * from Filmes 
WHERE (lancamento <= "2022/06/06" AND nome LIKE "%de%" OR sinopse LIKE "%de%" AND avaliacao > 7);













