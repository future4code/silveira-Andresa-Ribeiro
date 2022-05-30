const listaDeTarefas = ["Lavar a louça", "Fazer Compras", "Varrer a varanda"]

const tarefa = process.argv[2]

process.argv[2] && listaDeTarefas.push(tarefa)
tarefa && console.log("Tarefa adicionada com sucesso!")

console.log("Tarefas á fazer:", listaDeTarefas)