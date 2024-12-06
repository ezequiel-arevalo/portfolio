import { useState } from "react";

export const useFilters = () => {
    const [selectedYear, setSelectedYear] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedProjectTypes, setSelectedProjectTypes] = useState([]);
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState([]);
    const [selectedPlatforms, setSelectedPlatforms] = useState([]);

    const createFilterHandler = (setter) => (e) => {
        const value = e.target.value;
        setter((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    return {
        filters: {
            selectedYear,
            selectedCategory,
            selectedProjectTypes,
            selectedTechnologies,
            selectedStatus,
            selectedPlatforms,
        },
        handlers: {
            handleYearFilter: createFilterHandler(setSelectedYear),
            handleCategoryFilter: createFilterHandler(setSelectedCategory),
            handleTechnologyFilter: createFilterHandler(setSelectedTechnologies),
            handleStatusFilter: createFilterHandler(setSelectedStatus),
            handlePlatformFilter: createFilterHandler(setSelectedPlatforms),
            handleProjectTypeFilter: createFilterHandler(setSelectedProjectTypes),
        },
    };
};
