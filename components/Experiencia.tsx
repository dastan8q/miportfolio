
export default function Experiencia() {
  return (
    <section className="bg-brightMode flex flex-col items-center py-44 dark:bg-darkMode">
      <div className="flex items-center mb-10">
        <svg
          className="fill-current text-darkMode dark:text-brightMode"
          width="64"
          height="64"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="1052 796 200 200"
          enableBackground="new 1052 796 200 200"
          xmlSpace="preserve"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <path d="M1151.998,921.75c-4.129,0-8.17-0.771-12.01-2.292l-50.167-19.888c0,11.08,0,27.65,0,32.066 c0,15.562,27.836,28.174,62.178,28.174s62.181-12.612,62.181-28.174v-32.067l-50.172,19.889 C1160.168,920.979,1156.127,921.75,1151.998,921.75z"></path>
              <path d="M1248.592,867.082l-87.989-34.878c-5.526-2.19-11.681-2.19-17.208,0l-87.988,34.878c-2.057,0.815-3.407,2.804-3.407,5.016 c0,2.213,1.351,4.201,3.407,5.017l12.317,4.882v34.925c-2.736,1.865-4.533,5.007-4.533,8.568c0,3.262,1.508,6.171,3.863,8.071 l-3.751,18.007c-0.503,2.416,0.108,4.931,1.666,6.845c1.557,1.915,3.894,3.026,6.361,3.026h4.449c2.468,0,4.804-1.111,6.361-3.026 c1.557-1.914,2.168-4.429,1.666-6.845l-3.752-18.007c2.356-1.9,3.864-4.81,3.864-8.071c0-3.562-1.797-6.703-4.533-8.568v-30.303 l63.729,25.264c5.708,2.263,12.063,2.263,17.771,0l87.709-34.768c2.057-0.815,3.407-2.804,3.407-5.017 C1252,869.886,1250.649,867.897,1248.592,867.082z"></path>
            </g>
          </g>
        </svg>
        <h1 className="text-darkMode text-5xl font-bold ml-4 dark:text-brightMode">Experiencia</h1>
      </div>
      <aside className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        <div>
          <h2 className="text-2xl font-semibold text-darkMode mb-4">Experiencia Académica</h2>
          <ol className="relative border-l border-darkMode dark:border-brightMode">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-brightTitle rounded-full mt-1.5 -left-1.5 border border-darkMode dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">Septiembre 2009</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Colegio San Francisco de Asis - San Juan de Pasto
              </h3>
              <p className="mb-4 text-base font-normal text-darkText dark:text-gray-400">
                Estudie toda la primaria y bachillerato en el Colegio San Francisco de asis donde aprendí a ser más y mejor persona.
              </p>
            </li>
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-brightTitle rounded-full mt-1.5 -left-1.5 border border-darkMode dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                    Agosto 2022
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Universidad Cooperativa de Colombia Campus Pasto
                </h3>
                <p className="text-base font-normal text-darkText dark:text-gray-400">
                    Actualmente estoy en 5to semestre, aprendiendo todo sobre resolver problemas de software con ingenio y creatividad.
                </p>
            </li>
            <li className="ml-4">
                <div className="absolute w-3 h-3 bg-brightTitle rounded-full mt-1.5 -left-1.5 border border-darkMode dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                    Agosto 2021
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Cambridge Academy - San Juan de Pasto
                </h3>
                <p className="text-base font-normal text-darkText dark:text-gray-400">
                    Me forme en una academia de ingles donde presente un examen internacional con calificaciones de B2 y C1 en los diferentes modulos de ingles.
                </p>
            </li>
          </ol>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-darkMode mb-4">Experiencia Laboral</h2>
          <ol className="relative border-l border-darkMode dark:border-brightMode">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-brightTitle rounded-full mt-1.5 -left-1.5 border border-darkMode dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">Fecha futura</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Aún sin experiencia laboral</h3>
              <p className="text-base font-normal text-darkText dark:text-gray-400">
                Actualizaré esta sección con futuras experiencias profesionales.
              </p>
            </li>
          </ol>
        </div>
      </aside>
    </section>
  );
}
