// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importar archivos de traducción
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

// Definir los recursos con los idiomas disponibles
const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    keySeparator: false, 
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
