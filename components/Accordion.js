"use client";

import Image from 'next/image';
import { useState } from "react";
import { useLanguage } from '@/i18n/LanguageProvider';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useLanguage();

  const projects = [
    { 
      name: "todo-app", 
      image: "/images/todo-app.PNG",
      link: "https://github.com/dastan8q/todo-app"
    },
    { 
      name: "Tecnologica", 
      image: "/images/tecnologica.png",
      link: "https://dev.azure.com/TecnoLogica/TecnoLogica/_git/ProyectoApiTecnologica"
    },
    { 
      name: "Watch app", 
      image: "/images/watchapp.png",
      link: "https://github.com/mario8q/WatchApp"
    },
    { 
      name: "JustWork", 
      image: "/images/justwork.png",
      link: "https://dev.azure.com/TecnoLogica/JustWork/_git/JustWorkAngular"
    }, 
    { 
      name: "PickurFit", 
      image: "/images/pickurfit_project.png", 
      link: "https://github.com/hamil312/outfit-gen",
      demo: "https://outfit-byjpwbuqb-hamilton-insandaras-projects.vercel.app/"
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
                    alt={`${t.projects.imageAltPrefix} ${project.name}`} 
                    width={500}
                    height={500}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-darkMode dark:text-brightMode">{t.projects.itemLabel} {project.name}</h5>
                  </a>
                  <p className="mb-3 font-normal text-darkMode dark:text-brightTitle">{t.projects.descriptions[project.name]}</p>
                  <div className="flex flex-col items-start gap-3">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-brightTitle bg-brightButton rounded-lg hover:bg-brightMode focus:ring-4 focus:outline-none focus:ring-brightButton dark:bg-darkMode dark:hover:bg-darkerText dark:focus:ring-darkMode"
                    >
                      {t.projects.sourceCode}
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
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-darkMode border border-darkMode rounded-lg hover:bg-darkMode hover:text-brightTitle focus:ring-4 focus:outline-none focus:ring-darkMode dark:text-brightMode dark:border-brightMode dark:hover:bg-brightMode dark:hover:text-darkMode dark:focus:ring-brightMode"
                      >
                        {t.projects.demo}
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
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
