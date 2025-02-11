import { Info } from "lucide-react";
import { useState, useRef } from "react";

const ContactSection = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const emailRef = useRef(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleCopyEmail = () => {
    if (emailRef.current) {
      navigator.clipboard.writeText(emailRef.current.value)
        .then(() => {
          setCopySuccess("Correo copiado exitosamente");
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 5000);
        })
        .catch(() => setCopySuccess("Error al copiar el correo"));

      setTimeout(() => setCopySuccess(""), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="text-white min-h-screen flex flex-col items-center justify-center px-6"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contacto</h2>
      <p className="text-lg text-neutral-400 mb-6">
        Puedes contactarme a través de mi correo electrónico.
      </p>

      <div className="card glass text-primary-content w-full max-w-lg">
        <div className="card-body">
          <h3 className="card-title text-xl font-bold">¡Contáctame!</h3>
          <p className="mb-4">
            Haz clic en el botón para copiar mi correo electrónico y escribirme.
          </p>

          <div className="join w-full">
            {/* Etiqueta asociada al input para mejorar la accesibilidad */}
            <label htmlFor="email" className="sr-only">
              Correo electrónico
            </label>
            <div className="flex w-full items-center">
              <input
                ref={emailRef}
                id="email"
                type="email"
                defaultValue="ezequiel.thomas.arevalo@gmail.com"
                className="input input-bordered w-full ml-2"
                readOnly
              />
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="btn btn-primary"
              aria-live="polite"
            >
              Copiar
            </button>
          </div>

        </div>
      </div>

      {/* Alert que se muestra en la parte inferior derecha */}
      {showAlert && (
        <div
          role="alert"
          className="alert alert-success alert-soft fixed bottom-4 center"
        >
          <Info />
          <span>{copySuccess}</span>
        </div>
      )}
    </section>
  );
};

export default ContactSection;