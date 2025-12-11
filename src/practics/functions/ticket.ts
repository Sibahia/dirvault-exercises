type optionStatus = 'open' | 'in_progress' | 'closed';

interface Ticket {
    id: number;
    title: string;
    description?: string | undefined;
    status: optionStatus;
    createdAt: Date;
}

const tickets: Ticket[] = [];

function isStatus (status: string): status is optionStatus {
    return ['open', 'in_progress', 'closed'].includes(status);
}

function createTicket (title: string, description?: string): Ticket {
    const newTicket: Ticket = {
        id: tickets.length + 1,
        title,
        description,
        status: 'open',
        createdAt: new Date(),
    };

    tickets.push(newTicket);
    return newTicket;
}

function validateTicket (ticket: Ticket): { valid: boolean, errors: string[] } {
    const { title, status } = ticket;
    const errors: string[] = [];

    if (title.trim().length === 0) {
        errors.push('El título no puede estar vacío')
    };
    if (!isStatus(status)) {
        errors.push('Estado inválido')
    }

    return { valid: errors.length === 0, errors }
}

function updateStatus (ticket: Ticket, newStatus: optionStatus) {
    return { ...ticket, status: newStatus }
}

function listTicketsByStatus (option: optionStatus): Ticket[] {
    return tickets.filter( ({ status }) => status === option);
}

const ticket1 = createTicket("a", "El usuario no puede acceder");
// console.log(validateTicket(ticket1)); 

const ticket2 = updateStatus(ticket1, "in_progress");
console.log(ticket2.status); // "in_progress"