# EXERCÍCIO 3

C) Usando a inversão de dependências, conseguimos fazer o teste unitário em funções que implementam outras funções.


# EXERCÍCIO 4

A) Temos criar um mock da função validateCharacter, pois iremos fazer teste unitário da função performAttack e como a mesma possui em seu escopo o uso da função validateCharacter, se torna necessário mockar esse conteúdo.