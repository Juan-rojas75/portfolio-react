// AnotherComponent.js
import React from 'react';
import ProjectCard from '../../components/card';
// Translation
import { useTranslation } from 'react-i18next';

const PageProject = () => {
  const { t } = useTranslation();

    const proyects = [{
      title: "QuickbetdMovies",
      description: "A movie app built with Next.js that allows users to browse popular movies, view details, and bookmark their favorites.",
      descripcion: "Una app de pelúculas construido con Next.js que permite a los usuarios ver pelúculas populares, ver detalles, y marcar sus favoritos.",
      isDeployed: true,
      deployedUrl: "https://front-app-movie-quickbetdmovies-bei9ljneo.vercel.app/home/populares",
      repoUrl: "https://github.com/Juan-rojas75/front_app_movie_Quickbetdmovies"
    },  
    {
      title: "QuickbetdMovies Backend",
      description: "A backend app built with Nest.js that allows the comunication between the frontend and permits the management of all components of the movies.",
      descripcion: "Una app backend construido con Nest.js que permite la comunicación entre el frontend y permite el manejo de todos los componentes de las peliculas.",
      isDeployed: true,
      deployedUrl: "https://backend-app-movie-quickbetdmovies.onrender.com",
      repoUrl: "https://github.com/Juan-rojas75/backend_app_movie_Quickbetdmovies"
    },
    {
      title: "Management Task",
      description: "A task management app built with Angular that allows the management tasks, allows the creation of tasks, allows the modification of tasks, allows the deletion of tasks.",
      descripcion: "Una app de gestión de tareas construido con Angular que permite el manejo de las tareas, permite la creación de tareas, permite la modificación de tareas, permite la eliminación de tareas.",
      isDeployed: false,
      deployedUrl: "",
      repoUrl: "https://github.com/Juan-rojas75/management_task"
    },
    {
      title: "User Info Github",
      description: "A user info app built with Next.js that allows the browsing of users of Github and access to their profile.",
      descripcion: "Una app de información de usuario construido con Next.js que permite el recorrido de los usuarios de Github y acceso a informacion de su perfil.",
      isDeployed: false,
      deployedUrl: "",
      repoUrl: "https://github.com/Juan-rojas75/user-info-github"
    },
  ];
  const listProyects = proyects.map((proyect) => (
    <ProjectCard
      key={proyect.title}
      title={proyect.title}
      description={proyect.description}
      descripcion={proyect.descripcion}
      isDeployed={proyect.isDeployed}
      deployedUrl={proyect.deployedUrl}
      repoUrl={proyect.repoUrl}
    />
  ));
    return (
      <div className='text-black dark:text-white'>
        <section className='flex flex-col items-center justify-center gap-2'>
            <div className='flex flex-col md:relative md:flex md:flex-col md:gap-2'>
                <span className="font-rubik font-bold text-4xl">
                    {t('title_projects')}
                </span>
                <p className="font-rubik text-xl">
                {t('description_projects')}
                </p>
                <div className='flex flex-row flex-wrap gap-20 justify-center m-10'>
                {listProyects}
                </div>
            </div>
            <img width="800px" src={process.env.PUBLIC_URL + "/fotos/Hacia arriba.png"} alt="" />
        </section>
      </div>
    );
  }
export default PageProject;