import { AsideBar } from "./components/AsideBar";
import { ProjectsGrid } from "./components/ProjectsGrid";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { projects } from '@/utils/projects';
import { useFilters } from '@/hooks/useFilters';
import { filterProjects } from '@/utils/filterProjects';
import { openModal, closeModal } from '@/utils/modalUtils';

export const ProjectPage = () => {
    const { t } = useTranslation();
    const { filters, handlers } = useFilters();

    const filteredProjects = filterProjects(projects, filters);

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Barra lateral */}
                    <div className="w-full md:w-1/4">
                        <AsideBar
                            {...filters}
                            {...handlers}
                        />
                    </div>

                    {/* Grid de proyectos */}
                    <div className="w-full md:w-3/4">
                        <h1 className="text-3xl font-bold text-center mb-8">
                            {t('view-projects.title')}
                        </h1>

                        {filteredProjects.length === 0 ? (
                            <motion.p
                                className="text-center text-xl font-semibold text-gray-500"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                {t('view-projects.noProjectsMessage')}
                            </motion.p>
                        ) : (
                            <ProjectsGrid
                                projects={filteredProjects}
                                openModal={openModal}
                                closeModal={closeModal}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};