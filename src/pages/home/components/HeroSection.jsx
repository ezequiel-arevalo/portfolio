import { Download, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="text-white min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">

        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
          Sistemas modernos, <span className="text-blue-500">pensados para la gente</span>, no solo para las máquinas.
        </h1>
        <p className="text-lg sm:text-xl text-neutral-400 mb-8">
          Creo experiencias intuitivas que optimizan el trabajo y mejoran la
          vida cotidiana.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
          {/* Botón de Contacto */}
          <a
            href="mailto:ezequiel.thomas.arevalo@gmail.com"
            className="btn btn-primary flex items-center gap-2 w-full sm:w-auto"
            aria-label="Enviar un correo electrónico a Ezequiel Thomas Arevalo"
          >
            <Mail size={20} aria-hidden="true" />
            Contáctame
          </a>

          {/* Menú Desplegable de CV */}
          <div className="dropdown w-full sm:w-auto">
            <button
              tabIndex={0}
              role="button"
              className="btn btn-outline flex items-center gap-2 w-full sm:w-auto"
              aria-haspopup="true"
              aria-expanded="false"
              aria-label="Abrir opciones de descarga de CV"
            >
              <Download size={20} aria-hidden="true" />
              Descargar CV
            </button>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              role="menu"
            >
              <li role="menuitem">
                <a
                  href="/pdf/es/Arevalo_Ezequiel.pdf"
                  download="Arevalo_Ezequiel.pdf"
                  type="application/pdf"
                  rel="noopener noreferrer"
                >
                  Descargar CV
                </a>
              </li>
              <li role="menuitem">
                <a
                  href="/pdf/en/Arevalo_Ezequiel.pdf"
                  download="Arevalo_Ezequiel.pdf"
                  type="application/pdf"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
