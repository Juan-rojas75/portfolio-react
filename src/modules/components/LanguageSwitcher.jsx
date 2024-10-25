import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const language = i18n.language;
  console.log("Idioma",)

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button className='flex items-center justify-center px-3 py-2 bg-white text-gray-800 dark:bg-gray-800 dark:text-white rounded-full border border-gray-300 shadow-sm transition-all duration-300 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
       onClick={() => {language === 'en' ? changeLanguage('es') : changeLanguage('en')}}
       aria-label={`Cambiar idioma a ${language === 'ES' ? 'inglés' : 'español'}`}>
              <span role="img" aria-hidden="true" className="mr-2">🌐</span>
              <span className="text-sm font-medium">{language === 'en' ? 'Es' : 'En'}</span>
              </button>
    </div>
  );
};

export default LanguageSwitcher;