type Category = 'Electronics' | 'Clothing' | 'Books' | 'Home' | 'Sports';

interface Product {
    id: string;
    name: string;
    category: Category;
    price: number;
    inStock: boolean;
    stock: number;
    stockMin: number;
    isCreatedAt: Date;
    isUpdatedAt: Date;
};

type ProductInput = Omit<Product, 'id' | 'isCreatedAt' | 'isUpdatedAt' | 'inStock'>;

const products : Product[] = [];

function createdProduct (input: ProductInput): Product {
    const { name, category, price, stock, stockMin } = input;

    const newProduct: Product = {
        id: (products.length + 1).toString(),
        name: name,
        category: category,
        price: price,
        inStock: true,
        stock: stock,
        stockMin: stockMin,
        isCreatedAt: new Date(),
        isUpdatedAt: new Date()
    }

    products.push(newProduct)

    return newProduct;
}

createdProduct({
    name: 'Computadora',
    category: 'Electronics',
    price: 954,
    stock: 56,
    stockMin: 5
})

createdProduct({
    name: 'Xbox',
    category: 'Electronics',
    price: 866,
    stock: 56,
    stockMin: 5
})

createdProduct({
    name: 'T-Shirt White',
    category: 'Clothing',
    price: 16,
    stock: 56,
    stockMin: 5
})

createdProduct({
    name: `Hoodie Black's Man`,
    category: 'Clothing',
    price: 25,
    stock: 56,
    stockMin: 5
})

function findOneProduct (id: string): Product | undefined {
    const findProductById: Product | undefined = products.find(product => product.id === id);

    return findProductById;
};

function findAllProduct (): Product[] {

    return products;
};

function removeProduct (id: string): Product | undefined {
    const findById: number = products.findIndex( product => product.id === id);

    return products.splice(1, findById)[0];
};

function updateProduct (id: string, input: ProductInput): Product | undefined {
    const { name, category, price, stock, stockMin } = input
    const product = findOneProduct(id);
    if (!product) return undefined;

    const newProduct : Product = {
        ...product,
        name: (name)?name:product.name,
        category: (category)?category:product.category,
        price: (price)?price:product.price,
        stock: (stock)?stock:product.stock,
        stockMin: (stockMin)?stock:product.stockMin
    }

    const findIndex = products.findIndex(product => product.id === id);
    if (findIndex === -1) return undefined;

    products[findIndex] = newProduct;

    return newProduct;
}

// console.log(findOneProduct('2'))
// console.log(removeProduct('2'))