SET SQL_SAFE_UPDATES = 0;

-- EXERCICIO 1

ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

-- A) Iria remover a coluna salary.alter

-- B) Iria alterar o nome da coluna "gender" para "sex".

-- C) Iria manter o nome da coluna, pois o nome declarado pra mudança é o mesmo que já está na tabela.alter

-- D) 

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- EXERCICIO 2
-- A)

UPDATE Actor
SET name = "Alice Braga",
birth_date = "1983/04/15"
WHERE id = "003";

-- B)

UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

-- C)

UPDATE Actor
SET name = "Adriana Esteves",
salary = 500000,
birth_date = "1969/12/15"
WHERE id = "005";

-- D)

UPDATE Actor
SET name = "Taís Araújo"
WHERE id = "010";

-- Encontrou um problema pois o id está fora do intervalo, ou seja, está maior que a quantidade de ids definidos na tabela.

-- EXERCICIO 3
-- A)

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

-- B)

DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

-- EXERCICIO 4
-- A)

SELECT MAX(salary) FROM Actor;

-- B)

SELECT MIN(salary) FROM Actor WHERE gender = "female";

-- C)

SELECT COUNT(*) FROM Actor WHERE gender = "female";

-- D)

SELECT SUM(salary) FROM Actor;

-- EXERCICIO 5
-- A)

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

-- A query retornou uma tabela com duas colunas: COUNT(quantidade) e gender. E depois fez a contagem de quantidade de atores de cada gênero listado na tabela.alter

-- B)

SELECT id, name FROM Actor ORDER BY name DESC;

-- C)

SELECT * FROM Actor ORDER BY salary ASC;

-- D)

SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

-- E)

SELECT gender, AVG(salary)
FROM Actor
GROUP BY gender;

-- EXERCICIO 6
-- A)

ALTER TABLE Filmes
ADD playing_limit_date DATE;

-- B)

ALTER TABLE Filmes
CHANGE avaliacao avaliacao float;

-- C)

UPDATE Filmes
SET playing_limit_date = "2020-12-31"
WHERE id = "001";

UPDATE Filmes
SET playing_limit_date = "2022-06-10"
WHERE id = "002";

-- D)

DELETE FROM Filmes WHERE id = "003";

UPDATE Filmes
SET sinopse = "exemplo de texto"
WHERE id = "003";

-- No meu exemplo ele não retornou mensagem de erro, mas não atualizou a sinopse do id passado, porque ele não existe mais.