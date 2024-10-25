// ThemeSwitcher.jsx
'use client'

import React, { useState } from 'react';
import { useTheme } from '../context/theme-provider';

export default function ThemeSwitcher() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [animation, setAnimation] = useState(false);

  const handleToggleDarkMode = () => {
    setAnimation(true); // Iniciar animación
    setTimeout(() => {
      toggleDarkMode();  // Cambiar tema
      setAnimation(false); // Terminar animación
    }, 800); // Duración de la animación en ms
  };

  return (
    <div className="relative">
      <button
        onClick={handleToggleDarkMode}
        className="flex items-center justify-center px-3 py-2 bg-white text-gray-800 dark:bg-gray-800 dark:text-white rounded-full border border-gray-300 dark:border-gray-600 shadow-sm transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        aria-label={`Cambiar a modo ${isDarkMode ? 'claro' : 'oscuro'}`}
      >
        <span role="img" aria-hidden="true" className="text-lg">
          {isDarkMode ? '🌙' : '☀️'}
        </span>
      </button>
      <div className={`circle-animation ${animation ? 'active' : ''} ${isDarkMode ? 'dark' : ''}`} />
    </div>
  );
}
