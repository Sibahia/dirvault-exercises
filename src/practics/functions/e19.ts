interface User {
    id: string;
    name: string;
    age: number;
}

function fetchUsuario(id: string): Promise<User> {
    return Promise.resolve<User>( {
        id,
        name: "Alejandro",
        age: 30,
    });
};

fetchUsuario("123").then((usuario) => {
  console.log(usuario.name); 
});