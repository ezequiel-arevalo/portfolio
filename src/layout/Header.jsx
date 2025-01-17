import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '@/components/LangSwitcher';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const { t } = useTranslation();  // Hook para traducción
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Cambia el estado del menú
  };

  return (
    <header className="navbar bg-base-100 shadow-md sticky top-0 z-50">
      
      {/* Navbar inicio (Responsive) */}
      <nav className="navbar-start">
        <div className="dropdown">
          <div 
            tabIndex={0} 
            role="button" 
            className="btn btn-ghost lg:hidden" 
            aria-label="Toggle Menu" 
            onClick={toggleMenu} // Llamamos a la función para alternar el estado
          >
            {/* Condición para mostrar el icono adecuado */}
            {isMenuOpen ? <X /> : <Menu />}
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ${isMenuOpen ? 'block' : 'hidden'}`} // Muestra el menú si isMenuOpen es true
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
        <a href="/" className="btn btn-ghost text-xl font-bold">Ezequiel Arevalo</a>
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