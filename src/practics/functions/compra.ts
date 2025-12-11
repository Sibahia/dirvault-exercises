// Carrito de compras crea: type CartItem, interface Cart, función addToCart(item), función para calcular total

import { get } from "http";

type CartItem = {
    id: string;
    product: string;
    quantity: number;
    price: number;
}

interface Cart {
    name: string;
    totalPrice?: number;
    products: CartItem[];
}

const listCarts: Map<string, Cart> = new Map()

function addToCart(item: Cart): Cart | undefined {

    const { name, products } = item;
    const total = item.totalPrice ?? products.reduce( (accumulator, { quantity, price } ) => accumulator + quantity * price, 0);
    const id= (listCarts.size + 1).toString();

    const newItem: Cart = {
        name,
        totalPrice: total,
        products
    }

    listCarts.set(id, newItem);

    return newItem;
}

function getCarts(): Map<string, Cart> {
    return listCarts;
}

addToCart({
    name: "Carrito de Juan",
    products: [
        { id: "p1", product: "Laptop", quantity: 1, price: 1200 },
        { id: "p2", product: "Mouse", quantity: 2, price: 25 },
        { id: "p3", product: "Teclado", quantity: 1, price: 45 }
    ]
})

console.log(getCarts());