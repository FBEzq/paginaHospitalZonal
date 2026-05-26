function obtenerUsuario() {
    return localStorage.getItem("usuarioLogueado");
}

// Mostrar usuario
function mostrarUsuario() {

    let usuario = obtenerUsuario();

    let elemento = document.getElementById("nombreUsuario");

    if(elemento){

        if(usuario){
            elemento.textContent = usuario;
        }else{
            elemento.textContent = "Invitado";
        }

    }
}

// Cerrar sesión
function cerrarSesion(){

    localStorage.removeItem("usuarioLogueado");

    window.location.href = "login.html";
}