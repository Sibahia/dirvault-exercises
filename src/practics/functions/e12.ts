// Tipa la función crearUsuario(id, nombre, email) para que retorne un objeto con esos valores.

enum Genero {
    Mujer = 'Mujer',
    Hombre = 'Hombre'
}

interface Person {
    id: string;
    nombre: string;
    apellido: string;
    email: string;
    age: number;
    ageDate: Date;
    sexo: Genero;
    status: boolean;
};

const parseGenero : (dato: string) => Genero | null = (dato) => {
        if (dato === "Hombre") return Genero.Hombre;
        if (dato === "Mujer") return Genero.Mujer;
        return null;
    }

function validarUsuario (obj: unknown): obj is Person {
    if (typeof obj !== "object" || obj === null) return false;

    const verify = obj as Record<string, unknown>;
    const fechaValida= typeof verify.ageDate === "string" && !isNaN(new Date(verify.ageDate).getTime() );

    return (
        typeof verify.id === "string" &&
        typeof verify.nombre === "string" &&
        typeof verify.apellido === "string" &&
        typeof verify.email === "string" &&
        typeof verify.age === "number" &&
        typeof verify.status === "boolean" &&
        fechaValida &&
        Object.values(Genero).includes(verify.sexo as Genero)
    )
}

function crearUsuario (Usuario: unknown[]): Person[] {
    if (!Usuario.every(validarUsuario)) throw new Error('Los datos están estructurados incorrectamente o son nulos');

    return Usuario.map(datos => ({
        ...datos,
        ageDate: new Date(datos.ageDate),
        sexo: parseGenero(datos.sexo) ?? Genero.Hombre
    }));
}

console.log(
    crearUsuario(
        [
            {
                id: 'UUID19995345641W',
                nombre: 'Alejandro',
                apellido: 'Chirinos',
                email: 'correo@gmail.com',
                age: 20,
                ageDate: "2025-11-17",
                sexo: "Mujer",
                status: true
            }
        ]
    )
)