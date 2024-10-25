// AnotherComponent.js
import React from "react";
// Translation
import { useTranslation } from 'react-i18next';

const PageHome = () => {
  const { t } = useTranslation();

  const age = new Date().getFullYear() - 1995;
    const skills = ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB", "MySQL", "PostgreSQL" , "GIT", "GitHub", "Java" , "SpringBoot", "Nextjs", "Nestjs", "C#", ".Net", "Angular", "Python", "Django", "Flask", "VueJs" , "Tailwind CSS"];
    const listSkills = skills.map((skill) =>
      <span class="bg-pink-900 text-white text-sm font-medium me-2 px-4 py-1 rounded-lg dark:bg-pink-900">
                {skill}
      </span>
    );
    return (
      <article className="text-left m-5 text-black dark:text-white">
        <div className="flex flex-col items-center">
          <section className="flex flex-row flex-wrap justify-center mb-8 md:gap-40">
            <div className="flex flex-col gap-6 max-w-lg">
              <span className="font-rubik font-bold text-4xl">
              {t('title_about_me')}
              </span>
              <p className="font-rubik text-xl">
              {t('description_about_me').replace('{AGE}', age)}
              </p>
            </div>
            <img
              width="500px"
              src={process.env.PUBLIC_URL + "/fotos/Señalando izquierda.png"}
              alt="Foto"
              />
          </section>
        </div>
        <div className="flex flex-col items-center">
          <section className="flex flex-row justify-center w-full gap-40">
            <div className="flex flex-col gap-10 md:gap-40 max-w-2xl items-center">
              <div className="flex flex-col gap-8 max-w-lg">
                <span className="font-rubik font-bold text-4xl">{t('title_skills')}</span>
              
                <p className="font-rubik text-xl">
                {t('description_skills')}
                </p>
              </div>
              <div className="flex flex-row justify-center items-center flex-wrap gap-2">
                {listSkills}
              </div>
            </div>
          </section>
        </div>
      </article>
    );
  }

export default PageHome;