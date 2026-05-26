
// Agrandar y colorear botones al hacer clic (efecto táctil)
document.querySelectorAll("button, .nav-link, .btn-link").forEach((btn) => {
btn.addEventListener("mousedown", () => {
    btn.style.transform = "scale(0.98)";
    btn.style.transition = "transform 0.1s";
});

btn.addEventListener("mouseup", () => {
    btn.style.transform = "scale(1)";
});

btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
});
});

// Menú hamburguesa (toggle + algo de efecto)
const btnMenu = document.getElementById("btn-menu");
const menuMobile = document.getElementById("menu-mobile");

if (btnMenu && menuMobile) {
btnMenu.addEventListener("click", () => {
    const isHidden = menuMobile.classList.contains("d-none");
    if (isHidden) {
    menuMobile.classList.remove("d-none");
    btnMenu.setAttribute("aria-expanded", "true");
    btnMenu.style.transform = "scale(0.98)";
    setTimeout(() => {
        btnMenu.style.transform = "scale(1)";
    }, 100);
    } else {
    menuMobile.classList.add("d-none");
    btnMenu.setAttribute("aria-expanded", "false");
    }
});
}

// Simulación de login/logout con feedback
const btnLogout = document.getElementById("btn-logout");
const usuarioLogueado = document.getElementById("usuario-logueado");

if (usuarioLogueado && btnLogout) {
usuarioLogueado.classList.remove("d-none");
btnLogout.classList.remove("d-none");

btnLogout.addEventListener("click", () => {
    btnLogout.style.transform = "scale(0.98)";
    setTimeout(() => {
    alert("Sesión cerrada correctamente.");
    usuarioLogueado.classList.add("d-none");
    btnLogout.classList.add("d-none");
    window.location.href = "login.html";
    }, 150);
});
}
// js/database.js

// Obtener datos

