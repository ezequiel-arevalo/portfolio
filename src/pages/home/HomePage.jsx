const HomePage = () => {
  return (
    <>
      <section
        id="first-section"
        className="bg-amber-50 min-h-screen scroll-mt-16"
        aria-labelledby="maintenance-heading"
      >
        <article className="container mx-auto py-12">
          <h1 id="maintenance-heading" className="text-center text-black text-6xl">
            Bienvenido a mi portfolio - Ezequiel Arevalo
          </h1>
          <h2 className="text-center text-black text-2xl mt-4">
            Portfolio personal de Ezequiel Arevalo en construcción
          </h2>
          <p className="text-center text-black text-lg mt-8">
            Actualmente estoy desarollandolo. ¡Vuelve pronto!
          </p>
        </article>
      </section>
    </>
  );
};

export default HomePage;
