enum TaskStatus {
    Pending = 'PENDING',
    In_progress = 'IN_PROGRESS',
    Completed = 'COMPLETED'
};

interface Task {
    id: number;
    title: string;
    status: TaskStatus;
}

const tasks : Task[] = [
    { id: 1, title: "Aprender TS", status: TaskStatus.Pending },
    { id: 2, title: "Hacer ejercicios", status: TaskStatus.In_progress }
];

const updateTaskStatus = (id: number, newStatus: TaskStatus): Task | undefined => {
    const task = tasks.find(t => t.id === id);

    if (task) {
        task.status === newStatus;
        return task;
    }

    return undefined;
}

console.log(updateTaskStatus(1, TaskStatus.Completed));
console.log(updateTaskStatus(99, TaskStatus.Pending));