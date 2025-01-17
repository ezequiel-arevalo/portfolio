import HeroSection     from "./components/HeroSection";
import AboutMeSection  from "./components/AboutMeSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection  from "./components/ContactSection";

const HomePage = () => {
  return (
    <>
      {/* Sección Inicio */}
      <HeroSection />

      {/* Sección About Me */}
      {/* Incluye Resumen sobre mi */}
      {/* Incluye Educación */}
      {/* Incluye Certificados */}
      {/* Incluye Lenguajes */}
      <AboutMeSection />

      {/* Sección Projects */}
      {/* Incluye Proyectos destacados como filtro inicial */}
      {/* Incluye Otros filtros */}
      {/* Incluye Link y Repo */}
      {/* Incluye Lenguajes y frameworks */}
      {/* Incluye Información sobre cual fue mi rol y que hice en cada proyecto tipo pop-up */}
      <ProjectsSection />

      {/* Sección Contact */}
      {/* Incluye boton de copiar email */}
      <ContactSection />
    </>
  );
};

export default HomePage;
