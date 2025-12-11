const calculateAverage = (score: number[]): number => {
    const total = score.reduce( (sum: number, current: number) => sum + current, 0)
    return total / score.length;
}

const notas = [10, 8, 9, 7];
const promedio = calculateAverage(notas);

console.log(promedio); 

const filterActiveUsers = (users: string[], status: string): string[] => {
    return users.filter( (user: string) => user === status);
}

const users = ["active", "inactive", "active", "pending"];
const activeUsers = filterActiveUsers(users, "inactive");

console.log(activeUsers);