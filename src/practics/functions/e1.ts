function wrapInResponse<T>(data: T): { data: T; timestamp: Date; isSuccess: boolean } {
    return {
        data,
        timestamp: new Date(),
        isSuccess: true
    };
}

const stringResponse = wrapInResponse("Hola Mundo");
const numberResponse = wrapInResponse(100);


interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    createdAt: Date;
}

type ProductOmit = Omit<Product, 'id' | 'createdAt'>

const createProduct = (newProduct: ProductOmit): Product => {
    return {
        id: Date.now(),
        createdAt: new Date(),
        ...newProduct
    };
};

type productPartial = Partial<Product>

const updateProduct = (id: number, changes: productPartial): void => {
    console.log(`Actualizando producto ${id}`, changes)
};


interface Book {
    id: number;
    title: string;
    author: string;
    isAvailable: boolean;
};

let library: Book[] = [];

type BookOmit = Omit<Book, 'id' | 'isAvailable'>

function addBook(bookData: BookOmit): Book {
    const newBook = {
        id: library.length + 1,
        ...bookData,
        isAvailable: true
    }

    library.push(newBook);
    return newBook;
};

function getAvailableBooks(): Book[] {
    return library.filter( (book: Book) => book.isAvailable);
};

function updateBook(id: number, updates: Partial<Book>): Book | null {
    const index = library.findIndex( (b: Book) => b.id === id);

    if (index !== -1) {
        library[index] = { ...library[index], ...updates } as Book;
        return library[index];
    };

    return null;
}


function deleteBook(id: number): boolean {
    const initialLength = library.length;
    library = library.filter( (b: Book) => b.id !== id);

    return library.length < initialLength;
}

const book1 = addBook({ title: "El Principito", author: "Antoine de Saint-Exupéry" });
updateBook(book1.id, { isAvailable: false });
console.log(getAvailableBooks());