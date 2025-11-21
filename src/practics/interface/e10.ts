interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

interface Admin extends Usuario {
    permisos: string[];
}

const usuarios : (Usuario | Admin)[] = [
  {
    id: 1,
    nombre: "Alejandro",
    email: "alejandro@example.com",
    permisos: ["crear", "editar", "eliminar"] // Admin
  },
  {
    id: 2,
    nombre: "María",
    email: "maria@example.com" // Usuario normal
  },
  {
    id: 3,
    nombre: "Carlos",
    email: "carlos@example.com",
    permisos: ["editar"] // Admin con permisos limitados
  },
  {
    id: 4,
    nombre: "Lucía",
    email: "lucia@example.com" // Usuario normal
  }
];

console.log(usuarios);