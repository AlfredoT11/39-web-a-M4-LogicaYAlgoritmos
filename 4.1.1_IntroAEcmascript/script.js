// Repaso de var, let y const

console.log(edad); // Las variables var automáticamente se declaran hasta arriba del código.
// console.log(letEdad); // Las variables let NO se mueven hasta arriba del código.

let letEdad = 26;

var edad; // Declarando una variable.
edad = 25; // Asignado una variable.

var edad = 26; // Declarando y asignado una variable. Es posible redeclarar una variable con var

function miFuncion(){
    // Alcance de función
    var var1 = 2;
    let let1 = 2;

    if(true){
        // Alcance de bloque
        var var2 = 3;
        let let2 = 3;
    }

    console.log("Adentro de la función.");
    console.log("var1 = " + var1);
    console.log("var2 = " + var2);
    console.log("let1 = " + let1);
    // console.log("let2 = " + let2);

    edad = 30;

}

function miOtraFuncion(){
    edad = 40;
}


miOtraFuncion();
miFuncion();

console.log("edad: " + edad);

console.log("Afuera de la función.");
//console.log("var1 = " + var1);
//console.log("var2 = " + var2);
//console.log("let1 = " + let1);
//console.log("let2 = " + let2);

// Funciones flecha
function suma(a, b){
    return a + b;
}

(a, b) => {
    return a + b;
}

function realizarOperacionMatematica(funcionAEjecutar, a, b){
    console.log(funcionAEjecutar(a, b));
}

realizarOperacionMatematica((a, b) =>  a * 5 + 8 - b, 5, 4); // Si la función es únicamente una expresión, no es necesario el return ni las llaves.
realizarOperacionMatematica((a, b) => {return b * a - 5}, 10, 5);

let restaFlecha = (a, b) => {
    return a - b;
}

console.log(restaFlecha(10, 8));

// Template strings
// Evitemos el uso de la concatenación.

let nombre = 'Bowie';
let edadGato = 2;
let colorOjos = 'Amarillo y azul';

// Backticks
// Windows Alt + 96 =>  `

console.log('El nombre del gato es ' + nombre + ', tiene ' + edadGato + ' años y su color de ojos es ' + colorOjos); // Concatenación.
console.log(`El nombre del gato es ${nombre}, tiene ${edadGato} años y su color de ojos es ${colorOjos}`); // Template strings.

// Clases y objetos

// Objeto literal => Siguen una estructura de clave-valor.
let persona = {
    nombre: 'Malinali',
    edad: 26,
    colorDeOjos: 'Cafés',
    saludar: () => {console.log(`¡Hola!`)}
}

console.log(`${persona.nombre} tiene ${persona.edad} años y sus ojos son ${persona.colorDeOjos}`);
persona.saludar();

// Programación Orientada a Objetos (POO)
// Clase => Una plantilla para crear objetos.

class Persona{
    constructor(nombreDePersona, colorDeOjos, edadDePersona, cancion){
        // Aquí van los atributos (una característica de esa entidad).
        this.nombre = nombreDePersona;
        this.edad = edadDePersona;
        this.colorDeOjos = colorDeOjos;
        this.cancion = cancion;
    }

    // Métodos => Son las acciones que pueden realizar los objetos.
    saludar(){
        console.log(`¡Hola, mi nombre es ${this.nombre}!`);
    }
}


let persona1 = new Persona('Daniel', 'azules', 35, () => {console.log('Witzi witzi araña subió su telaraña')}); // Se crea un objeto a partir de la clase Persona.
let persona2 = new Persona('Emily', 'verdes', 32, () => {console.log('Lloran las rosas!!!!!!!')});
let cantante = new Persona('Miguel', 'cafés', 48, () => {console.log('Qué pesada es la corona!!!!')});

// Accedemos a los atributos.
console.log(persona1.nombre);
console.log(persona2.nombre);
console.log(cantante.nombre);

// Accedemos a los métodos.
persona1.saludar();
persona2.saludar();
cantante.saludar();

// El atributo canción se puede ejecutar ya que recibe como valor una función.
persona1.cancion();
persona2.cancion();
cantante.cancion();

persona1.colorDeCabello = 'café'; // Se pueden agregar más atributos de esta forma, sin embargo, hay que evitar esto.
persona2.tonoDeVoz = 'grave';

console.log(persona1.colorDeCabello);
console.log(persona2.tonoDeVoz);
console.log(cantante.colorDeCabello);
