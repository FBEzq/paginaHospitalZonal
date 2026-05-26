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

// especialidades.js

document.addEventListener("DOMContentLoaded", () => {
  const especialidades = [
    {
      nombre: "Clínica Médica",
      descripcion: "Diagnóstico y tratamiento de enfermedades internas.",
      icono: "fa-stethoscope",
    },
    {
      nombre: "Pediatría",
      descripcion: "Atención de niños y adolescentes.",
      icono: "fa-child",
    },
    {
      nombre: "Cardiología",
      descripcion: "Enfermedades del corazón y sistema circulatorio.",
      icono: "fa-heart-pulse",
    },
    {
      nombre: "Traumatología",
      descripcion: "Huesos, articulaciones y músculos.",
      icono: "fa-bone",
    },
    {
      nombre: "Ginecología",
      descripcion: "Salud reproductiva femenina.",
      icono: "fa-venus",
    },
    {
      nombre: "Oftalmología",
      descripcion: "Salud de los ojos y visión.",
      icono: "fa-eye",
    },
  ];

  const contenedor = document.getElementById("lista-especialidades");
  if (!contenedor) return;

  // Obtener parámetro de búsqueda
  const params = new URLSearchParams(window.location.search);
  const busqueda = params.get("busqueda")?.toLowerCase() || "";

  const filtradas = especialidades.filter((e) =>
    e.nombre.toLowerCase().includes(busqueda)
  );

  if (filtradas.length === 0) {
    contenedor.innerHTML = `
      <div class="col-12">
        <div class="alert alert-info">
          No se encontraron especialidades para "<strong>${busqueda}</strong>".
        </div>
      </div>
    `;
    return;
  }

  contenedor.innerHTML = filtradas
    .map(
      (e) => `
      <div class="col-md-6 col-xl-3">
        <div class="card h-100 shadow-sm rounded-4 p-4">
          <div class="mb-3 text-primary fs-3">
            <i class="fa-solid ${e.icono}"></i>
          </div>
          <h3 class="h5">${e.nombre}</h3>
          <p class="text-muted">${e.descripcion}</p>
          <a href="medicos.html?especialidad=${encodeURIComponent(e.nombre)}"
             class="text-primary fw-semibold">
            Ver médicos
          </a>
        </div>
      </div>
    `
    )
    .join("");
});