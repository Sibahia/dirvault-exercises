interface User {
    id: string;
    name: string;
    email: string;
    isAdmin?: boolean;
}

const formatterUser = (user: User): string => {
    return `Usuario: ${user.name} (ID: ${user.id})`;
}

console.log(formatterUser({
    id: "1",
    name: "Juan Pérez",
    email: "juan@example.com",
    isAdmin: true
}));