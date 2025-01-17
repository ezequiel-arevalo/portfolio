const ErrorPage = () => {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-4">Página no encontrada</p>
        <a href="#inicio" className="btn btn-primary">
          Volver al Inicio
        </a>
      </div>
    );
  };
  
  export default ErrorPage;
  