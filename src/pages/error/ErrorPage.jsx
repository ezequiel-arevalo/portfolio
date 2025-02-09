import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-600">404</h1>
        <h2 className="text-3xl text-black mt-4">Página no encontrada</h2>
        <p className="mt-4 text-black text-lg">
          Lo siento, la página que buscas no existe o ha sido eliminada.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn btn-primary">
            Volver al Inicio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
