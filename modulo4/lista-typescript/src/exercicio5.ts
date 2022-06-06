type user = {
    name: string,
    email: string,
    role: string,
}

const usuarios: user[] = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
]

function filtrarAdmin(usuarios: user[]) {
    return usuarios.filter((user) => {
        return user.role === "admin";
    }).map((usuarios) => {
        return usuarios.email
    })
}

console.log(filtrarAdmin(usuarios))