import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '@/components/LangSwitcher';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export const Header = () => {
  const { t } = useTranslation();  // Hook para traducción

  return (
    <header className="navbar bg-base-100 shadow-md sticky top-0 z-50">
      
      {/* Navbar inicio (Responsive) */}
      <nav className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" aria-label='Toggle Menu'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="#inicio">{t('Inicio')}</a>
            </li>
            <li>
              <a href="#aboutme">{t('Sobre mí')}</a>
            </li>
            <li>
              <a href="#projects">{t('Proyectos')}</a>
            </li>
            <li>
              <a href="#contact">{t('Contacto')}</a>
            </li>
          </ul>
        </div>
        <a href='/' className="btn btn-ghost text-xl font-bold">Ezequiel Arevalo</a>
      </nav>

      {/* Navbar centro (Desktop) */}
      <nav className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#inicio">{t('Inicio')}</a>
          </li>
          <li>
            <a href="#aboutme">{t('Sobre mí')}</a>
          </li>
          <li>
            <a href="#projects">{t('Proyectos')}</a>
          </li>
          <li>
            <a href="#contact">{t('Contacto')}</a>
          </li>
        </ul>
      </nav>

      {/* Controles del usuario */}
      <div className="navbar-end">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </header>
  );
};