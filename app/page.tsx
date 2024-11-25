"use client";
import { useEffect } from 'react';
import Accordion from '@/components/Accordion';
import ThemeSwitch from '@/components/ThemeSwitch';
import Carousel from '@/components/Carousel';
import MisStacks from '@/components/MisStacks';
import MisStacksPlus from '@/components/MisStacksPlus';
import Experiencia from '@/components/Experiencia';
import AboutMe from '@/components/AboutMe';
import ContactMe from '@/components/ContactMe';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    import('flowbite');
  }, []);

  return (
    <>
      <header id='inicio'>
        <nav className="bg-darkMode text-brightText p-4 flex flex-wrap justify-center sm:gap-2 md:gap-x-10 fixed w-full top-0 z-50">
          <a href="#inicio" className="py-2">Inicio</a>
          <a href="#sobre-mi" className="py-2">Sobre mí</a>
          <a href="#mis-proyectos" className="py-2">Mis Proyectos</a>
          <a href="#experiencia" className="py-2">Experiencia</a>
          <a href="#mis-hobbies" className="py-2">Mis Hobbies</a>
          <a href="#mis-stacks" className="py-2">Mis stacks</a>
          <a href="#contactame" className="py-2">Contactame</a>
          <div className=''>
            <ThemeSwitch />
          </div>
        </nav>
        <section className="relative h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            <div className="bg-brightMode dark:bg-darkMode"></div>
            <div className="bg-darkMode dark:bg-brightMode"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/myimage.jpg"
              alt="Mi imagen MS"
              className="object-cover rounded-lg sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96"
              width={500}
              height={500}
            />
            <h1 className="absolute text-outline text-6xl md:text-8xl lg:text-9xl font-bold text-center z-10">
              SOFTWARE ENGINEER
            </h1>
          </div>
        </section>
      </header>

      <main className='min-h-screen w-full overflow-x-hidden bg-brightMode'>
        <section id='sobre-mi'>
          <AboutMe />
        </section>

        <section id='mis-proyectos' className="bg-brightMode flex flex-col justify-center items-center py-20 dark:bg-darkMode">
          <div className="flex items-center mb-10">
          <svg
            className="fill-current text-darkMode dark:text-brightMode"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.2788 2.15224C13.9085 2 13.439 2 12.5 2C11.561 2 11.0915 2 10.7212 2.15224C10.2274 2.35523 9.83509 2.74458 9.63056 3.23463C9.53719 3.45834 9.50065 3.7185 9.48635 4.09799C9.46534 4.65568 9.17716 5.17189 8.69017 5.45093C8.20318 5.72996 7.60864 5.71954 7.11149 5.45876C6.77318 5.2813 6.52789 5.18262 6.28599 5.15102C5.75609 5.08178 5.22018 5.22429 4.79616 5.5472C4.47814 5.78938 4.24339 6.1929 3.7739 6.99993C3.30441 7.80697 3.06967 8.21048 3.01735 8.60491C2.94758 9.1308 3.09118 9.66266 3.41655 10.0835C3.56506 10.2756 3.77377 10.437 4.0977 10.639C4.57391 10.936 4.88032 11.4419 4.88029 12C4.88026 12.5581 4.57386 13.0639 4.0977 13.3608C3.77372 13.5629 3.56497 13.7244 3.41645 13.9165C3.09108 14.3373 2.94749 14.8691 3.01725 15.395C3.06957 15.7894 3.30432 16.193 3.7738 17C4.24329 17.807 4.47804 18.2106 4.79606 18.4527C5.22008 18.7756 5.75599 18.9181 6.28589 18.8489C6.52778 18.8173 6.77305 18.7186 7.11133 18.5412C7.60852 18.2804 8.2031 18.27 8.69012 18.549C9.17714 18.8281 9.46533 19.3443 9.48635 19.9021C9.50065 20.2815 9.53719 20.5417 9.63056 20.7654C9.83509 21.2554 10.2274 21.6448 10.7212 21.8478C11.0915 22 11.561 22 12.5 22C13.439 22 13.9085 22 14.2788 21.8478C14.7726 21.6448 15.1649 21.2554 15.3694 20.7654C15.4628 20.5417 15.4994 20.2815 15.5137 19.902C15.5347 19.3443 15.8228 18.8281 16.3098 18.549C16.7968 18.2699 17.3914 18.2804 17.8886 18.5412C18.2269 18.7186 18.4721 18.8172 18.714 18.8488C19.2439 18.9181 19.7798 18.7756 20.2038 18.4527C20.5219 18.2105 20.7566 17.807 21.2261 16.9999C21.6956 16.1929 21.9303 15.7894 21.9827 15.395C22.0524 14.8691 21.9088 14.3372 21.5835 13.9164C21.4349 13.7243 21.2262 13.5628 20.9022 13.3608C20.4261 13.0639 20.1197 12.558 20.1197 11.9999C20.1197 11.4418 20.4261 10.9361 20.9022 10.6392C21.2263 10.4371 21.435 10.2757 21.5836 10.0835C21.9089 9.66273 22.0525 9.13087 21.9828 8.60497C21.9304 8.21055 21.6957 7.80703 21.2262 7C20.7567 6.19297 20.522 5.78945 20.2039 5.54727C19.7799 5.22436 19.244 5.08185 18.7141 5.15109C18.4722 5.18269 18.2269 5.28136 17.8887 5.4588C17.3915 5.71959 16.7969 5.73002 16.3099 5.45096C15.8229 5.17191 15.5347 4.65566 15.5136 4.09794C15.4993 3.71848 15.4628 3.45833 15.3694 3.23463C15.1649 2.74458 14.7726 2.35523 14.2788 2.15224ZM12.5 15C14.1695 15 15.5228 13.6569 15.5228 12C15.5228 10.3431 14.1695 9 12.5 9C10.8305 9 9.47716 10.3431 9.47716 12C9.47716 13.6569 10.8305 15 12.5 15Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
            <h1 className="text-darkMode text-5xl font-bold ml-4 dark:text-brightMode">Mis proyectos</h1>
          </div>
          <Accordion />
        </section>

        <section id='experiencia'>
          <Experiencia />
        </section>

        <section id='mis-hobbies'>
          <Carousel />
        </section>

        <section id='mis-stacks'>
          <aside>
            <MisStacks />
          </aside>
          <aside>
            <MisStacksPlus />
          </aside>
        </section>

        <section id='contactame'>
          <ContactMe />
        </section>
      </main>

      <footer className="bg-brightMode dark:bg-darkMode w-full py-1 text-center">
        <div className="relative">
          <div className="h-[2px] bg-gradient-to-r from-brightMode to-darkMode dark:from-darkMode dark:to-brightMode w-4/5 mx-auto transition-all duration-500 ease-in-out hover:w-full"></div>
        </div>
        <h1 className="text-lg text-darkMode dark:text-brightMode py-2">
          Hecho por Mario Santa <strong>ಠ_ಠ</strong>
        </h1>
      </footer>
    </>
  );
}
