# EXERCICIO 1

-- A) Quando usamos o raw, ele nos devolve o resultado da query e outras informações do banco, do jeito que o mySQL devolve, e para conseguirmos acessar as informações que realmente nos interessa é atraves da primeira posição do array de resposta.

> **B)**
~~~Typescript
const getActorByName = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `)
      return result[0]
  }
~~~

> **C)**
~~~Typescript
const CountActors = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
    `)
    const count = result[0][0].count
      return count
  }
~~~

# EXERCICIO 2

> **A)**
~~~Typescript
const updateActor = async (salary: number, id: string): Promise<any> => {
    await connection("Actor")
    .update({
		salary: salary
	})
    .where("id", id)
  }
~~~

> **B)**
~~~Typescript
const deleteActor = async (id: string): Promise<any> => {
    await connection("Actor")
    .delete()
    .where("id", id)
  }
~~~

> **C)**
~~~Typescript
const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender })

  return result[0].average
}
~~~

# EXERCICIO 3
> **A)**

~~~Typescript
app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const actor = await getActorById(id)

    res.status(200).send(actor)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    })
  }
})
~~~

> **B)**

~~~Typescript
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await countActors(req.query.gender)
    res.status(200).send({
		quantity: count,
        })
  } catch (err) {
    res.status(400).send({
      message: err.message,
    })
  }
})
~~~

# EXERCICIO 4
> **A)**

~~~Typescript
app.put("/actor", async (req: Request, res: Response) => {
  try {
	await updateSalary(req.body.id, req.body.salary)
    res.status(200).send({message: "Atualizado com sucesso"})
    })
  } catch (err) {
    res.status(400).send({
      message: err.message,
    })
  }
})
~~~

> **B)**

~~~Typescript
app.delete("/actor", async (req: Request, res: Response) => {
  try {
	await deleteActor(req.params.id)
    res.status(200).send({message: "Deletado com sucesso"})
    })
  } catch (err) {
    res.status(400).send({
      message: err.message,
    })
  }
})
~~~









































































