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

type createProduct = Omit<Product, 'id' | 'inStock' | 'isCreatedAt' | 'isUpdatedAt'>;
type productUpdate = Partial<createProduct>

const products: Map<string, Product> = new Map();

function createProduct(input: createProduct): Product | undefined {
    const { name, category, price, stock, stockMin } = input;

    const newProduct: Product = {
        id: (products.size + 1).toString(),
        name: name,
        category: category,
        price: price,
        inStock: true,
        stock: stock,
        stockMin: stockMin,
        isCreatedAt: new Date(),
        isUpdatedAt: new Date()
    }

    products.set(newProduct.id, newProduct);

    return newProduct;
};


function findOneById(id: string): Product | undefined {
    const findById = products.get(id);
    return findById;
};

function findAll(): Map<string, Product> {
    return products;
}

function removeProduct (id: string) {

    return products.delete(id);
}

function updateProduct (id: string, input: productUpdate): Product | undefined {
    const { name, category, price, stock, stockMin } = input;

    const product = products.get(id);
    if (!product) return undefined;

    const newProduct: Product = {
        ...product,
        name: (name) ? name : product.name,
        category: (category) ? category : product.category,
        price: (price) ? price : product.price,
        stock: (stock) ? stock : product.stock,
        stockMin: (stockMin) ? stockMin : product.stockMin
    }

    products.set(product.id, newProduct);

    return newProduct;
}

createProduct({ name: 'Computadora',category: 'Electronics',price: 954,stock: 56,stockMin: 8});

createProduct({ name: 'Xbox',category: 'Electronics',price: 866,stock: 73,stockMin: 10});

createProduct({ name: 'T-Shirt White',category: 'Clothing',price: 16,stock: 119,stockMin: 10});

createProduct({ name: `Hoodie Black's Man`, category: 'Clothing', price: 25, stock: 82, stockMin: 5 });

createProduct({ name: `Ballon FIFA 18`, category: 'Sports', price: 62, stock: 100, stockMin: 15 });

// console.log(findOneById('6'));
console.log(findAll())