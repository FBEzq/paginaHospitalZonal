// script.js – común para todas las páginas del hospital

document.addEventListener("DOMContentLoaded", () => {
  // --- MENÚ MOBILE ---
  const btnMenu = document.getElementById("btn-menu");
  const menuMobile = document.getElementById("menu-mobile");

  if (btnMenu && menuMobile) {
    btnMenu.addEventListener("click", () => {
      const isExpanded = btnMenu.getAttribute("aria-expanded") === "true";
      btnMenu.setAttribute("aria-expanded", !isExpanded);
      menuMobile.classList.toggle("d-none");
    });
  }

  // --- USUARIO LOGUEADO ---
  const usuarioLogueado = document.getElementById("usuario-logueado");
  const btnLogout = document.getElementById("btn-logout");
  const headerUsuario = document.getElementById("header-usuario");

  const usuario = localStorage.getItem("usuario");

  if (usuario && headerUsuario) {
    usuarioLogueado.textContent = `Hola, ${usuario}`;
    usuarioLogueado.classList.remove("d-none");
    btnLogout.classList.remove("d-none");
  }

  if (btnLogout) {
    btnLogout.addEventListener("click", () => {
      localStorage.removeItem("usuario");
      window.location.href = "login.html";
    });
  }

  // --- BUSCADOR DE ESPECIALIDADES ---
  const inputSearch = document.querySelector('input[type="search"]');
  if (inputSearch) {
    inputSearch.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const query = inputSearch.value.trim().toLowerCase();
        if (query) {
          window.location.href = `especialidades.html?busqueda=${encodeURIComponent(query)}`;
        }
      }
    });
  }
});
const lista = document.getElementById("listaTurnos");

const turnos = obtenerDatos("turnos");

turnos.forEach(turno => {
    lista.innerHTML += `
        <li>
            ${turno.paciente} - ${turno.especialidad}
        </li>
    `;
});
