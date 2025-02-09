import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-white px-4"
      aria-labelledby="error-title"
      role="region"
    >
      <h1 id="error-title" className="text-6xl font-bold mb-4">
        404
      </h1>
      <p className="text-xl mb-8 text-center max-w-md">
        La página que buscas no existe. Quizá se movió o nunca existió.
      </p>
      <Link
        to="/"
        className="btn btn-primary text-white font-medium"
        aria-label="Regresar a la página de inicio"
      >
        <ArrowLeft className="mr-2" size={20} />
        Regresar a Inicio
      </Link>
    </section>
  );
};

export default ErrorPage;
