import { useState } from "react";
import { AsideBar } from "./components/AsideBar";
import { ProjectsGrid } from "./components/ProjectsGrid";
import { useTranslation } from 'react-i18next';

const projects = [
    {
        id: 1,
        title: "Project 1",
        image: "https://placehold.co/600x400",
        date: "2024",
        description: "This is the description for Project 1.",
        github: "https://github.com/ezequiel-arevalo/",
        website: "https://github.com/ezequiel-arevalo/",
        categories: ["API"],
        technologies: ["React"],
        status: "En Proceso",
    },
    {
        id: 2,
        title: "Project 2",
        image: "https://placehold.co/600x400",
        date: "2023",
        description: "This is the description for Project 2.",
        github: "https://github.com/ezequiel-arevalo/",
        website: "https://github.com/ezequiel-arevalo/",
        categories: ["e-commerce"],
        technologies: ["React", "TailwindCSS"],
        status: "En Proceso",
    },
    {
        id: 3,
        title: "Project 3",
        image: "https://placehold.co/600x400",
        date: "2022",
        description: "This is the description for Project 3.",
        github: "https://github.com/ezequiel-arevalo/",
        website: "https://github.com/ezequiel-arevalo/",
        categories: ["API"],
        technologies: ["HTML", "CSS", "Bootstrap"],
        status: "Terminado",
    },
    {
        id: 4,
        title: "Project 4",
        image: "https://placehold.co/600x400",
        date: "2021",
        description: "This is the description for Project 4.",
        github: "https://github.com/ezequiel-arevalo/",
        website: "https://github.com/ezequiel-arevalo/",
        categories: ["e-commerce"],
        technologies: ["Next.js", "TailwindCSS"],
        status: "Terminado",
    },
    {
        id: 5,
        title: "Project 5",
        image: "https://placehold.co/600x400",
        date: "2024",
        description: "This is the description for Project 5.",
        github: "https://github.com/ezequiel-arevalo/",
        website: "https://github.com/ezequiel-arevalo/",
        categories: ["e-commerce", "API"],
        technologies: ["HTML", "CSS", "Bootstrap"],
        status: "Terminado",
    },
    {
        id: 6,
        title: "Project 6",
        image: "https://placehold.co/600x400",
        date: "2023",
        description: "This is the description for Project 6.",
        github: "https://github.com/ezequiel-arevalo/",
        website: "https://github.com/ezequiel-arevalo/",
        categories: ["e-commerce", "API"],
        technologies: ["React"],
        status: "Terminado",
    },
    {
        id: 7,
        title: "Project 7",
        image: "https://placehold.co/600x400",
        date: "2022",
        description: "This is the description for Project 8.",
        github: "https://github.com/ezequiel-arevalo/",
        website: "https://github.com/ezequiel-arevalo/",
        categories: ["PWA"],
        technologies: ["HTML", "CSS", "JavaScript"],
        status: "En Proceso",
    },
    {
        id: 8,
        title: "Project 8",
        image: "https://placehold.co/600x400",
        date: "2021",
        description: "This is the description for Project 8.",
        github: "https://github.com/ezequiel-arevalo/",
        website: "https://github.com/ezequiel-arevalo/",
        categories: ["PWA"],
        technologies: ["React"],
        status: "En Proceso",
    },
];

export const ProjectPage = () => {
    const { t } = useTranslation();
    const [selectedYear, setSelectedYear] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState([]);

    const handleYearFilter = (e) => {
        const value = e.target.value;
        setSelectedYear((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    const handleCategoryFilter = (e) => {
        const value = e.target.value;
        setSelectedCategory((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    const handleTechnologyFilter = (e) => {
        const value = e.target.value;
        setSelectedTechnologies((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    const handleStatusFilter = (e) => {
        const value = e.target.value;
        setSelectedStatus((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    const filteredProjects = projects.filter((project) => {
        const matchesYear =
            selectedYear.length > 0 ? selectedYear.includes(project.date) : true;
        const matchesCategory =
            selectedCategory.length > 0
                ? selectedCategory.some((category) => project.categories.includes(category))
                : true;
        const matchesTechnologies =
            selectedTechnologies.length > 0
                ? selectedTechnologies.some((tech) => project.technologies.includes(tech))
                : true;
        const matchesStatus =
            selectedStatus.length > 0 ? selectedStatus.includes(project.status) : true;

        return matchesYear && matchesCategory && matchesTechnologies && matchesStatus;
    });

    const openModal = (projectId) => {
        const modal = document.getElementById(`modal_${projectId}`);
        if (modal) modal.showModal();
    };

    const closeModal = (projectId) => {
        const modal = document.getElementById(`modal_${projectId}`);
        if (modal) modal.close();
    };

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/4">
                        <AsideBar
                            selectedYear={selectedYear}
                            selectedCategory={selectedCategory}
                            selectedTechnologies={selectedTechnologies}
                            selectedStatus={selectedStatus}
                            handleYearFilter={handleYearFilter}
                            handleCategoryFilter={handleCategoryFilter}
                            handleTechnologyFilter={handleTechnologyFilter}
                            handleStatusFilter={handleStatusFilter}
                        />
                    </div>
                    <div className="w-full md:w-3/4">
                        <h1 className="text-3xl font-bold text-center mb-8">
                            {t('view-projects.title')}
                        </h1>

                        <ProjectsGrid
                            projects={filteredProjects}
                            openModal={openModal}
                            closeModal={closeModal}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};