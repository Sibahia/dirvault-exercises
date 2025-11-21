// Ejercicio 9 — Interface simple Crea una interfaz Usuario con: id ,nombre ,email ,Crea una variable basada en esta interfaz.

interface Usuario {
    id: string;
    nombre: string;
    email: string;
}


const usuarios: Usuario[] = [
    {
        id: "1",
        nombre: "Alejandro",
        email: "alejandro@example.com"
    },
    {
        id: "2",
        nombre: "María",
        email: "maria@example.com"
    },
    {
        id: "3",
        nombre: "Carlos",
        email: "carlos@example.com"
    }
]

function filtersType ( person: Usuario[] ): Usuario[] {
    const filter: Usuario[] = person.filter( ({ nombre}) => nombre.startsWith('A'));  

    return filter;
}

console.log(filtersType(usuarios))