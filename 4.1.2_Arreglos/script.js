const libros = ['El fin de la eternidad', 'Un mundo feliz', 'El Arte de la guerra', 'El Psicoanalista', '1984'];

const copiaLibros = libros; // Estamos creando una referencia, por lo tanto, cualquier modificación a cualquiera de las 2 variables, va a afectar a la otra.

console.log(libros);
console.log(copiaLibros);

libros.push('Los juego del hambre');

console.log('Después de comprar un libro nuevo');
console.log(libros);
console.log(copiaLibros);

copiaLibros.push('Inmune');
console.log('Después de comprar un segundo libro nuevo');
console.log(libros);
console.log(copiaLibros);

const copiasRealesLibros = [...libros]; // Spread operator -> Esto crea una copia completamente nueva desligada del arreglo original.
copiasRealesLibros.push('Yo Robot');
console.log('Después de comprar un tercer libro nuevo');
console.log(libros);
console.log(copiaLibros);
console.log(copiasRealesLibros);

const persona = {
    nombre: 'Juan',
    edad: 36,
    colorOjos: 'Verdes'
}

const profesor = {
    ...persona,
    materia: 'Matemáticas',
    salon: 3001
}

console.log(profesor);

function sumar(a, b, c){
    return a + b + c;
}
//               0  1  2  3  4   5
const numeros = [3, 5, 4, 5, 9, 18];

console.log(sumar(...numeros));
numeros[0] // => 1
numeros[1] // => 2
console.log(numeros[numeros.length - 1]);

for(let i = 0; i < numeros.length; i++){
    console.log(`${i}: ${numeros[i]}`);
}

let pares = [2, 4, 6, 8, 10];

numeros.splice(3, 0, ...pares);
console.log(numeros);

let nombres = ['jaiR', 'jUaN', 'abrAhaM', 'eduardo', 'MANUEL'];
console.log(nombres);

// Quiero convertir los nombres a un formato CamelCase.
// El método map() aplica una función de conversión a cada elemento de un arreglo y regresa un nuevo arreglo.
let nombresModificados = nombres.map((nombre) => { return `${nombre.charAt(0).toUpperCase()}${nombre.slice(1).toLocaleLowerCase()}` });
//console.log(nombres.map((nombre) => { return `${nombre.charAt(0).toUpperCase()}${nombre.slice(1).toLocaleLowerCase()}` }));


console.log(nombresModificados);

// El método filter() aplica una función de búsqueda a un arreglo y genera un nuevo arreglo.
console.log('Nombres con 7 o más caracteres');
console.log(nombresModificados.filter((nombre) => { return nombre.length >= 7 })); 

console.log('Nombres con 7 o más caracteres y que empiecen con la letra A');
console.log(nombresModificados.filter((nombre) => { return nombre.length >= 7 && nombre.charAt(0) == 'A'})); 


console.log('Todos los nombres que terminen con la letra n, m o l y que tengan más de 4 caracteres');
console.log(nombresModificados.filter((nombre) => { return (nombre.charAt(nombre.length-1) == 'n' || nombre.charAt(nombre.length-1) == 'm' || nombre.charAt(nombre.length-1) == 'l' && nombre.length > 4) })); 
console.log(nombresModificados.filter(nombre => nombre.length > 4 && /[nml]$/i.test(nombre))); 

// 1. Calificaciones aprobatorias:
//Crea un arreglo llamado calificaciones con las siguientes calificaciones: [60, 85, 92, 48, 75, 50, 98].
//Usa el método filter() para crear un nuevo arreglo llamado aprobados que contenga solo las calificaciones mayores o iguales a 70.

