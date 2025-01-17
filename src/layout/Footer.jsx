import { useContext } from 'react';
import { ThemeContext } from "@/context/ThemeContext";
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  
  const { t } = useTranslation();  // Hook para traducción
  const { theme } = useContext(ThemeContext); // Obtener el tema desde el contexto
  
  return (
    <footer className="footer footer-center p-10">
      <aside>

        {/* Imagen con animación de rotación */}
        <img 
          src={theme === 'dark' ? './img/logo-black.svg' : './img/logo-white.svg'} 
          alt='logo' 
          width={100} 
          height={100} 
          className='rounded-full shadow-lg mb-5'
        />

        <p className="font-bold">
          Ezequiel Arevalo - <span> {t('Footer.rol')} </span>
        </p>

        <p>Copyright © {new Date().getFullYear()} - {t('Footer.texto')}</p>

      </aside>
    </footer>
  );
};
