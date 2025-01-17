import { Header } from "./Header";
import { Footer } from "./Footer";
import HomePage from "@/pages/home/HomePage";

export const MainLayout = () => {
  return (
    <>
      {/* Header con navegación */}
      <Header />

      {/* Contenido principal con secciones */}
      <main>
        <HomePage />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};