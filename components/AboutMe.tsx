import Image from 'next/image';

export default function AboutMe() {

  return (
    <section className="bg-brightMode flex flex-col justify-center items-center py-44 dark:bg-darkMode">
        <div className="flex items-center">
        <Image className="rounded-full w-14 h-14 mr-4" src="https://i.pinimg.com/originals/42/9b/b4/429bb47fcda0b84f88ec04fbe9ac2328.jpg" width={500} height={500} alt="logo pop" />
        <h1 className="text-darkMode text-5xl font-bold dark:text-brightMode">¡Hola! soy Mario Santacruz</h1>
        </div>
        <div className="bg-brightTitle text-darkMode rounded-lg shadow-lg p-5 w-85 mt-4 dark:bg-brightTitle"> 
        <h2 className="flex text-center text-xl">Estudiante en ingeniería de software que resuelve problemas de manera eficiente
            <br />buscando soluciones creativas 
            <br />que impulsan proyectos innovadores
        </h2>
        </div>
        <ul className="mt-4 flex space-x-4"> 
        <li className="icon-wrapper">
            <a href="https://www.linkedin.com/in/mario-fernando-santacruz-pantoja-967349324/" target="_blank" rel="noopener noreferrer">
            <svg
                className="h-8 w-8 text-blue-600 hover:text-blue-800 dark:text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.5h-3v-4.5c0-1.104-.896-2-2-2s-2 .896-2 2v4.5h-3v-10h3v1.735c.579-.765 1.409-1.263 2.5-1.263 2.206 0 4 1.794 4 4v5.528z" />
            </svg>
            </a>
        </li>
        <li>
            <a href="https://github.com/mario8q" target="_blank" rel="noopener noreferrer">
            <svg
                className="w-8 h-8 text-darkMode hover:text-gray-800 dark:text-brightMode"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M12 0c-6.63 0-12 5.373-12 12 0 5.304 3.438 9.8 8.207 11.387.599.111.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.743.083-.728.083-.728 1.205.084 1.837 1.236 1.837 1.236 1.07 1.834 2.807 1.304 3.495.998.107-.776.419-1.305.763-1.605-2.665-.305-5.466-1.333-5.466-5.931 0-1.31.468-2.381 1.235-3.221-.124-.304-.535-1.528.117-3.183 0 0 1.007-.323 3.3 1.23.957-.266 1.983-.398 3.003-.403 1.02.005 2.047.137 3.006.403 2.291-1.553 3.295-1.23 3.295-1.23.653 1.655.242 2.879.118 3.183.77.84 1.233 1.911 1.233 3.221 0 4.61-2.806 5.624-5.479 5.921.43.369.816 1.099.816 2.217 0 1.601-.015 2.894-.015 3.289 0 .32.192.694.801.576 4.765-1.587 8.198-6.083 8.198-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/mariosanta31/?hl=es" target="_blank" rel="noopener noreferrer">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-pink-500 hover:text-pink-700 dark:text-pink-400"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M7.75 2h8.5C19.97 2 22 4.03 22 7.75v8.5C22 19.97 19.97 22 16.25 22h-8.5C4.03 22 2 19.97 2 16.25v-8.5C2 4.03 4.03 2 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5zM12 6.75A5.25 5.25 0 1 1 6.75 12 5.26 5.26 0 0 1 12 6.75zm0 1.5A3.75 3.75 0 1 0 15.75 12 3.76 3.76 0 0 0 12 8.25zm4.5-3a1.12 1.12 0 1 1-1.12 1.12A1.11 1.11 0 0 1 16.5 5.25z" />
            </svg>
            </a>
        </li>
        </ul>
    </section>
  );
}