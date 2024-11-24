import { Link } from "react-router-dom";
import { House, LayoutGrid, Mail, Menu, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/LangSwitcher";
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { useTranslation } from 'react-i18next';

export const Header = () => {
    const { t } = useTranslation();

    return (
        <header className="navbar bg-base-100">
            <nav className="navbar-start">
                <div className="dropdown">
                    {/* Botón con funcionalidad de menú accesible */}
                    <label
                        className="btn btn-circle swap swap-rotate lg:hidden"
                        aria-label="Abrir o cerrar el menú de navegación"
                    >
                        {/* Checkbox oculto para controlar el estado */}
                        <input type="checkbox" />

                        {/* Icono de menú (hamburguesa) */}
                        <Menu
                            width={20}
                            className="swap-off"
                            aria-hidden="true"
                        />

                        {/* Icono de cerrar */}
                        <X
                            width={20}
                            className="swap-on"
                            aria-hidden="true"
                        />
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <Link to={"/"}>
                                <House width={20} />
                                <span>{t('header.home')}</span> {/* Traducción de "Home" */}
                            </Link>
                        </li>
                        <li>
                            <Link to={"/projects"}>
                                <LayoutGrid width={20} />
                                <span>{t('header.projects')}</span> {/* Traducción de "Projects" */}
                            </Link>
                        </li>
                        <li>
                            <Link to={"/contact"}>
                                <Mail width={20} />
                                <span>{t('header.contact')}</span> {/* Traducción de "Contact" */}
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Vínculo accesible al nombre del sitio */}
                <Link
                    to={"/"}
                    className="btn btn-ghost text-xl"
                    aria-label="Ir al inicio, página de Ezequiel Arevalo"
                >
                    Ezequiel Arevalo
                </Link>
            </nav>
            <nav className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to={"/"}>
                            <House width={20} />
                            <span>{t('header.home')}</span> {/* Traducción de "Home" */}
                        </Link>
                    </li>
                    <li>
                        <Link to={"/projects"}>
                            <LayoutGrid width={20} />
                            <span>{t('header.projects')}</span> {/* Traducción de "Projects" */}
                        </Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>
                            <Mail width={20} />
                            <span>{t('header.contact')}</span> {/* Traducción de "Contact" */}
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="navbar-end">
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </header>
    );
};
