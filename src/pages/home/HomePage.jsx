import HeroSection from "./components/HeroSection"
import ProjectsSection from "./components/ProjectsSection";
import AboutMeSection from "./components/AboutMeSection";
import ContactSection from "./components/ContactSection";
import StatsSection from "./components/StatsSection";

const HomePage = () => {
  return (
<div className="space-y-24">
  <HeroSection />
  <ProjectsSection />
  <AboutMeSection />
  <StatsSection />
  <ContactSection />
</div>
  );
};

export default HomePage;
