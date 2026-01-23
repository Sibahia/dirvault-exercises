enum Servicios {
    Pintura = 'pintura',
    Piso = 'piso'
}

type Materiales = {
    metraje_neto: number;
    tipo_servicio: Servicios;
}

function estimar_recursos(recursos: Materiales) {
    const { metraje_neto, tipo_servicio } = recursos;

    if (tipo_servicio == 'pintura') {
        const unidades = (metraje_neto / 8)
    }
}
