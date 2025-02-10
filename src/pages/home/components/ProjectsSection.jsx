import { projects } from "@/utilities/projects";
import { Github, Send } from "lucide-react";

const ProjectsSection = () => {
  // Función que abre la modal del proyecto correspondiente
  const handleCardClick = (projectId) => {
    document.getElementById(`modal-${projectId}`).showModal();
  };

  return (
    <section
      id="projects"
      className="text-white min-h-screen flex flex-col items-center justify-center px-6"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">Mis Proyectos</h2>
      <p className="text-lg text-neutral-400 mb-6">
        Algunos de los proyectos en los que he trabajado, enfocados en
        funcionalidad, diseño y rendimiento.
      </p>
      
      {/* Grid de Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card glass w-full cursor-pointer"
            onClick={() => handleCardClick(project.id)}
          >
            <figure>
              <img
                src={
                  project.image ||
                  "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                }
                alt={project.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <p>{project.synopsis}</p>

              <div className="card-actions justify-left">
                {project.technologies?.map((tech, index) => (
                  <div key={index} className="badge badge-base-200">
                    {tech.name}
                  </div>
                ))}
              </div>

              <div className="card-actions justify-center mt-6">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary cursor-pointer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github width={20} />
                    Repositorio
                  </a>
                ) : (
                  <button
                    className="btn btn-primary"
                    disabled
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github width={20} />
                    Repositorio
                  </button>
                )}
                {project.deploy ? (
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary cursor-pointer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Send width={20} />
                    Sitio Web
                  </a>
                ) : (
                  <button
                    className="btn btn-primary"
                    disabled
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Send width={20} />
                    Sitio Web
                  </button>
                )}
              </div>
            </div>
  
            {/* Modal de DaisyUI para mostrar detalles del proyecto */}
            <dialog id={`modal-${project.id}`} className="modal bg-[#18181b]/60 backdrop-blur-md shadow-sm border border-gray-700/50">
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">{project.name}</h3>
                <p className="py-4">{project.description}</p>
  
                {/* Si existen actividades, se muestra el listado */}
                {project.activity && project.activity.length > 0 && (
                  <ul className="list rounded-box">
                    {/* Título del listado */}
                    <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                      Actividades realizadas
                    </li>
                    {project.activity.map((act, index) => (
                      <li key={index} className="list-row">
                        <div className="text-4xl font-thin opacity-30 tabular-nums">
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </div>
                        <div className="list-col-grow">
                          <div>{act.title}</div>
                          <div className="text-xs uppercase font-semibold opacity-60">
                            {act.subtitle}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
  
                <div className="modal-action">
                  <button className="btn">Cerrar</button>
                </div>
              </form>
  
              {/* Opcional: Si deseas que también se cierre al hacer clic en el backdrop */}
              <form method="dialog" className="modal-backdrop">
                <button>Cerrar</button>
              </form>
            </dialog>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;