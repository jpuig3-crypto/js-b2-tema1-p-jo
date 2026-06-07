// T1. Uso avanzado de funciones
// U1. Funciones de retorno de llamada: Callbacks
// Enunciado disponible en u1e1.md / Enunciat disponible a u1e1.md

// Escribe aquí tu solución / escriviu aquí la vostra solució:

function conditionalCallback(callback, param) {
    // Si `param` no está definido o es falsy, devolvemos false y no llamamos al callback
    if (!param) return false;

    // Ejecutamos el callback pasando `param` y devolvemos el propio `param`
    // (los tests esperan que la función retorne el valor de `param` cuando se ejecuta)
    callback(param);
    return param;
}


/**
* TEST
* This code is ONLY intended for TESTING PURPOSES,
* if you run this code outside of a test environment,
* please comment or remove it (or use it loading the script as
* a module)
*/
export { conditionalCallback };
