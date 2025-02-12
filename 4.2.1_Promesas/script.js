// Objeto literal: Estructura de datos de tipo clave-valor.
let persona = {
    nombre: 'Juan',
    edad: 25,
    profesion: 'Futbolista'
}

// JSON -> JavaScript Object Notation

// Modelo cliente-servidor
/*
    Cliente lanza una petición (request).
    Servidor recibe la petición.
    Servidor regresa una respuesta (response).
*/

// La función fetch() nos permite realizar peticiones.
// JSON

// async-await -> Nos permite ejecutar código asíncrono de manera síncrona.
// Para utilizar async-await tenemos que marcar la función como asíncrona con la palabra reservada async.
async function peticionDePokemones(){
    await fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => {
        console.log('Response');
        console.log(response);
        return response.json();
    })
    .then((json) => {
        console.log('JSON');
        console.log(json);
    })
    .catch((error) => {
        console.log('Ocurrió un error en la petición')
        console.log(error)
    })
    .finally(() => {
        console.log('Proceso terminado');
    });

    console.log('Mensaje después de las promesas');
}

peticionDePokemones();
