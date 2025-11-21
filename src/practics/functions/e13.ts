// Tipa la función saludar(nombre, mensaje="Hola").

function saludar (nombre: string, mensaje:string = "Hola"): string {
    return `${mensaje} ${nombre}`
}

console.log(saludar("Billie"))