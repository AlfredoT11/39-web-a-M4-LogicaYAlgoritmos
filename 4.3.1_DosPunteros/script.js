//let numeros = [5, 2, 4, 7, 9, 18, 97, 42];
// Crear una función para ordenar los números de menor a mayor.

// Complejidad computacional
// Parámetros matemáticos o formales
//                            Eficacia
// Espacio (cantidad de datos)        Tiempo (número de operaciones)
// Estos 2 parámetros generalmente tienen una relación inversamente proporcional.
// A menor tiempo más espacio.
// A menos espacio más tiempo.

// Notación O mayúscula
// Esta notación nos permite representar el número de operaciones a realizar en el peor de los casos de un algoritmo.
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]    n = 15
//                                             14           <- 14 operaciones  <- Búsqueda lineal
//                                                     16   <- 15 operaciones  <- El peor de los casos
//  1                                                       <- 1 operación     <- El mejor de los casos

// [1, 2, 3, .... , 98, 99, 100] <- 100 elementos           <- El peor de los casos son 100 operaciones    n = 100
// [1, 2, 3, .... ,1000000]      <- 1000000 elementos       <- El peor de los casos son 1000000 operaciones  n = 1000000

// n es el número de elementos que tiene el arreglo
// O(n)
// O(n - 1) = O(n)
// O(5n) = O(n)
// O(4n + 3n - 2) = O(n)
// O(5n^3 + 4n^2 + 1) = O(n^3)

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
//  9  9  9  9  9  9  9     9   9   9   9   9   9   9 <- Búsqueda lineal <- O(n)

// Búsqueda binaria
// Número a buscar -> 14
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
//                      14
/*

                        [9, 10, 11, 12, 13, 14, 15]
                                    14

                                    [13, 14, 15]
                                         14

                                    El valor 14 sí se encuentra en el arreglo

Valor a buscar = 5
[1, 2, 3, 4, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
                      5

[1, 2, 3, 4, 4, 6, 7]
          5

            [4, 6, 7]
                5

            [4]
             5
             El valor 5 no se encuentra en el arreglo.

O(log2(n))

*/

// Valor a buscar 9




// Parámetros técnicos
// Más fácil de entender
// Menos poder de procesamiento
// Una instrucción más rápida
// Solución precisa en el resultado *


// Dado un arreglo de números ordenados de menor a mayor y un valor objetivo,
// Decidir si hay un par de números dentro del arreglo que al sumarse den como resultado el valor objetivo.
/*
    [2, 3, 4, 9, 18, 20]
    valorObjetivo = 21
    Sí hay un par que de esa suma (3, 18)

    [2, 3, 4, 9, 18, 20]
    valorObjetivo = 40
    No hay un par que me de esa suma

        y
        x        
    [2, 3, 4, 9, 18, 20]
    valorObjetivo = 5
    No hay un par que me de esa suma

              a   b
    [0, 3, 4, 9, 18, 20]
    valorObjetivo = 27
    a + b = 9 + 18 = 27
    No hay un par que me de esa suma

              a           b
    [0, 3, 4, 9, 10, 18, 20]
    valorObjetivo = 30
    a + b = 9 + 20 = 29
    No hay un par que me de esa suma

    [5]

              ab
    [0, 1, 2, 10, 20, 98, 99, 100]
    valorObjetivo = 30
    a + b = 10 + 20 = 30
    O(n)

*/

// Ejemplo de técnica de 2 punteros
let valores = [1, 2, 4, 5, 7, 9, 15, 20];
function obtenerParMaximo(arreglo, valorBuscado){
    let punteroIzq = 0;
    let punteroDer = arreglo.length;

    while(punteroIzq < punteroDer){
        if(arreglo[punteroIzq] + arreglo[punteroDer] == valorBuscado){
            return [punteroIzq, punteroDer];
        }

        if(arreglo[punteroIzq] + arreglo[punteroDer] < valorBuscado){
            punteroIzq++;
        } else {
            punteroDer--;
        }
    }
    return [-1, -1];
}

console.log(obtenerParMaximo(valores, 9));
console.log(obtenerParMaximo(valores, 500));
console.log(obtenerParMaximo(valores, 3));
console.log(obtenerParMaximo(valores, 35));
console.log(obtenerParMaximo(valores, 12));

