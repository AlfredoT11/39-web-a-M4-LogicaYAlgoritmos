// Importando el módulo fs (File System)
const fs = require('fs');

//let rutaArchivo = 'mensajesDelSistema.txt';
//let rutaArchivo = './mensajesDelSistema.txt'; // El archivo se encuentra en la misma carpeta que el script.
rutaArchivo = './mensajesDelSistema/2025-marzo-04.txt'; // El archivo se encuentra en una carpeta dentro de la carpeta del script.
//let rutaArchivo = './../readme.md'; // El archivo se encuentra en la ruta padre.
//let rutaArchivo = './../4.4.2_DivideYVenceras/notas.md'; // El archivo se encuentra en una carpeta de la carpeta padre.

// Verificar si el archivo existe.
if(fs.existsSync(rutaArchivo)){
    // Ya que verificamos que el archivo existe, lo podemos abrir.
    fs.readFile(rutaArchivo, 'utf8', (error, datos) => {
        if(error){
            console.log(error);
            return;
        }
        console.log(datos);
    });

}else{
    console.log(`El archivo no existe.`);
}



fs.writeFile(rutaArchivo, 'Este texto fue escrito desde JavaScript\n', {flag: 'a'}, (error) => {
    if(error){
        console.log(`Ocurrió un error al escribir en el archivo`);
        return;
    }
    console.log(`Se terminó la escritura del archivo.`);
});


fs.appendFile(rutaArchivo, 'Mensaje nuevo desde appendFile()\n', (error) => {
    if(error){
        console.log(`Ocurrió un error al escribir en el archivo`);
        return;
    }
    console.log(`Se terminó la modificación del archivo.`);
});

fs.unlink(rutaArchivo, (error) => {
    if(error){
        console.log(`Ocurrió un error al eliminar el archivo`);
        return;
    }
    console.log(`El archivo en la ruta ${rutaArchivo} se eliminó exitosamente`);
});

// Base de datos
// BDs relacionales
// BDs no relacionales
// SQLite <- Manejador de base de datos. 
// GraphQL.

// Ejemplo de manejo de archivos.
// Logs
let usuario = 'PedroPerez33';
let contrasenia = '12345';

let usuarioIngresado = 'PedroPerez33';
let contraseniaIngresada = '12346';

let rutaIngresos = './accesos/2025-03-04.txt';

if(usuario == usuarioIngresado && contrasenia == contraseniaIngresada){
    fs.writeFile(rutaIngresos, `[OK] El usuario ${usuarioIngresado} ingresó al sistema.\n`, {flag: 'a'}, (error) => {
        if(error){
            console.log(`Ocurrió un error durante la modificación del archivo.\n`);
            return;
        }
    }); 
}else{
    fs.writeFile(rutaIngresos, `[WARNING] Alguien trató de ingresar al sistema.\n`, {flag: 'a'}, (error) => {
        if(error){
            console.log(`Ocurrió un error durante la modificación del archivo.\n`);
            return;
        }
    });  
}

