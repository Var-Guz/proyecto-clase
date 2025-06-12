function loadSection(section) {
  const content = document.getElementById("content");

  switch (section) {
    case "inicio":
      content.innerHTML = `
        <section class="inicio">
          <h1 class="inicio__titulo">Parque Nacional La Muralla</h1>
          <p class="inicio__descripcion">Explora la belleza natural del Parque Nacional La Muralla, Ubicado en Olancho, Honduras con nosotros.</p>
        </section>
      `;
      break;

    case "quienes":
      content.innerHTML = `
        <section class="quienes">
          <h2 class="quienes__titulo">Quiénes Somos</h2>
          <p class="quienes__descripcion">Somos un centro turístico comprometido con la naturaleza, la cultura y el turismo sostenible en Honduras.</p>
        </section>
      `;
      break;

    case "faunayflora":
      content.innerHTML = `
        <section class="faunayflora">
          <h2 class="faunayflora__titulo">Fauna y Flora</h2>
          <p class="faunayflora__descripcion">
          En esta sección encontrarás algunas imágenes de nuestra fauna y flora del lugar.
          </p>
        <div class="faunayflora__galeria">
          <img src="images/flor1.jpg" alt="Flor local" class="faunayflora__imagen">
          <img src="images/animal1.jpg" alt="Animal local" class="faunayflora__imagen">
          <img src="images/paisaje.jpg" alt="Paisaje natural" class="faunayflora__imagen">
          </div>
        </section>
  `;
  break;

    case "reservas":
      content.innerHTML = `
        <section class="reservas">
          <h2 class="reservas__titulo">Haz tu Reserva</h2>
          <form class="reservas__form">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>

            <label for="fecha">Fecha de visita:</label>
            <input type="date" id="fecha" name="fecha" required>

            <label for="personas">Número de personas:</label>
            <input type="number" id="personas" name="personas" min="1" required>

            <label for="Numero Movil">Número de Movil:</label>
            <input type="number" id="movil" name="movil" min="8" required>

            <button type="submit">Reservar</button>
          </form>
        </section>
      `;
      break;

    case "reportes":
      content.innerHTML = `
        <section class="reportes">
          <h2 class="reportes__titulo">Reportes del Centro</h2>
          <div class="reportes__cards">
            <div class="reportes__card" onclick="verReporte('Enero')">Reporte Enero</div>
            <div class="reportes__card" onclick="verReporte('Febrero')">Reporte Febrero</div>
            <div class="reportes__card" onclick="verReporte('Marzo')">Reporte Marzo</div>
          </div>
        </section>
      `;
      break;

    default:
      content.innerHTML = `<p>Sección no encontrada.</p>`;
  }
}

function verReporte(mes) {
  alert("Abriendo reporte del mes: " + mes);
}
