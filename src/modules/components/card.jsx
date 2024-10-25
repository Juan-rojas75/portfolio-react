import { useTranslation } from 'react-i18next';

const ProjectCard = ({ title, description , descripcion , isDeployed, deployedUrl, repoUrl } = {
  title: "Mi Proyecto",
  description: "Una breve descripción de mi proyecto.",
  titulo: "Mi Proyecto",
  descripcion: "Una breve descripción de mi proyecto.",
  isDeployed: true,
  deployedUrl: "https://miproyecto.com",
  repoUrl: "https://github.com/usuario/miproyecto",
}) => {
  const { i18n } = useTranslation();
  const language = i18n.language;
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm">
      <div className="p-4">
        <div className="flex justify-end">
          <span
            className={`px-2 py-1 text-xs font-semibold rounded relative  ${
              isDeployed
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
           {language === 'en' ? (isDeployed ? "Deployed" : "Not deployed") : (isDeployed ? "Desplegado" : "No desplegado")}

            
            
          </span>
        </div>
        <div className="flex justify-center items-center mb-2">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        </div>
        <p className="text-gray-600 mb-4">{ language === 'en' ? description : descripcion}</p>
        <div className="flex justify-between ">
          {isDeployed && deployedUrl && (
            <a
              href={deployedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              
            </a>
          )}
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-1 px-3 rounded inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;