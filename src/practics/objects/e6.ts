// Declara un objeto empleado que contenga: id, nombre, dirección (objeto con ciudad y país), activo

type Address = {
  city: string;
  country: string;
}

type Employe = {
  id: string;
  name: string;
  status: boolean;
  address: Address;
}

const Person : Employe = {
  id: "UUIE996",
  name: "Alejandro",
  address: {
    city: "La Vela",
    country: "Venezuela"
  },
  status: true
}

console.log(Person)