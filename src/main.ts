// fn return total precio de los arts con stock mayor a 0 y cuyo precio sea superior a 100

interface Product {
    nombre: string;
    precio: number;
    stock: number;
}

let productos = [
    { nombre: "Teclado", precio: 80, stock: 15 },
    { nombre: "Mouse", precio: 120, stock: 0 },
    { nombre: "Monitor", precio: 280, stock: 13 },
    { nombre: "Laptop", precio: 960, stock: 26 },
    { nombre: "Mousepad", precio: 30, stock: 42 },
]

function totalPrecio ( productos: Product[] ): number {
    const filter = productos
    .filter( (producto): boolean => producto.stock  > 0 && producto.precio > 100)
    .reduce( (acc, curr): number => acc + curr.precio, 0)
 
    return filter;
};

console.log( totalPrecio(productos) )