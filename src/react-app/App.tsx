// src/App.tsx

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

function App() {
  const condicionesGenerales = {
    ubicacion: "A solo 3 cuadras de la plaza principal de Motril",
    zonasComunes: [
      "1 baño compartido",
      "Cocina amplia y equipada (incluye lavarropas)",
      "Termo eléctrico de 150 L para agua caliente constante",
      "Recibidor con espacio para comer o relajarse",
      "Limpieza de zonas comunes cada 15 días",
    ],
    condiciones: [
      "Estancia mínima: 6 meses",
      "Fianza: 2 meses",
      "No se permiten mascotas ni visitas",
      "No se permite fumar",
      "No parejas",
    ],
  };

  const habitaciones = [
    {
      id: "habitacion1",
      titulo: "Habitación 1",
      precio: 300,
      gastos: 40,
      caracteristicas: ["Cama de 1,35 m con colchón confortable"],
    },
    {
      id: "habitacion2",
      titulo: "Habitación 2",
      precio: 350,
      gastos: 40,
      caracteristicas: ["Cama de 1,30 m con colchón confortable"],
    },
    {
      id: "habitacion3",
      titulo: "Habitación 3",
      precio: 250,
      gastos: 40,
      caracteristicas: ["Cama individual con colchón confortable"],
    },
    {
      id: "habitacion4",
      titulo: "Habitación 4",
      precio: 400,
      gastos: 40,
      caracteristicas: ["Cama de 1,35 m con colchón confortable"],
    },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <a className="navbar-brand" href="#">
                HabitacionYa
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="d-flex flex-column min-vh-100">
        {/* Navbar */}

        {/* Hero Section */}
        <div className="hero-section">
          <div className="container">
            <h1 className="display-4">
              Habitaciones cómodas y equipadas en pleno centro de Motril
            </h1>
            <p className="lead">
              Se alquilan habitaciones privadas en un piso compartido, ideal
              para personas tranquilas, responsables y con estadías largas.
            </p>
          </div>
        </div>

        {/* Condiciones Generales */}
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0">Lo que debes saber</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <h6>Ubicación</h6>
                      <p>{condicionesGenerales.ubicacion}</p>
                    </div>
                    <div className="col-md-4">
                      <h6>Zonas Comunes</h6>
                      <ul>
                        {condicionesGenerales.zonasComunes.map(
                          (zona, index) => (
                            <li key={index}>{zona}</li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <h6>Condiciones</h6>
                      <ul>
                        {condicionesGenerales.condiciones.map(
                          (condicion, index) => (
                            <li key={index}>{condicion}</li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Características Comunes */}
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0">Características Comunes</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <ul>
                        <li>Placard amplio</li>
                        <li>Mesa de estudio</li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>TV</li>
                        <li>Ventilador</li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>Wi-Fi de alta velocidad</li>
                        <li>Cortinas</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-5">
          <h2 className="mb-4">Nuestras Habitaciones</h2>
          <div className="row">
            {habitaciones.map((habitacion) => (
              <div key={habitacion.id} className="col-md-6 mb-4">
                <div className="card h-100">
                  <div className="card-header">
                    <h5 className="mb-0">{habitacion.titulo}</h5>
                  </div>
                  <div className="card-body">
                    {/* Carrusel de Fotos */}
                    <div
                      id={`carousel-${habitacion.id}`}
                      className="carousel slide mb-4"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target={`#carousel-${habitacion.id}`}
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target={`#carousel-${habitacion.id}`}
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target={`#carousel-${habitacion.id}`}
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                      <div className="carousel-inner rounded">
                        <div className="carousel-item active">
                          <div
                            className="placeholder-image bg-secondary text-white d-flex align-items-center justify-content-center"
                            style={{ height: "300px" }}
                          >
                            Foto 1
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div
                            className="placeholder-image bg-secondary text-white d-flex align-items-center justify-content-center"
                            style={{ height: "300px" }}
                          >
                            Foto 2
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div
                            className="placeholder-image bg-secondary text-white d-flex align-items-center justify-content-center"
                            style={{ height: "300px" }}
                          >
                            Foto 3
                          </div>
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target={`#carousel-${habitacion.id}`}
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target={`#carousel-${habitacion.id}`}
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <h6>Precio y Gastos</h6>
                        <ul className="list-unstyled">
                          <li className="precio">{habitacion.precio}€/mes</li>
                          <li className="gastos">
                            Gastos: {habitacion.gastos}€/mes
                          </li>
                        </ul>
                        <h6>Características</h6>
                        <ul>
                          {habitacion.caracteristicas.map(
                            (caracteristica, index) => (
                              <li key={index}>{caracteristica}</li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de Contacto */}
        <div className="contact-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 text-center">
                <h2 className="mb-4">
                  ¿Te interesa alguna de nuestras habitaciones?
                </h2>
                <p className="lead mb-4">
                  Contáctanos por WhatsApp para más información o agendar una
                  visita
                </p>
                <a
                  href="https://wa.me/34600000000?text=Hola,%20me%20interesa%20información%20sobre%20las%20habitaciones%20en%20Motril"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success btn-lg"
                >
                  <i className="bi bi-whatsapp me-2"></i>
                  Contactar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <h5>Contacto</h5>
                <p>Para más información, contáctanos:</p>
                <p>📱 Teléfono: [Tu número]</p>
                <p>📧 Email: [Tu email]</p>
              </div>
              <div className="col-md-4">
                <h5>HabitaciónYa</h5>
                <p>Tu hogar en Motril</p>
                <p className="mt-3">
                  © {new Date().getFullYear()} HabitacionYa
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
