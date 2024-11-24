import { AnimatePresence } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export const ProjectsGrid = ({ projects, openModal, closeModal }) => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} openModal={openModal} />
                    ))}
                </AnimatePresence>
            </div>

            {projects.map((project) => (
                <ProjectModal key={project.id} project={project} closeModal={closeModal} />
            ))}
        </>
    );
};