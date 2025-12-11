type Category = 'samsung' | 'iphone' | 'xiaomi' | 'redmi'

interface Product {
    id: string;
    name: string;
    price: number;
    category: Category;
}

const inventory: Map<string, Product> = new Map();

inventory.set('1', { id: '1', name: 'Samsung Galaxy S25', price: 1800, category: 'samsung' });
inventory.set('2', { id: '2', name: 'iPhone 13', price: 1200, category: 'iphone' });
inventory.set('3', { id: '3', name: 'Xiaomi Mi 11', price: 800, category: 'xiaomi' });
inventory.set('4', { id: '4', name: 'Redmi Note 10', price: 600, category: 'redmi' });
inventory.set('5', { id: '5', name: 'Samsung Galaxy S21', price: 1000, category: 'samsung' });
inventory.set('6', { id: '6', name: 'Samsung Galaxy S23', price: 1460, category: 'samsung' });
inventory.set('7', { id: '7', name: 'iPhone 16', price: 1950, category: 'iphone' });

function applyDiscount(products: Product, discount: number, selectCategory: Category): Map<string, Product> {
    const product = Array.from(inventory.values())
        .filter(({ category }) => category === selectCategory)
        .forEach((prod) => {
            const newProduct: Product = {
                ...prod,
                price: prod.price - (prod.price * discount / 100)
            }

            inventory.set(prod.id, newProduct);
        })

    return inventory;
}

const ejemplo: Product = {
    id: '1',
    name: 'Samsung Galaxy S21',
    price: 1000,
    category: 'samsung'
};

const updatedInventory = applyDiscount(ejemplo, 10, 'samsung');
console.log(updatedInventory)