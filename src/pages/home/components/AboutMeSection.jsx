import TimelineTabContent from "./TimelineTabContent";
import { experience, education } from "@/utilities/timeline";

const AboutMeSection = () => {
  return (
    <section id="about-me" className="min-h-screen text-white flex flex-col items-center justify-center px-6 scroll-mt-24 my-28 sm:my-16 lg:my-24">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">Sobre Mí</h2>
      <p className="text-lg text-neutral-400 mb-6">
        Apasionado por la tecnología y el desarrollo web, siempre buscando nuevas formas de innovar y mejorar.
      </p>

      {/* Contenedor principal de columnas */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">

        {/* Columna Izquierda: Perfil */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <picture className="w-40 h-40 rounded-full overflow-hidden mb-4">
            <img src="/image/profile-picture.webp" alt="Foto de perfil" className="object-cover w-full h-full" />
          </picture>
          <h3 className="text-2xl font-bold">Ezequiel Arevalo</h3>
          <p className="text-lg text-neutral-400">Desarrollador Web</p>
          <p className="mt-2 text-sm font-semibold text-green-400">Disponible para proyectos</p>
        </div>

        {/* Columna Derecha: Tabs */}
        <div className="w-full md:w-1/2">
          <div className="tabs tabs-border">
            {/* Tab Resumen */}
            <input type="radio" name="about_tabs" className="tab text-center mx-auto" aria-label="Resumen" defaultChecked />
            <div className="tab-content mt-2 p-6 bg-[#18181b]/30 backdrop-blur-md shadow-sm border border-gray-700/50">
              <p>
                Soy un <strong>desarrollador frontend</strong> de <strong>Argentina</strong>, y me interesa tanto el <strong>frontend</strong> como el <strong>backend</strong>. Quiero hacer una <strong>especialización</strong> de cada rama de forma individual: primero <strong>frontend</strong> y luego <strong>backend</strong>. 
                <br /><br />
                Mi objetivo es <strong>ayudar a la gente</strong>, <strong>resolver problemas</strong> y <strong>mejorar la calidad de vida</strong> de las personas, creando y desarrollando <strong>sistemas mantenibles</strong> a lo largo del tiempo, con las <strong>mejores prácticas</strong> posibles. Me interesa <strong>aprender de mis errores</strong>, recibir <strong>crítica constructiva</strong>, enfrentarme a la <strong>presión</strong> y participar en todo tipo de <strong>proyectos</strong>. Siempre busco <strong>oportunidades</strong> para mejorar mis <strong>habilidades</strong> y <strong>conocimientos</strong> en este campo. 📚✨
                <br /><br />
                Uno de mis principios fundamentales es la <strong>autocrítica constructiva</strong> y el deseo de <strong>aprender de mis errores</strong> para seguir mejorando en cada proyecto en el que trabajo. 🚀🔧
              </p>
            </div>

            {/* Tab Experiencia */}
            <input type="radio" name="about_tabs" className="tab text-center mx-auto" aria-label="Experiencia" />
            <TimelineTabContent timelineData={experience} />

            {/* Tab Educación */}
            <input type="radio" name="about_tabs" className="tab text-center mx-auto" aria-label="Educación" />
            <TimelineTabContent timelineData={education} />

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMeSection;