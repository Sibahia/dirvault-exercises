// Tipa la función imprimirId(id) que acepte string | number y use typeof para distinguirlos.

type isId = string | number;

function imprimirId(id: isId) {
    if  (typeof id === "string") {
        return (`ID: ${id}, type: String`)
    } else {
        return (`ID: ${id}, type: Number`)
    }
}

console.log(imprimirId(7))