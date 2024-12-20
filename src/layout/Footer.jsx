import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
            <div className="grid grid-flow-col gap-4">
                {/* GitHub Link */}
                <a
                    href="https://github.com/ezequiel-arevalo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t('footer.github')}
                    className="flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="lucide lucide-github">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span className="sr-only">{t('footer.github')}</span>
                </a>

                {/* LinkedIn Link */}
                <a
                    href="https://www.linkedin.com/in/ezequiel-arevalo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t('footer.linkedin')}
                    className="flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="lucide lucide-linkedin">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="sr-only">{t('footer.linkedin')}</span>
                </a>

                {/* Email Link */}
                <a
                    href="mailto:ezequiel.thomas.arevalo@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t('footer.email')}
                    className="flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="lucide lucide-mail">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span className="sr-only">{t('footer.email')}</span>
                </a>
            </div>
            <div>
                <p>{t('footer.copyright')}</p> {/* Traducir el mensaje de copyright */}
            </div>
        </footer>
    );
};
