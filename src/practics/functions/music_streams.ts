interface Music {
    id: number;
    name: string;
    time: Date;
    visualization: number;
    artist: string[];
    createdAt: Date;
}

interface Artist {
    id: string;
    name: string;
    alias: string[];
    albums?: string[];
    musics?: Music;
}

interface User {
    id: string;
    username: string;
    soundPlays?: Artist;
    age: number;
}

const listStreams: Map<number, User> = new Map(); 

type formatterUser = Omit<User, 'id'>

function createUser (user: formatterUser): User | undefined {
    const id: number = listStreams.size + 1;
    const newUser: User = {
        id: (listStreams.size + 1).toString(),
        ...user
    }

    listStreams.set(id, newUser)

    return newUser;
}

createUser({
    username: "itzlegui",
    soundPlays: {
        id: "UUU447157130951ASD48WXZ-SCTPXC",
        name: "bad bunny",
        alias: ["bad bunny", "bad bo", "badbo", "bunny", "el conejo malo", "benito"],
        albums: ["YHLQMDLG", "X100PRE", "El último tour del mundo"],
        musics: {
            id: 12,
            name: "Soy Peor",
            time: new Date(),
            visualization: 8532216,
            artist: ["Bad Bunny"],
            createdAt: new Date()
        }
    },
    age: 0
})

createUser({
    username: "itzleggz",
    soundPlays: {
        id: "UUU447157130951ASD48WXZ-SCTPXC",
        name: "bad bunny",
        alias: ["bad bunny", "bad bo", "badbo", "bunny", "el conejo malo", "benito"],
        albums: ["YHLQMDLG", "X100PRE", "El último tour del mundo"],
        musics: {
            id: 12,
            name: "Soy Peor",
            time: new Date(),
            visualization: 8532216,
            artist: ["Bad Bunny"],
            createdAt: new Date()
        }
    },
    age: 0
})

function getUsers (): Map<number, User> {
    return listStreams;
}

function filtersName (name: string): User | undefined {
    return Array.from(listStreams.values()).find(user => user.username === name)
}

// console.log(getUsers())
console.log(filtersName('itzlegui'))