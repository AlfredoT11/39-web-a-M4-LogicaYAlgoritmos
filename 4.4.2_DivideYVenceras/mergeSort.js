// MergeSort -> Se trata de un algoritmo de ordenamiento con complejidad O(n*log(n))


/* 
    Esta función se encarga de ordenar los elementos del arreglo A y el arreglo B
    dentro del arreglo C.
    Los arreglos A y B deben estar previamente ordenados.
    El arreglo C debe estar vacío.
*/
function merge(A, B, C){

    let punteroA = 0;
    let punteroB = 0;

    while(punteroA != A.length && punteroB != B.length){
        /*
            En caso de que el valor del primer arreglo sea igual o menor, este es el
            que se agrega al arreglo resultante y el puntero aumenta en uno.
        */
        if(A[punteroA] <= B[punteroB]){
            C.push(A[punteroA]);
            punteroA++;
        
        /*
            En caso contrario se agrega el valor del segundo arreglo y el puntero aumenta 
            en uno.
        */
        }else{
            C.push(B[punteroB]);
            punteroB++;
        }
    }

    /*
        En caso de que el punteroA sea igual al tamaño del arreglo A significa que
        todo el arregloA ya se agregó al arregloC, por lo tanto, únicamente resta
        copiar el resto de elementos del arregloB.
    */
    if(punteroA == A.length){
        while(punteroB < B.length){
            C.push(B[punteroB]);
            punteroB++;
        }
    }

    /*
        En caso de que el punteroB sea igual al tamaño del arregloB significa que
        todo el arregloB ya se agregó al arregloC, por lo tanto, únicamente resta
        copiar el resto de elementos del arregloA.
    */
    if(punteroB == B.length){
        while(punteroA < A.length){
            C.push(A[punteroA]);
            punteroA++;
        }
    }
}

function mergeSort(arreglo){

    // Descomentar la siguiente línea para ver cómo se van haciendo las particiones.
    // console.log(arreglo);

    let arregloOrdenado = [];

    // Mientras el tamaño del arreglo sea mayor a 2 podemos seguir partiendo en 2.
    if(arreglo.length > 2){
        let indiceMitadFinal = Math.floor((arreglo.length / 2)) + 1;
        let arregloA = mergeSort(arreglo.slice(0, indiceMitadFinal));
        let arregloB = mergeSort(arreglo.slice(indiceMitadFinal, arreglo.length));

        // Después de hacer las particiones, cada llamada a mergeSort regresa un arreglo ordenado,
        // por lo tanto estos 2 arreglos ordenados los podemos utilizar dentro del método merge()
        merge(arregloA, arregloB, arregloOrdenado);
    }else if(arreglo.length == 2){
        /* En caso de que el arreglo sea igual a 2 entonces acomodamos esos 2 valores sin
            utilizar nuestro método merge */
        if(arreglo[0] <= arreglo[1]){
            arregloOrdenado.push(arreglo[0]);
            arregloOrdenado.push(arreglo[1]);
        }else{
            arregloOrdenado.push(arreglo[1]);
            arregloOrdenado.push(arreglo[0]);
        }
    }else{
        arregloOrdenado.push(arreglo[0]);
    }

    return arregloOrdenado;
}

let arregloA = [1, 3, 4, 5, 6, 9, 13];
let arregloB = [0, 2, 3, 7, 10, 11];
let arregloC = [];

merge(arregloA, arregloB, arregloC);
console.log(arregloC);

let arregloAleatorio = [];
for(let i = 0; i < 100; i++){
    arregloAleatorio.push(Math.floor(Math.random() * 1000));
}

console.log(`Arreglo desordenado: ${arregloAleatorio}`);

let arregloOrdenado = mergeSort(arregloAleatorio);

console.log();
console.log(`Arreglo ordenado: ${arregloOrdenado}`);
