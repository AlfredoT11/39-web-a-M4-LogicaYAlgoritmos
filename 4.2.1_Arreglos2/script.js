let numeros = [2, 4, 6, 8];

let valorInicial = 0;
let suma = numeros.reduce((acumulador, elemento) => {return acumulador + elemento}, valorInicial);
console.log(suma);

let sonPares = numeros.every((elemento) => {return elemento % 2 == 0 });
if(sonPares){
    console.log('El arreglo solamente tiene números pares');
}else{
    console.log('El arreglo tiene al menos un número impar');
}

