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
// medicos.js

document.addEventListener("DOMContentLoaded", () => {
  const medicos = [
    {
      nombre: "Dr. Juan Pérez",
      especialidad: "Clínica Médica",
      horario: "Lun–Vie: 8:00–14:00",
      imagen: "https://i.pravatar.cc/150?img=11",
    },
    {
      nombre: "Dra. María González",
      especialidad: "Pediatría",
      horario: "Mar–Jue: 9:00–15:00",
      imagen: "https://i.pravatar.cc/150?img=5",
    },
    {
      nombre: "Dr. Carlos Ruiz",
      especialidad: "Cardiología",
      horario: "Lun–Vie: 10:00–16:00",
      imagen: "https://i.pravatar.cc/150?img=3",
    },
    {
      nombre: "Dra. Laura Méndez",
      especialidad: "Traumatología",
      horario: "Lun–Vie: 8:30–13:30",
      imagen: "https://i.pravatar.cc/150?img=9",
    },
    {
      nombre: "Dr. Pedro Fernández",
      especialidad: "Ginecología",
      horario: "Mar–Sáb: 9:00–14:00",
      imagen: "https://i.pravatar.cc/150?img=12",
    },
    {
      nombre: "Dra. Sofía Torres",
      especialidad: "Oftalmología",
      horario: "Lun–Vie: 11:00–17:00",
      imagen: "https://i.pravatar.cc/150?img=25",
    },
  ];

  const contenedor = document.getElementById("lista-medicos");
  if (!contenedor) return;

  const params = new URLSearchParams(window.location.search);
  const especialidad = params.get("especialidad")?.toLowerCase() || "";

  const filtrados = especialidad
    ? medicos.filter((m) => m.especialidad.toLowerCase().includes(especialidad))
    : medicos;

  if (filtrados.length === 0) {
    contenedor.innerHTML = `
      <div class="col-12">
        <div class="alert alert-info">
          No hay médicos para la especialidad seleccionada.
        </div>
      </div>
    `;
    return;
  }

  contenedor.innerHTML = filtrados
    .map(
      (m) => `
      <div class="col-md-6 col-xl-3">
        <div class="card h-100 shadow-sm rounded-4 p-3">
          <img src="${m.imagen}" class="card-img-top rounded-3" alt="${m.nombre}">
          <div class="card-body">
            <h5 class="card-title">${m.nombre}</h5>
            <p class="card-text text-muted">
              <i class="fa-solid fa-list-ul me-1"></i>${m.especialidad}
            </p>
            <p class="card-text text-muted">
              <i class="fa-solid fa-clock me-1"></i>${m.horario}
            </p>
            <a href="turnos.html?medico=${encodeURIComponent(m.nombre)}"
               class="btn btn-primary btn-sm">
              <i class="fa-solid fa-calendar-check me-1"></i>Reservar turno
            </a>
          </div>
        </div>
      </div>
    `
    )
    .join("");
});
