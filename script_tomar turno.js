document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);

  const medicoURL = params.get("medico");
  const especialidadURL = params.get("especialidad");

  const selectEspecialidad =
    document.getElementById("especialidad");

  const selectMedico =
    document.getElementById("medico");

  const form =
    document.getElementById("form-turno");

  const medicosPorEspecialidad = {

    "Clínica Médica": [
      "Dr. Juan Pérez"
    ],

    "Pediatría": [
      "Dra. María González"
    ],

    "Cardiología": [
      "Dr. Carlos Ruiz"
    ],

    "Traumatología": [
      "Dra. Laura Méndez"
    ],

    "Ginecología": [
      "Dr. Pedro Fernández"
    ],

    "Oftalmología": [
      "Dra. Sofía Torres"
    ],
  };

  function cargarMedicos(especialidad) {

    selectMedico.innerHTML =
      '<option value="">Seleccionar...</option>';

    const lista =
      medicosPorEspecialidad[especialidad] || [];

    lista.forEach((medico) => {

      const option =
        document.createElement("option");

      option.value = medico;
      option.textContent = medico;

      selectMedico.appendChild(option);
    });
  }

  selectEspecialidad.addEventListener(
    "change",
    () => {
      cargarMedicos(selectEspecialidad.value);
    }
  );

  // PRESELECCIÓN
  if (especialidadURL) {

    selectEspecialidad.value =
      especialidadURL;

    cargarMedicos(especialidadURL);

    if (medicoURL) {

      selectMedico.value =
        medicoURL;
    }
  }

  // GUARDAR TURNO
  form.addEventListener("submit", (e) => {

    e.preventDefault();

    const turno = {

      dni:
        document.getElementById("dni").value,

      nombre:
        document.getElementById("nombre").value,

      especialidad:
        selectEspecialidad.value,

      medico:
        selectMedico.value,

      fecha:
        document.getElementById("fecha").value,

      hora:
        document.getElementById("hora").value,

      estado: "Pendiente"
    };

    const turnos =
      JSON.parse(
        localStorage.getItem("turnos")
      ) || [];

    turnos.push(turno);

    localStorage.setItem(
      "turnos",
      JSON.stringify(turnos)
    );

    alert("Turno reservado correctamente");

    window.location.href =
      "paginas/historial/historial.html";
  });
});
const selectHora =
  document.getElementById("hora");

const horariosDisponibles = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00"
];
cargarHorarios();
