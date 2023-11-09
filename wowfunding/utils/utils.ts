export const calcularDiasFaltantes = (fechaLimiteStr: string): number => {
    const partes = fechaLimiteStr.split('/');

    if (partes.length !== 3) {
        throw new Error('El formato de fecha debe ser día/mes/año');
    }

    // Convertir las partes a números
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1; // Restamos 1 al mes ya que en JavaScript los meses van de 0 a 11
    const año = parseInt(partes[2], 10);

    // Convierte la fecha límite a un objeto de fecha
    const fechaLimite = new Date(año, mes, dia);

    // Obtiene la fecha actual
    const fechaActual = new Date();

    // Calcula la diferencia en milisegundos
    const milisegundosPorDia = 1000 * 60 * 60 * 24; // Milisegundos en un día
    const diferenciaEnMilisegundos = fechaLimite.getTime() - fechaActual.getTime();

    // Calcula los días faltantes y redondea hacia arriba
    const diasFaltantes = Math.ceil(diferenciaEnMilisegundos / milisegundosPorDia);

    return diasFaltantes;}

    export const truncateString = (str: string) => {
        if (str.length > 90) {
            return str.slice(0, 90) + "..."; // Add an ellipsis at the end3
        } else {
            return str;
        }
    }
