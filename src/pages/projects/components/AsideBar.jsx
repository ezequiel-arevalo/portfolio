import { useTranslation } from 'react-i18next';

export const AsideBar = ({
    selectedYear,
    selectedCategory,
    selectedTechnologies,
    selectedStatus,
    handleYearFilter,
    handleCategoryFilter,
    handleTechnologyFilter,
    handleStatusFilter,
}) => {
    const { t } = useTranslation();

    return (
        <aside className="p-4 rounded-lg card bg-base-100 shadow-xl">
            {/* Título de filtros con animación */}
            <h2 className="text-xl font-bold mb-4">
                {t('asidebar.filters')}
            </h2>

            {/* Filtro por Estado */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">
                    {t('asidebar.status.title')}
                </h3>
                <div className="flex flex-col">
                    {["En Proceso", "Terminado"].map((status) => (
                        <label key={status} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                value={status}
                                onChange={handleStatusFilter}
                                checked={selectedStatus.includes(status)}
                                className="checkbox checkbox-sm"
                            />
                            <span>{status}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Filtro por Año */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">
                    {t('asidebar.year.title')}
                </h3>
                <div className="flex flex-col">
                    {["2024", "2023", "2022", "2021"].map((year) => (
                        <label key={year} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                value={year}
                                onChange={handleYearFilter}
                                checked={selectedYear.includes(year)}
                                className="checkbox checkbox-sm"
                            />
                            <span>{year}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Filtro por Tecnología */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">
                    {t('asidebar.technology.title')}
                </h3>
                <div className="mb-4">
                    <h4 className="font-medium">
                        {t('asidebar.technology.languages')}
                    </h4>
                    <div className="flex flex-col">
                        {["HTML", "CSS", "JavaScript", "TypeScript", "PHP"].map((tech) => (
                            <label key={tech} className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    value={tech}
                                    onChange={handleTechnologyFilter}
                                    checked={selectedTechnologies.includes(tech)}
                                    className="checkbox checkbox-sm"
                                />
                                <span>{tech}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div className="mb-4">
                    <h4 className="font-medium">
                        {t('asidebar.technology.frameworks')}
                    </h4>
                    <div className="flex flex-col">
                        {["React", "Next.js"].map((tech) => (
                            <label key={tech} className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    value={tech}
                                    onChange={handleTechnologyFilter}
                                    checked={selectedTechnologies.includes(tech)}
                                    className="checkbox checkbox-sm"
                                />
                                <span>{tech}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
};
