// Crea un tipo llamado Category con los valores: "tech", "food", "clothes"

type Category = "tech" | "food" | "clothes";

type Producto = {
    id: number;
    nombre: string;
    precio: number;
    categoria: Category;
    stock: number;
}

type Tech = Producto & {
    categoria: "tech";
    especificaciones: {
        procesador: string;
        ram: string;
        almacenamiento: string;
    }
}

type Clothes = Producto & {
    categoria: "clothes";
    tallasDisponibles: string[];
    colores: string[];
}

type Food = Producto & {
    categoria: "food";
    ingredientes: string[];
}

type Productos = Tech | Clothes | Food;

const productos: Productos[] = [
  {
    id: 1,
    nombre: "Laptop Gamer",
    precio: 1200,
    stock: 15,
    categoria: "tech",
    especificaciones: {
      procesador: "Intel i7",
      ram: "16GB",
      almacenamiento: "512GB SSD"
    }
  },
  {
    id: 2,
    nombre: "Pizza Napolitana",
    precio: 8.5,
    stock: 50,
    categoria: "food",
    ingredientes: ["tomate", "queso mozzarella", "albahaca"]
  },
  {
    id: 3,
    nombre: "Chaqueta de cuero",
    precio: 180,
    stock: 5,
    categoria: "clothes",
    tallasDisponibles: ["S", "M", "L", "XL"],
    colores: ["negro", "marrón"]
  }
];
