import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './lang/en/en.json';
import es from './lang/es/es.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es }
  },
  lng: 'es', // Idioma por defecto
  fallbackLng: 'en', // Idioma de respaldo
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
