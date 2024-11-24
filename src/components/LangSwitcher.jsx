import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    // Función para cambiar el idioma
    const switchLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="dropdown dropdown-end">
            <button
                tabIndex={0}
                role="button"
                className="btn m-1 btn-ghost btn-circle"
                aria-label="Seleccionar idioma"
            >
                <div className="indicator">
                    <Languages aria-hidden="true" />
                </div>
            </button>
            <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                role="menu"
                aria-label="Opciones de idioma"
            >
                <li role="menuitem">
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            switchLanguage('es'); // Cambiar idioma a español
                        }}
                        className={i18n.language === 'es' ? 'font-bold' : ''}
                        aria-current={i18n.language === 'es' ? 'true' : undefined}
                    >
                        Español
                    </a>
                </li>
                <li role="menuitem">
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            switchLanguage('en'); // Cambiar idioma a inglés
                        }}
                        className={i18n.language === 'en' ? 'font-bold' : ''}
                        aria-current={i18n.language === 'en' ? 'true' : undefined}
                    >
                        English
                    </a>
                </li>
            </ul>
        </div>
    );
};

