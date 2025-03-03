import { Link } from "lucide-react";
import { clients } from "@/utilities/clients";
import { projects } from "@/utilities/projects";
import { getYearsExperience } from "@/utilities/years";

const StatsSection = () => {
  const handleStatClick = (type) => {
    document.getElementById(`modal-${type}`)?.showModal();
  };

  return (
    <section
      className="min-h-[50vh] flex flex-col items-center text-center my-28 sm:my-16 lg:my-24"
      aria-labelledby="stats-heading"
    >
      <header>
        <h2 id="stats-heading" className="text-3xl sm:text-4xl font-bold mb-4">
          Mis Estadísticas
        </h2>
        <p className="text-lg sm:text-xl text-neutral-400 mb-8">
          Proyectos y experiencia en desarrollo web
        </p>
      </header>

      <div className="stats stats-vertical glass sm:stats-horizontal shadow w-fit">
        {/* Stat de Proyectos */}
        <div
          className="stat cursor-pointer"
          role="button"
          tabIndex="0"
          onClick={() => handleStatClick("proyectos")}
          onKeyPress={(e) =>
            e.key === "Enter" && handleStatClick("proyectos")
          }
        >
          <div className="stat-title">Proyectos</div>
          <div className="stat-value">{projects.length}</div>
          <div className="stat-desc">Entre personales y clientes</div>
        </div>

        {/* Stat de Clientes */}
        <div
          className="stat cursor-pointer"
          role="button"
          tabIndex="0"
          onClick={() => handleStatClick("clientes")}
          onKeyPress={(e) =>
            e.key === "Enter" && handleStatClick("clientes")
          }
        >
          <div className="stat-title">Clientes</div>
          <div className="stat-value">{clients.length}</div>
          <div className="stat-desc">Freelance y colaboraciones</div>
        </div>

        {/* Stat de Años de experiencia */}
        <div className="stat">
          <div className="stat-title">Años de experiencia</div>
          <div className="stat-value">{getYearsExperience()}</div>
          <div className="stat-desc">Desde 2025</div>
        </div>
      </div>

      {/* Modal para Proyectos */}
      <dialog
        id="modal-proyectos"
        aria-labelledby="projects-modal-title"
        className="modal bg-[#18181b]/60 backdrop-blur-md shadow-sm border border-gray-700/50"
      >
        <form method="dialog" className="modal-box">
          <header>
            <h3 id="projects-modal-title" className="font-bold text-lg">
              Proyectos
            </h3>
          </header>
          <p className="py-4">Detalles de los proyectos realizados.</p>
          <ul className="list bg-base-100 rounded-box max-h-[360px] overflow-y-scroll c-scroll">
            {projects.map((project, index) => (
              <li key={project.id} className="list-row">
                <div className="text-4xl font-thin opacity-30 tabular-nums">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>
                <div className="list-col-grow">
                  <p className="text-left font-semibold">{project.name}</p>
                  <p className="text-left text-xs uppercase font-medium opacity-60">
                    {project.type}
                  </p>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-square btn-ghost"
                  aria-label={`Ver detalles de ${project.name}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Link />
                </a>
              </li>
            ))}
          </ul>
          <div className="modal-action">
            {/* Eliminar type="button" para que el botón sea submit y cierre el diálogo */}
            <button className="btn">Cerrar</button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button aria-label="Cerrar modal">Cerrar</button>
        </form>
      </dialog>

      {/* Modal para Clientes */}
      <dialog
        id="modal-clientes"
        aria-labelledby="clients-modal-title"
        className="modal bg-[#18181b]/60 backdrop-blur-md shadow-sm border border-gray-700/50"
      >
        <form method="dialog" className="modal-box">
          <header>
            <h3 id="clients-modal-title" className="font-bold text-lg">
              Clientes
            </h3>
          </header>
          <p className="py-4">
            Detalles de clientes con los que he colaborado.
          </p>
          <ul className="list bg-base-100 rounded-box max-h-[360px] overflow-y-scroll c-scroll">
            {clients.map((client, index) => (
              <li key={client.id} className="list-row">
                <div className="text-4xl font-thin opacity-30 tabular-nums">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>
                <div className="list-col-grow">
                  <p className="text-left font-semibold">{client.name}</p>
                  <p className="text-left text-xs uppercase font-medium opacity-60">
                    {client.proyectname}
                  </p>
                </div>
                <a
                  href={client.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-square btn-ghost"
                  aria-label={`Ver detalles de ${client.name}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Link />
                </a>
              </li>
            ))}
          </ul>
          <div className="modal-action">
            <button className="btn">Cerrar</button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button aria-label="Cerrar modal">Cerrar</button>
        </form>
      </dialog>
    </section>
  );
};

export default StatsSection;