$(document).ready(function () {
  $('#solicitudForm').on('submit', function (e) {
    e.preventDefault();

    const nombre = $('#nombre').val();
    const tipo = $('#tipo').val();
    const fecha = $('#fecha').val();

    alert(`✅ ¡Solicitud confirmada!\n\nCliente: ${nombre}\nReparación: ${tipo}\nCita: ${fecha}`);

    this.reset();
  });
});
