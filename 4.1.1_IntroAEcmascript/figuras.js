// Se puede importar con destructuración
/*
import RADIO_TIERRA, { PI, GRAVEDAD } from './constantes.js'; 

console.log(RADIO_TIERRA);
console.log(PI);
console.log(GRAVEDAD);
*/

// Se puede importar con reasianción de nombre del archivo.
import * as constantes from './constantes.js' ;

//RADIO_TIERRA = 4000;
//console.log(RADIO_TIERRA);
console.log(constantes.default);
console.log(constantes.PI);
console.log(constantes.GRAVEDAD);

//import { RADIO_TIERRA } from './constantes.js';
//console.log(RADIO_TIERRA);


function calcularAreaCirculo(radio){
    return constantes.PI * radio * radio;
}

export { calcularAreaCirculo };