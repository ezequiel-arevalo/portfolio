export const filterProjects = (projects, filters) => {
    const {
        selectedYear,
        selectedCategory,
        selectedProjectTypes,
        selectedTechnologies,
        selectedStatus,
        selectedPlatforms,
    } = filters;

    return projects.filter((project) => {
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
        const matchesProjectType =
            selectedProjectTypes.length > 0
                ? selectedProjectTypes.some((type) => project.categories.includes(type))
                : true;
        const matchesPlatforms =
            selectedPlatforms.length > 0
                ? selectedPlatforms.some((platform) => project.platforms.includes(platform))
                : true;

        return matchesYear && matchesCategory && matchesTechnologies && matchesStatus && matchesProjectType && matchesPlatforms;
    });
};
