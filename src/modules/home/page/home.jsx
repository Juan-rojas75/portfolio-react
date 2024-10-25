// AnotherComponent.js
import React from "react";
// Translation
import { useTranslation } from 'react-i18next';

const PageHome = () => {

  const { t } = useTranslation();
    return (
      <article className="h-auto">
        <section className="flex justify-center gap-40">
          <img
            className="relative h-auto mb-20"
            src={process.env.PUBLIC_URL + "/fotos/portada.png"}
            alt=""
          />
          <div className="absolute h-96 lg:relative lg:flex lg:flex-col lg:gap-2">
            <div className="flex flex-col justify-center my-56 bg-white/80 px-6 py-2 text-2xl lg:text-6xl">
              <span className="font-rubik text-pink-800 font-semibold">
              {t('greeting')}
              </span>
              <span className="font-rubik font-bold text-6xl">Juan Rojas</span>
              <span className="font-rubik text-pink-800 font-semibold">
              {t('position')}
              </span>
              <div className="flex flex-row gap-1 justify-center">
                <a
                  href="https://github.com/Juan-rojas75"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full text-white bg-red-900 p-2 hover:bg-black hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 lg:w-12 lg:h-12"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/juan-manuel-rojas-cartagena-30ab4a17a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full text-white bg-red-900 p-2 hover:bg-black hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 lg:w-12 lg:h-12"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/juanrojas7515/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full text-white bg-red-900 p-2 hover:bg-black hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 lg:w-12 lg:h-12"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        stroke="currentColor"
                        stroke-width="2"
                        d="M3 11c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172C21 5.343 21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13z"
                      />
                      <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" />
                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                        stroke="currentColor"
                        stroke-width="2"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </article>
    );
  }

  export default PageHome;
