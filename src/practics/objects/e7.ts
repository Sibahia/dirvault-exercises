type Contacto = {
    email: string;
    telefono?: string;
    redes: {
        twitter?: string;
        github?: string;
        linkedin?: string;
        instagram?: string;
    }
}

type Proyecto = {
    nombre: string;
    fechaInicio: Date | string;
    tecnologias: string[];
    activo: boolean;
}

type Direccion = {
    calle: string;
    ciudad: string;
    estado: string;
    pais: string;
    coordenadas?: number[];
}

type Rol = "admin" | "editor" | "viewer";

type Person = {
    id: number,
    nombre: string;
    edad: number | null;
    activo: boolean | null;
    direccion: Direccion;
    contacto: Contacto;
    roles: Rol[];
    proyectos: Proyecto[]
}


const usuarios : Person[] = [
  {
    id: 1,
    nombre: "Alejandro",
    edad: 30,
    activo: true,
    direccion: {
      calle: "Av. Principal",
      ciudad: "La Vela",
      estado: "Falcón",
      pais: "Venezuela",
      coordenadas: [11.383, -69.681]
    },
    contacto: {
      email: "alejandro@example.com",
      telefono: "0412-1111111",
      redes: {
        twitter: "@alejandro_dev",
        github: "alejandroGH"
      }
    },
    roles: ["admin", "editor"],
    proyectos: [
      {
        nombre: "Sistema de Competencias Digitales",
        fechaInicio: "2025-01-15",
        tecnologias: ["TypeScript", "Astro", "Tailwind"],
        activo: true
      }
    ]
  },
  {
    id: 2,
    nombre: "Daniel",
    edad: null,
    activo: false,
    direccion: {
      calle: "Calle 10",
      ciudad: "Caracas",
      estado: "Distrito Capital",
      pais: "Venezuela"
    },
    contacto: {
      email: "daniel@example.com",
      redes: {
        linkedin: "daniel-linkedin"
      }
    },
    roles: ["viewer"],
    proyectos: [
      {
        nombre: "Plataforma de Aprendizaje",
        fechaInicio: "2024-09-01",
        tecnologias: ["React", "Node.js", "MongoDB"],
        activo: false
      },
      {
        nombre: "API de Gestión",
        fechaInicio: "2025-03-10",
        tecnologias: ["NestJS", "PostgreSQL"],
        activo: true
      }
    ]
  },
  {
    id: 3,
    nombre: "María",
    edad: 25,
    activo: true,
    direccion: {
      calle: "Calle Bolívar",
      ciudad: "Valencia",
      estado: "Carabobo",
      pais: "Venezuela",
      coordenadas: [10.162, -68.007]
    },
    contacto: {
      email: "maria@example.com",
      telefono: "0414-2222222",
      redes: {
        instagram: "@maria_design",
        github: "mariaGH"
      }
    },
    roles: ["editor"],
    proyectos: [
      {
        nombre: "Portal de Noticias",
        fechaInicio: "2025-02-01",
        tecnologias: ["Vue", "Firebase"],
        activo: true
      }
    ]
  }
];


console.log( usuarios )