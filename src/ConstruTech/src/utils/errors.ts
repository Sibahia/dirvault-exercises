export class AppError extends Error {
    public readonly status: string;

    constructor (message: string, status: string = 'ERROR') {
        super(message);
        this.status = status;
    }
}

export class ValidateError extends Error {
    public readonly details : string;

    constructor (message : string, details: []) {
        super(message);
        this.details = details.map( error => ({
            path: [] = error.path,
            details: string = error.message
        }))
    }
}
import { z } from 'zod';

const dimensiones_schema = z.object({
    largo: z.number().positive(),
    alto: z.number().positive(),
    cantidad_aberturas: z.number().positive()
})

export { dimensiones_schema };
