// js/database.js

// Obtener datos
function obtenerDatos(clave) {
    return JSON.parse(localStorage.getItem(clave)) || [];
}

// Guardar datos
function guardarDatos(clave, datos) {
    localStorage.setItem(clave, JSON.stringify(datos));
}

// Agregar elemento
function agregarDato(clave, nuevoDato) {
    let datos = obtenerDatos(clave);
    datos.push(nuevoDato);
    guardarDatos(clave, datos);
}