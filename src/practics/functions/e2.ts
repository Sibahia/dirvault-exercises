interface Entity {
    id: number;
    createdAt: Date;
}

type listStatus = 'open' | 'in_progress' | 'closed'

interface Ticket extends Entity {
    title: string;
    status: listStatus;
    description?: string;
}

interface User extends Entity {
    name: string;
    email: string;
}

class Repository<T extends Entity> {
    private items: T[] = [];

    add (item: T): void {
        this.items.push(item);
    }

    getById (id: number): T | undefined {
        const item: T | undefined = this.items.find(list => list.id === id);
        return item;
    }

    update (id: number, item: T): T | undefined {
        const index = this.items.findIndex(list => list.id === id);
        if (index === -1) return undefined;

        this.items[index] = item;
        return item;
    }

    list (): T[] {
        return this.items;
    }
}

const ticketRepo = new Repository<Ticket>();
ticketRepo.add({ id: 1, title: "Error en login", status: "open", createdAt: new Date() });

const userRepo = new Repository<User>();
userRepo.add({ id: 1, name: "Alejandro", email: "alejandro@example.com", createdAt: new Date() });

console.log(ticketRepo.getById(1)); // Ticket
console.log(userRepo.list());       // Lista de usuarios
