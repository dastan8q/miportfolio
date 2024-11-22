"use client";

import Image from 'next/image';
import { useState } from "react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const projects = [
    { 
      name: "todo-app", 
      description: "Todo-app es una herramienta de lista de tareas por hacer, con categorias para llevar orden de cada tarea.", 
      image: "/images/todo-app.PNG",
      link: "https://github.com/dastan8q/todo-app"
    },
    { 
      name: "Tecnologica", 
      description: "Una plataforma web de venta de cursos online relacionados con la tecnología, con distintas funciones que contemplan un CRUD con varios modelos, interfaces, clases, etc. Donde se aplica muchos conceptos de POO.", 
      image: "/images/tecnologica.png",
      link: "https://github.com/dastan8q/tecnologica"
    },
    { 
      name: "Watch app", 
      description: "Una aplicación de reloj multifuncional desarrollada en Java usando patron de diseño Factory Method, incluye tres componentes principales: un reloj digital, un cronómetro (stopwatch) y un temporizador (timer). Cada componente proporciona una interfaz gráfica intuitiva para gestionar y visualizar el tiempo de diferentes maneras.", 
      image: "/images/watchapp.png",
      link: "https://github.com/mario8q/WatchApp"
    },
    { 
      name: "JustWork", 
      description: "Just Work! es una aplicación web de redes profesionales, definida para tener una fácil conexión entre profesionales que buscan trabajo y empresas que ofrecen esos empleos.", 
      image: "/images/justwork.png",
      link: "https://github.com/dastan8q/justwork"
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      {projects.map((project, index) => (
        <div key={index} className="border-b border-darkMode dark:border-brightMode">
          <h2 id={`accordion-collapse-heading-${index}`}>
            <button 
              type="button" 
              className="flex items-center justify-between w-full p-5 font-medium text-left text-darkMode dark:text-brightText bg-brightMode dark:bg-darkMode focus:ring-1 focus:ring-darkMode"
              onClick={() => toggleAccordion(index)}
            >
              <span>{project.name}</span>
              <svg 
                data-accordion-icon 
                className={`w-6 h-6 ${activeIndex === index ? 'rotate-180' : ''} transition-transform`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z" 
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div 
            id={`accordion-collapse-body-${index}`} 
            className={`${activeIndex === index ? '' : 'hidden'}`} 
            aria-labelledby={`accordion-collapse-heading-${index}`}
          >
            <div className="p-5">
              <div className="max-w-sm bg-brightText border border-gray-200 rounded-lg shadow dark:bg-darkText dark:border-darkMode">
                <a href="#">
                  <Image 
                    className="rounded-t-lg" 
                    src={project.image} 
                    alt={`Imagen del proyecto ${project.name}`} 
                    width={500}
                    height={500}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-darkMode dark:text-brightMode">Proyecto {project.name}</h5>
                  </a>
                  <p className="mb-3 font-normal text-darkMode dark:text-brightTitle">{project.description}</p>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-brightTitle bg-brightButton rounded-lg hover:bg-brightMode focus:ring-4 focus:outline-none focus:ring-brightButton dark:bg-darkMode dark:hover:bg-darkerText dark:focus:ring-darkMode"
                  >
                    Source code
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
