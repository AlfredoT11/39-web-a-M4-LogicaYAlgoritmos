// Búsqueda binaria -> Los números deben estar ordenados para poder utilizar este algoritmo.
// Encontrar un valor dentro de un arreglo.
// Número a buscar = 4
/*  0           4  5  6           9            n = 10
// [1, 2, 3, 4, 5, 7, 9, 11, 20, 22];          (inicio+final)/2 = (0 + 9)/2 = 4.5 = 5
//                                             Para nuestro caso vamos a redondear hacia arriba.
        4 < 7
     0     2     4      n = 5
    [1, 2, 3, 4, 5]     (inicio + final)/2 = (0 + 4)/2 = 2

        4 > 3
            0  1    <- Si creamos un nuevo arreglo, estos serían los índices.
            3  4    <- Si seguimos trabajando con el arreglo original, estos serían los índices.
           [4, 5]

                    Nuevo arreglo: (inicio + final)/2 = (0 + 1)/2 = 0.5 = 1
                    Mismo arreglo: (inicio + final)/2 = (3 + 4)/2 = 3.5 = 4

            4 < 5
             0
             3
            [4]

            4 == 4      <- El valor que estamos buscando sí existe.
            4.5 != 4    <- Las condiciones para afirmar que el valor no existe en el arreglo son:
                            1. El tamaño del arreglo. Si el tamaño es uno, ya no voy a poder partir más el arreglo.
                            2. Si el único valor del arreglo no es el que estoy buscando, entonces el valor no está en el arreglo.

            // for, while
            // En caso de que termine el ciclo, podemos afirmar que el valor buscado no existe.
*/

/*
    valorBuscado es el número que estamos buscando.
    arreglo es la estructura donde vamos a buscar.
    inicio es el indice donde comienza el subarreglo.
    final es el indice donde termina el subarreglo.
*/
function busquedaBinaria(valorBuscado, arreglo, inicio, final){

    // Math.floor() redondea hacia abajo.
    let posicionMitad = Math.ceil((inicio + final) / 2); // Math.ceil() nos permite redondear hacia arriba.

    if(inicio == final && arreglo[posicionMitad] != valorBuscado){
        return -1;
    }

    if(arreglo[posicionMitad] == valorBuscado){
        // Encontré el valor que estoy buscando.
        return posicionMitad;
    }

    if(valorBuscado < arreglo[posicionMitad]){
        // Nos movemos a la izquierda.
        return busquedaBinaria(valorBuscado, arreglo, inicio, posicionMitad - 1);
    }else{
        // Nos movemos a la derecha.
        return busquedaBinaria(valorBuscado, arreglo, posicionMitad + 1, final);
    }

}

function evaluarBusqueda(arreglo, valorABuscar){
    let posicionValorBuscado = busquedaBinaria(valorABuscar, arreglo, 0, arreglo.length - 1);
    if(posicionValorBuscado != -1){
        console.log(`El valor ${valorABuscar} está en la posición ${posicionValorBuscado}`);
    }else{
        console.log(`El valor ${valorABuscar} NO está en el arreglo`);
    }
}

                //   0  1  2  3  4  5  6           9
let arregloPrueba = [1, 2, 3, 4, 5, 7, 9, 11, 20, 22];

evaluarBusqueda(arregloPrueba, 4);
evaluarBusqueda(arregloPrueba, 1);
evaluarBusqueda(arregloPrueba, 22);
evaluarBusqueda(arregloPrueba, 23);
evaluarBusqueda(arregloPrueba, -1);
evaluarBusqueda(arregloPrueba, 9);


