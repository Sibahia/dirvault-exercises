// Declara una tupla para: una coordenada [x, y] | un usuario [nombre, edad, activo]

type Coord = [number, number];
const coords : Coord = [10, 20]

type Person = [
    name: string, 
    age: number,
    status: boolean
];

const usuario : Person = [ "Jose", 21,true ];