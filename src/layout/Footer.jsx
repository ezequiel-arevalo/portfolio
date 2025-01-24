import { useTranslation } from "react-i18next";
import { Code, Github, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  const { t } = useTranslation(); // Hook para traducción

  return (
    <footer className="footer footer-center p-10">
      <aside>
        <Code width={50} height={50} />

        <p className="font-bold flex justify-center">
          Ezequiel Arevalo - <span className="ml-1"> {t("Footer.rol")} </span>
        </p>
        <p className="text-center">
          Copyright © {new Date().getFullYear()} - {t("Footer.texto")}
        </p>
      </aside>
      <nav>
        <ul className="grid grid-flow-col gap-4">
          <li>
            <a href="https://github.com/ezequiel-arevalo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/ezequiel-arevalo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin />
            </a>
          </li>
          <li>
            <a href="https://threads.net/ezequie_arevalo" target="_blank" rel="noopener noreferrer" aria-label="Threads">
              <Instagram />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
