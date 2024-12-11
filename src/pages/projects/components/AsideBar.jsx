import { useTranslation } from 'react-i18next';
import Filter from './Filter';
import { status, date, type, tech, framework } from '@/utils/filters';

export const AsideBar = ({
    selectedYear,
    selectedTechnologies,
    selectedStatus,
    selectedProjectTypes,
    handleYearFilter,
    handleTechnologyFilter,
    handleStatusFilter,
    handleProjectTypeFilter,
}) => {
    const { t } = useTranslation();

    return (
        <aside className="p-4 rounded-lg card bg-base-100 shadow-xl">
            {/* Título de filtros con animación */}
            <h2 className="text-xl text-center font-bold">{t('asidebar.filters')}</h2>

            <div className="divider"></div>

            {/* Filtros */}
            <Filter
                title={t('asidebar.status.title')}
                options={status}
                selectedValues={selectedStatus}
                handleFilter={handleStatusFilter}
            />

            <Filter
                title={t('asidebar.year.title')}
                options={date}
                selectedValues={selectedYear}
                handleFilter={handleYearFilter}
            />

            <Filter
                title={t('asidebar.technology.projectType')}
                options={type}
                selectedValues={selectedProjectTypes}
                handleFilter={handleProjectTypeFilter}
            />

            {/* Lenguajes */}
            <Filter
                title={t('asidebar.technology.languages')}
                options={tech}
                selectedValues={selectedTechnologies}
                handleFilter={handleTechnologyFilter}
            />

            {/* Filtro por Plataformas */}
            <Filter
                title={t('asidebar.technology.frameworks')}
                options={framework}
                selectedValues={selectedTechnologies}
                handleFilter={handleTechnologyFilter}
            />
        </aside>
    );
};
