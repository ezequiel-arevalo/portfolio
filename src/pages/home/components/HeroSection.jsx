import { Download, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="text-white min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
          Sistemas modernos{" "}
          <span className="text-blue-500">pensados para la gente</span> y
          diseñados para facilitar la vida diaria.
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

          {/* Botón de Descargar CV */}
          <a
            href="/pdf/es/Arevalo_Ezequiel.pdf"
            download="Arevalo_Ezequiel.pdf"
            type="application/pdf"
            rel="noopener noreferrer"
            className="btn btn-outline flex items-center gap-2 w-full sm:w-auto"
            aria-label="Boton para descargar CV"
          >
            <Download size={20} aria-hidden="true" />
            Descargar CV
          </a>

          {/* Menú Desplegable de CV */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
