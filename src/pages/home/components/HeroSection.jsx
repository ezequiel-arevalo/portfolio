import { Download, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="text-white min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">

        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
          Sistemas modernos, <span className="text-blue-500">pensados para la gente</span>, no solo para las máquinas.
        </h1>
        <p className="text-lg sm:text-xl text-neutral-400 mb-8">
          Creo experiencias intuitivas que optimizan el trabajo y mejoran la vida cotidiana.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Botón de Contacto */}
          <a
            href="mailto:ezequiel.thomas.arevalo@gmail.com"
            className="btn btn-primary flex items-center gap-2"
            aria-label="Enviar un correo electrónico a Ezequiel Thomas Arevalo"
          >
            <Mail size={20} aria-hidden="true" />
            Contáctame
          </a>

          {/* Menú Desplegable de CV */}
          <div className="dropdown">
            <button 
              tabIndex={0} 
              role="button" 
              className="btn btn-outline flex items-center gap-2"
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
              <li role="menuitem"><a href="/cv-es.pdf">CV Español</a></li>
              <li role="menuitem"><a href="/cv-en.pdf">CV Inglés</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;