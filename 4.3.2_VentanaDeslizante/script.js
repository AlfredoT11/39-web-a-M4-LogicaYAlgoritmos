// A partir de un arreglo encontrar la suma máxima de n elementos contiguos.
// No se debe modificar el arreglo original.
let n = 4;
//           0  1  2  3   4  5  6  7  8
        //   0 al 3 = 17            max = 17
        //      1 al 4 = 18         max = 18
        //         2 al 5 = 17      max = 18
        //           3 al 6 = 16    max = 18
        //              4 al 7 = 16    max = 18
        //                  5 al 8 = 24 max = 24
const arr = [1, 4, 2, 10, 2, 3, 1, 0, 0]; // numElementos = 9
// numElementos - n + 1 = 9 - 5 + 1 = 5 <- El número de ventanas
// Si n = 4, entonces son 6 ventanas
// Si n = 5, entonces son 5 ventanas

// n = 1
/*
    0 al 0 = 1
*/
// [1, 4, 2, 10, 2, 3, 1, 0, 20]

// Edge cases (casos frontera)
// 1. Si n es mayor al tamaño del arreglo -> Vamos a regresar -1.
// 2. Si n es cero -> Vamos a regresar -1.
// 3. Si el arreglo no tiene valores -> Regresar -1
// 4. Si n es 1 entonces -> Encontrar el valor máximo.
// 5. Si n es igual a la longitud del arreglo -> Sumaríamos todos los valores.

function calcularSumaMaxima(arreglo, n){

    if(n > arreglo.length || n == 0 || arreglo.length == 0) return -1;

    let suma = 0;
    for(let i = 0; i < n; i++){
        suma += arreglo[i];
    }

    let sumaMaxima = suma;
    for(let i = 0; i < arreglo.length - n + 1; i++){
        let sumaDeVentana = arreglo.slice(i, i + n).reduce((total, valor) => total + valor);
        console.log(`Ventana ${i} ${arreglo.slice(i, i + n)} Suma = ${sumaDeVentana}`);
        if(sumaDeVentana > sumaMaxima) sumaMaxima = sumaDeVentana;
    }

    return sumaMaxima
}

console.log(`La suma máxima es: ${calcularSumaMaxima(arr, n)}`);
console.log(`La suma máxima es: ${calcularSumaMaxima(arr, 100)}`);
console.log(`La suma máxima es: ${calcularSumaMaxima(arr, 0)}`);
console.log(`La suma máxima es: ${calcularSumaMaxima(arr, 1)}`);
console.log(`La suma máxima es: ${calcularSumaMaxima(arr, 9)}`);

/*
Dadas 2 cadenas llamadas 'a' y 'b', regresar el índice de la primera aparición de la cadena 'b' en la cadena 'a'.
Regresar -1 en caso de que la cadena 'b' no se encuentre en 'a'

Ejemplo 1:
            0     6
Input: a = "sadbutsad", b = "sad"
Output: 0
Explicación: La cadena "sad" aparece en los índices 0 y 6.
La primera aparición es en 0, por lo tanto regresamos 0

Ejemplo 2:
Input: a = "leetcode", b = "leeto"
Output: -1
Explicación: La cadena "leeto" no aparece en la cadena "leetcode", así que regresamos -1.
 
Ejemplo 3:
     0   4 6
a = "1245897", b = "897"
         897
Output: 4 