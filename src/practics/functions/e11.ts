// Tipa la función sumar(a, b) para que solo acepte números y retorne un número.


function sumar (a: number, b: number) {
    if (isNaN(a) && isNaN(b) ) {
        throw new Error('No es un valor numérico')
    }

    return a + b;
}

console.log(sumar(4, 3));
console.log(sumar(4, 0));