import { motion } from "framer-motion";
import { Github, Earth } from "lucide-react";

export const ProjectCard = ({ project, openModal }) => {
    return (
        <motion.div
            className="card bg-base-100 shadow-xl cursor-pointer"
            onClick={() => openModal(project.id)}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
        >
            <figure>
                <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-t-lg"
                    width="600"
                    height="400"
                    loading="lazy"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p className="text-lg font-semibold text-primary">{project.date}</p>
                <div className="text-sm text-gray-500">
                    Categorías: {project.categories.join(", ")}
                </div>
                <div className="text-sm text-gray-500">
                    Tecnologías: {project.technologies.join(", ")}
                </div>
                <div className="text-sm text-gray-500">Estado: {project.status}</div>
                <div className="card-actions grid grid-cols-2 gap-2">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-sm"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Github className="w-4 h-4 mr-1" />
                        GitHub
                    </a>
                    <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-sm"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Earth className="w-4 h-4 mr-1" />
                        Sitio
                    </a>
                </div>
            </div>
        </motion.div>
    );
};
