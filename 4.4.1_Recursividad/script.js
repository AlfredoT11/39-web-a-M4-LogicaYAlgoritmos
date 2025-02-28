// Esta es una función recursiva sin condición de paro.
function recursividad(){
    console.log('Soy una función recursiva');

    recursividad();
}

//recursividad();

/*
Las funciones recursivas sin condición de paro son muy parecidas a los bucles infinitos

while(true){
    console.log('Bucle infinito');
}
*/

// Es muy importante que cuando trabajemos con recursividad definamos un límite, ese límite se conoce como condición de paro.

// Pila (stack) es una estructura de datos tipo LIFO (Last in - First out -> El último en entrar es el primero en salir)
/*
        www.youtube.com/LinkinPark/video6 <- El elemento ya no cabe en la pila, entonces se dice que la pila se desbordó (Stack overflow)
    8 www.youtube.com/LinkinPark/video5
    7 www.youtube.com/LinkinPark/video4
    6 www.youtube.com/LinkinPark/video3
    5 www.youtube.com/LinkinPark/video2
    4 www.youtube.com/LinkinPark/video1
    3 www.youtube.com/LinkinPark/CutTheBridge
    2 www.youtube.com/LinkinPark
    1 www.youtube.com
    0 www.google.com
*/

function a(){
    console.log(`Soy la función A`);
}


function b(){
    a();
    console.log(`Soy la función B`);
}


function c(){
    b();
    console.log(`Soy la función C`);
}

c();

/*
    Se ejecuta la función c();

    |       |
    |       |
    |       |
    |  c()  |
    ---------

    Dentro de c() se manda a llamar a b()

    |       |
    |       |
    |  b()  |
    |  c()  |
    ---------

    Dentro de b() se manda a llamar a a()

    |       |
    |  a()  |
    |  b()  |
    |  c()  |
    ---------

    Como a() ya no tiene otra llamada de función, se saca de la pila

    |       |
    |       |
    |  b()  |
    |  c()  |
    ---------

    Y asi sucesivamente.

    ¿Qué pasa con la recursividad?

       recursividad()      <- Aquí la pila ya se desbordó. Ocurre un desbordamiento
    |  recursividad()  |
    |  recursividad()  |
    |  recursividad()  |
    |  recursividad()  |
    |  recursividad()  |
    |  recursividad()  |
    |  recursividad()  |
    |  recursividad()  |
    --------------------
*/

// A continuación se muestra una función recursiva con condición de paro.
function imprimirMensaje(contador, maximoNumeroDeEjecuciones){
    
    if(contador < maximoNumeroDeEjecuciones){ // Condición de paro
        console.log(`${contador+1} ¡Hola mundo recursivo!`);
        contador++;
        imprimirMensaje(contador, maximoNumeroDeEjecuciones);
    }
}

let contador = 0;
let ejecuciones = 15;
imprimirMensaje(contador, ejecuciones);

/* Función factorial -> x! = x * (x - 1) * (x - 2) * (x - 3) * (x - 4) * ... * 1
                        5! = 5 * 4 * 3 * 2 * 1
                           = 5 * 4!
                           =     4 * 3!
                           =         3 * 2!
                           =             2 * 1!
                           =                 1
*/

function factorial(numero) {
    if(numero > 1) { // Condición de paro
        return numero * factorial(numero - 1);
    } else {
        return 1;
    }
}

console.log(factorial(5));

// Backtracking -> Es una técnica de programación y recursividad donde seguimos una serie de pasos para encontrar un resultado, y 
//                  cuando encontramos el resultado, regresamos aquellos pasos que nos llevaron a la solución.

/*
    Reglas del laberito:
        1. Solamente podemos avanzar hacia arriba, abajo, izquierda y derecha. NUNCA en diagonal.
        2. Solamente podemos avanzar de 1 en 1.
        3. No tienen ciclos.
        4. Los valores 1 son paredes.
        5. Los valores 0 son caminos abiertos.
        6. El 2 es la entrada.
        7. El 3 es la salida.
*/
const laberinto = [
    //   0  1  2  3  4  5    
        [1, 1, 1, 1, 1, 1], // 0
        [2, 0, 0, 1, 0, 3], // 1
        [1, 1, 0, 1, 0, 1], // 2
        [1, 1, 0, 0, 0, 1], // 3
        [1, 1, 0, 1, 0, 1], // 4
        [1, 1, 0, 1, 0, 1], // 5
        [1, 1, 1, 1, 1, 1]  // 6
    ];

function avanzar(fila, columna, laberinto){
    console.log(`[${fila} ${columna}]`);

    if(
        fila < 0 || fila >= laberinto.length || // Verificar que no nos salimos de las filas.
        columna < 0 || columna >= laberinto[0].length || // Verificar que no nos salimos de las columnas.
        laberinto[fila][columna] == 1 || // Topar con pared.
        laberinto[fila][columna] == 4    // Verificamos que no sea camino ya recorrido.
    ){
        console.log('Ya no puedo avanzar...');
        return false;
    }

    if(laberinto[fila][columna] == 3){
        console.log(`¡Encontré la salida!`);
        return true;
    }

    laberinto[fila][columna] = 4; // Marcando el camino como recorrido.

    if(avanzar(fila, columna + 1, laberinto)){ // Avanzando a la derecha.
        console.log('Regresando de la derecha');
        return true;
    } 
    if(avanzar(fila + 1, columna, laberinto)){ // Avanzando hacia abajo.
        console.log('Regresando de abajo');
        return true;
    }; 
    if(avanzar(fila, columna - 1, laberinto)){ // Avanzando a la izquierda.
        console.log('Regresando de la izquierda');
        return true;
    }; 
    if(avanzar(fila - 1, columna, laberinto)){ // Avanzando hacia arriba.
        console.log('Regresando de arriba');
        return true;
    }; 

    laberinto[fila][columna] = 0; // Desmarcando el camino

    console.log(`Aquí ya no hay más camino que recorrer`);
    return false;
}

avanzar(1, 0, laberinto);
console.log(laberinto);
