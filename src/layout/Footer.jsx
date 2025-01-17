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
        <div className="grid grid-flow-col gap-4">
          <a>
            <Github />
          </a>
          <a>
            <Linkedin />
          </a>
          <a>
            <Instagram />
          </a>
        </div>
      </nav>
    </footer>
  );
};
