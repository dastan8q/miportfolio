// app/page.js

"use client";
import { useEffect } from 'react';
import Accordion from '@/components/Accordion';
import ThemeSwitch from '@/components/ThemeSwitch';

export default function Home() {
  useEffect(() => {
    import('flowbite');
  }, []);

  return (
    <>
      <header>
        <nav className="bg-darkMode text-brightText p-4 flex flex-row stroke gap-x-10 justify-center fixed w-full top-0 z-50">
          <a href="/">Inicio</a>
          <a href="/sobre mi">Sobre mi</a>
          <a href="/mis proyectos">Mis proyectos</a>
          <a href="/experiencia">Experiencia</a>
          <a href="/mis hobbies">Mis hobbies</a>
          <a href="/mis stacks">Mis stacks</a>
          <a href="/contactame">Contactame</a>
          <ThemeSwitch />
        </nav>

        <section className="relative h-screen">
          <div className="grid cols-1 lg:grid-cols-2 h-full">
            <div className="bg-brightMode dark:bg-darkMode"></div>
            <div className="bg-darkMode dark:bg-brightMode"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="https://i.pinimg.com/originals/42/9b/b4/429bb47fcda0b84f88ec04fbe9ac2328.jpg"
              alt="Mi imagen MS"
              width={500}
              height={500}
              className="object-cover rounded-lg"
            />
            <h1 className="absolute text-outline text-9xl font-bold text-center z-10">
              INGENIERIA SOFTWARE
            </h1>
          </div>
        </section>
      </header>

      <main className='bg-brightMode'>
        <section className="bg-brightMode flex flex-col justify-center items-center py-44 dark:bg-darkMode">
          <div className="flex items-center">
            <img className="rounded-full w-14 h-14 mr-4" src="https://i.pinimg.com/originals/42/9b/b4/429bb47fcda0b84f88ec04fbe9ac2328.jpg" alt="logo pop" />
            <h1 className="text-darkMode text-5xl font-bold dark:text-brightMode">¡Hola! soy Mario Santacruz</h1>
          </div>
          <div className="bg-brightTitle text-darkMode rounded-lg shadow-lg p-5 w-85 mt-4"> 
            <h2 className="flex text-center text-xl">Ingeniero de software que resuelve problemas de manera eficiente
              <br />buscando soluciones creativas 
              <br />que impulsan proyectos innovadores
            </h2>
          </div>
          <ul className="mt-4 flex space-x-4"> 
            <li className="icon-wrapper">
              <a href="https://www.linkedin.com/in/mario-fernando-santacruz-pantoja-967349324/">
                <svg
                  width="40" 
                  height="40" 
                  fill="#14191d" 
                  viewBox="0 0 1920 1920" 
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#14191d"
                >
                  <path d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Zm-687.52-.792v1318.918H0V600.53h480.48Zm-120.12 120.12H120.12v1078.678h240.24V720.65Zm687.52.792H835.267v1075.316l243.364 2.162v-580.18c0-226.427 150.51-260.18 240.24-260.18 109.55 0 240.24 45.165 240.24 260.18v580.18l237.117-2.162v-614.174c0-333.334-93.573-457.298-345.585-457.298-151.472 0-217.057 44.925-281.322 98.98l-16.696 14.173H1047.88V721.441ZM240.24 0c132.493 0 240.24 107.748 240.24 240.24 0 132.493-107.747 240.24-240.24 240.24C107.748 480.48 0 372.733 0 240.24 0 107.748 107.748 0 240.24 0Zm0 120.12c-66.186 0-120.12 53.934-120.12 120.12s53.934 120.12 120.12 120.12 120.12-53.934 120.12-120.12-53.934-120.12-120.12-120.12Z" fillRule="evenodd"></path> 
                </svg>
              </a>
            </li>
            <li>
              <a href="https://github.com/mario8q">
                <svg width="33" height="33" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.0744 2.9938C4.13263 1.96371 4.37869 1.51577 5.08432 1.15606C5.84357 0.768899 7.04106 0.949072 8.45014 1.66261C9.05706 1.97009 9.11886 1.97635 10.1825 1.83998C11.5963 1.65865 13.4164 1.65929 14.7213 1.84164C15.7081 1.97954 15.7729 1.97265 16.3813 1.66453C18.3814 0.651679 19.9605 0.71795 20.5323 1.8387C20.8177 2.39812 20.8707 3.84971 20.6494 5.04695C20.5267 5.71069 20.5397 5.79356 20.8353 6.22912C22.915 9.29385 21.4165 14.2616 17.8528 16.1155C17.5801 16.2574 17.3503 16.3452 17.163 16.4167C16.5879 16.6363 16.4133 16.703 16.6247 17.7138C16.7265 18.2 16.8491 19.4088 16.8973 20.4002C16.9844 22.1922 16.9831 22.2047 16.6688 22.5703C16.241 23.0676 15.6244 23.076 15.2066 22.5902C14.9341 22.2734 14.9075 22.1238 14.9075 20.9015C14.9075 19.0952 14.7095 17.8946 14.2417 16.8658C13.6854 15.6415 14.0978 15.185 15.37 14.9114C17.1383 14.531 18.5194 13.4397 19.2892 11.8146C20.0211 10.2698 20.1314 8.13501 18.8082 6.83668C18.4319 6.3895 18.4057 5.98446 18.6744 4.76309C18.7748 4.3066 18.859 3.71768 18.8615 3.45425C18.8653 3.03823 18.8274 2.97541 18.5719 2.97541C18.4102 2.97541 17.7924 3.21062 17.1992 3.49805L16.2524 3.95695C16.1663 3.99866 16.07 4.0147 15.975 4.0038C13.5675 3.72746 11.2799 3.72319 8.86062 4.00488C8.76526 4.01598 8.66853 3.99994 8.58215 3.95802L7.63585 3.49882C7.04259 3.21087 6.42482 2.97541 6.26317 2.97541C5.88941 2.97541 5.88379 3.25135 6.22447 4.89078C6.43258 5.89203 6.57262 6.11513 5.97101 6.91572C5.06925 8.11576 4.844 9.60592 5.32757 11.1716C5.93704 13.1446 7.4295 14.4775 9.52773 14.9222C10.7926 15.1903 11.1232 15.5401 10.6402 16.9905C10.26 18.1319 10.0196 18.4261 9.46707 18.4261C8.72365 18.4261 8.25796 17.7821 8.51424 17.1082C8.62712 16.8112 8.59354 16.7795 7.89711 16.5255C5.77117 15.7504 4.14514 14.0131 3.40172 11.7223C2.82711 9.95184 3.07994 7.64739 4.00175 6.25453C4.31561 5.78028 4.32047 5.74006 4.174 4.83217C4.09113 4.31822 4.04631 3.49103 4.0744 2.9938Z" fill="#14191D"></path> <path d="M3.33203 15.9454C3.02568 15.4859 2.40481 15.3617 1.94528 15.6681C1.48576 15.9744 1.36158 16.5953 1.66793 17.0548C1.8941 17.3941 2.16467 17.6728 2.39444 17.9025C2.4368 17.9449 2.47796 17.9858 2.51815 18.0257C2.71062 18.2169 2.88056 18.3857 3.05124 18.5861C3.42875 19.0292 3.80536 19.626 4.0194 20.6962C4.11474 21.1729 4.45739 21.4297 4.64725 21.5419C4.85315 21.6635 5.07812 21.7352 5.26325 21.7819C5.64196 21.8774 6.10169 21.927 6.53799 21.9559C7.01695 21.9877 7.53592 21.998 7.99999 22.0008C8.00033 22.5527 8.44791 23.0001 8.99998 23.0001C9.55227 23.0001 9.99998 22.5524 9.99998 22.0001V21.0001C9.99998 20.4478 9.55227 20.0001 8.99998 20.0001C8.90571 20.0001 8.80372 20.0004 8.69569 20.0008C8.10883 20.0026 7.34388 20.0049 6.67018 19.9603C6.34531 19.9388 6.07825 19.9083 5.88241 19.871C5.58083 18.6871 5.09362 17.8994 4.57373 17.2891C4.34391 17.0194 4.10593 16.7834 3.91236 16.5914C3.87612 16.5555 3.84144 16.5211 3.80865 16.4883C3.5853 16.265 3.4392 16.1062 3.33203 15.9454Z" fill="#14191D"></path> </g></svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/mariosanta31/?hl=es">
              <svg width="35px" height="35px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#14191D" stroke-width="12" d="M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z"></path><circle cx="96" cy="96" r="30" stroke="#14191D" stroke-width="12"></circle><circle cx="135" cy="57" r="9" fill="#14191D"></circle></g></svg>
              </a>
            </li>
          </ul>
        </section>

        <section className="bg-brightMode flex flex-col justify-center items-center py-10">
          <div className="flex items-center mb-10">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#14191D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z" stroke="#14191D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            <h1 className="text-darkMode text-5xl font-bold ml-4">Mis proyectos</h1>
          </div>
          <Accordion />
        </section>

        <section className="bg-brightMode flex flex-col justify-center items-center py-44">
          <div className="flex items-center mb-10">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 9L12 4L2 9L6.73684 11.3684M22 9L17.2632 11.3684M22 9V17M22 9H12M6.73684 11.3684L6.12815 16.8466C6.05115 17.5396 6.4143 18.2072 7.03794 18.519C10.1616 20.0809 13.8384 20.0809 16.9621 18.519C17.5857 18.2072 17.9488 17.5396 17.8718 16.8466L17.2632 11.3684M6.73684 11.3684L12 14L17.2632 11.3684" stroke="#14191D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <h1 className="text-darkMode text-5xl font-bold ml-4">Experiencia</h1>
          </div>
          <aside className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-darkMode mb-4">
                Experiencia Académica
              </h2>
              <ol className="relative border-l border-darkMode dark:border-brightMode">
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-brightTitle rounded-full mt-1.5 -left-1.5 border border-darkMode dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                    Septiembre 2009
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Colegio San Francisco de Asis - San Juan de Pasto
                  </h3>
                  <p className="mb-4 text-base font-normal text-darkText dark:text-gray-400">
                    Aprendí a diseñar interfaces utilizando Tailwind CSS con varios componentes como dashboards, gráficos y calendarios.
                  </p>
                </li>
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-brightTitle rounded-full mt-1.5 -left-1.5 border border-darkMode dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                    Agosto 2022
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Universidad Cooperativa de Colombia campus Pasto
                  </h3>
                  <p className="text-base font-normal text-darkText dark:text-gray-400">
                    Realicé diseños de interfaces en Figma, manteniendo paridad con implementaciones en Tailwind.
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
                    Desarrollé componentes interactivos para una aplicación de E-Commerce utilizando Tailwind CSS.
                  </p>
                </li>
              </ol>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-darkMode mb-4">
                Experiencia Laboral
              </h2>
              <ol className="relative border-l border-darkMode dark:border-brightMode ">
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-brightTitle rounded-full mt-1.5 -left-1.5 border border-darkMode dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                    Fecha futura
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Aún sin experiencia laboral
                  </h3>
                  <p className="text-base font-normal text-darkText dark:text-gray-400">
                    Actualizaré esta sección con futuras experiencias profesionales.
                  </p>
                </li>
              </ol>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}
