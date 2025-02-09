import { HashLink as Link } from 'react-router-hash-link';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header
      className="drawer sticky top-0 z-50 bg-[#18181b]/60 backdrop-blur-md shadow-sm border border-gray-700/50"
      role="banner"
    >
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar principal */}
        <div className="navbar w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              className="btn btn-square btn-ghost"
              aria-label="Abrir menú lateral"
            >
              <Menu />
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 text-xl">
            <Link to="/" className="font-bold" aria-label="Inicio - Ezequiel Arevalo">
              Ezequiel Arevalo
            </Link>
          </div>
          <div className="hidden flex-none lg:block">
            <nav aria-label="Navegación principal">
              <ul className="menu menu-horizontal">
                <li>
                  <Link smooth to="/">Home</Link>
                </li>
                <li>
                  <Link smooth to="#about-me">Sobre Mi</Link>
                </li>
                <li>
                  <Link smooth to="#projects">Proyectos</Link>
                </li>
                <li>
                  <Link smooth to="#projects">Contacto</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          className="drawer-overlay"
          aria-label="Cerrar menú lateral"
        ></label>
        <ul className="menu min-h-full w-80 p-4 bg-[#18181b]/80 backdrop-blur-md shadow-sm border border-gray-700/50">
          <li>
            <Link smooth to="/">Home</Link>
          </li>
          <li>
            <Link smooth to="#about-me">Sobre Mi</Link>
          </li>
          <li>
            <Link smooth to="#projects">Proyectos</Link>
          </li>
          <li>
            <Link smooth to="#projects">Contacto</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
