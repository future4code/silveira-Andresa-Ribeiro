SET SQL_SAFE_UPDATES = 0;

# EXERCICIO 1

-- A) É uma chave estrangeira usada para referenciar uma PRIMARY KEY em outra tabela.

-- B)
CREATE TABLE avaliacoes (
		id VARCHAR(255) PRIMARY KEY,
    comentary TEXT NOT NULL,
		avaliacao FLOAT NOT NULL,
    filme_id VARCHAR(255),
    FOREIGN KEY (filme_id) REFERENCES Filmes(id)
);

INSERT INTO avaliacoes (id, comentary, avaliacao, filme_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"001"
);

INSERT INTO avaliacoes (id, comentary, avaliacao, filme_id) 
VALUES (
		"002",
    "Maravilhoso!",
    8,
		"002"
);

INSERT INTO avaliacoes (id, comentary, avaliacao, filme_id) 
VALUES (
		"004",
    "Melhor filme brasileiro!",
    10,
		"004"
);

SELECT * FROM avaliacoes;

-- C) 

INSERT INTO avaliacoes (id, comentary, avaliacao, filme_id) 
VALUES (
		"011",
    "Muito bom!",
    7,
		"011"
);

-- Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filho: falha na restrição de chave estrangeira. 
-- Não posso adicionar propriedades em uma id que não existe na PRIMARY KEY.

-- D)

ALTER TABLE Filmes DROP COLUMN avaliacao;

-- E)

# EXERCICIO 2

CREATE TABLE MovieCast (
		filme_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (filme_id) REFERENCES Filmes(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

-- A) Nessa relação vários elementos de uma tabela se relacionam com outros elementos de outras tabelas. Deve-se usar mais de uma chave estrangeira.

-- B) 

INSERT INTO MovieCast VALUES
("001", "001"),
("001", "002"),
("002", "003"),
("002", "004"),
("004", "005"),
("004", "006");

-- C)

INSERT INTO MovieCast VALUES
("003", "003");

-- Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filho: uma restrição de chave estrangeira falha.
-- Mesmo erro do exercicio anterior. O MySQL não permite adicionar dados em uma id inexistente ou vice-versa.

-- D)

DELETE FROM Actor WHERE name = "Tony Ramos";

-- Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha.
-- Como o ator do ID foi referenciado em uma tabela, para deletá-lo, eu teria que apagar todas as referências dele nas tabelas.

# EXERCICIO 3

-- A) Essa query junta duas tabelas, é uma condição em que uma passa informações adicionais para outra.alter

-- B) 

SELECT nome, Filmes.id, avaliacao FROM Filmes
INNER JOIN avaliacoes ON Filmes.id = avaliacoes.filme_id;








