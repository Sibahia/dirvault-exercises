import { z } from 'zod';

const dimensiones_schema = z.object({
    largo: z.number().positive(),
    alto: z.number().positive(),
    cantidad_aberturas: z.number().positive()
})

export { dimensiones_schema };
