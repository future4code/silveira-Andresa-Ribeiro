## EXERCÍCIO 1

a. Salt é uma string aleatória na senha com 22 caracteres, Round é o valor correspondente ao tempo de execução para gerar um salt, quanto menor esse número mais rápido sua resposta. O valor recomendável é de 12, porque é um tempo hábil para se ter a resposta da função, sem qu eo usuário tenha que esperar muito.

## EXERCÍCIO 2

a. Precisa realizar primeiro o cadastro, pois a partir da criptografia da senha do usuário no banco de dados, conseguimos usar a função de comparar a senha que o usuário digitou com a senha criptografada no banco, usando a lib bcryptjs.

d. Não, pois esse endpoint não depende da criptografia da senha, apenas depende do token gerado ao usuário logar-se.