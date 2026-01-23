import { AppError, ValidateError } from "../utils/errors";
import { dimensiones_schema } from "../utils/validator";

type Dimensiones = {
    largo: number;
    alto: number;
    cantidad_aberturas: number;
}

function calcular_area_superficie(datosArea: Dimensiones) {
    const datosAreasVerificados = dimensiones_schema.safeParse(datosArea);
    if (!datosAreasVerificados.success) throw new ValidateError(datosAreasVerificados.error.issues);

    const { largo, alto, cantidad_aberturas } = datosAreasVerificados;

    const areaNeta = (largo * alto) - (cantidad_aberturas * 2);

    return areaNeta;
}

export { calcular_area_superficie };
