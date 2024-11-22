"use client";

import Image from 'next/image';
import { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Videojuegos",
      imgSrc: "/images/tenor.gif",
      alt: "Videojuegos",
      description:
        "Los videojuegos son un pasatiempo que disfruto mucho. Me gusta todo tipo de juegos, desde el triple A, hasta juegos Indie. Pero, mi juego favorito, que de hecho es el primero que jugué aproximadamente en 2008, es Prince of Persia The Two Thrones.",
    },
    {
      title: "Películas y series",
      imgSrc:
        "/images/tenorpelicula.gif",
      alt: "Películas y series",
      description:
        "Ver películas y series, es un pasatiempo que despeja mi mente. Mi género de películas favorito es el suspenso; por otro lado, el género que más me gusta en las series es el drama. No tengo una película favorita, pero me gusta mucho Nocturnal Animals.",
    },
    {
      title: "Parkour",
      imgSrc:
        "/images/tenorpk.gif",
      alt: "PK",
      description:
        "En 2017 con 12 años conocí el Parkour. Una disciplina que se basa en superar obstáculos con tu cuerpo, dure más de 1 año y medio entrenando. A día de hoy me gustaría seguir practicándolo, pero por algunas cuestiones lo he dejado a un lado.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <section className="bg-brightMode flex flex-col justify-center items-center py-24 dark:bg-darkMode">
      <div className="flex items-center mb-10">
        <svg
          className="fill-current text-darkMode dark:text-brightMode"
          width="64"
          height="64"
          version="1.1"
          id="Icons"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 32 32"
          xmlSpace="preserve"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M24,25.6V22c0-0.9-0.4-1.8-1.2-2.4l-3.7-2.8c-0.3-0.2-0.4-0.5-0.4-0.8s0.1-0.6,0.4-0.8l3.7-2.8c0.8-0.6,1.2-1.5,1.2-2.4V6.4 c1.2-0.7,2-2,2-3.4c0-0.6-0.4-1-1-1H7C6.4,2,6,2.4,6,3c0,1.5,0.8,2.7,2,3.4V10c0,0.9,0.4,1.8,1.2,2.4l3.7,2.8 c0.3,0.2,0.4,0.5,0.4,0.8s-0.1,0.6-0.4,0.8l-3.7,2.8C8.4,20.2,8,21.1,8,22v3.6c-1.2,0.7-2,2-2,3.4c0,0.6,0.4,1,1,1h18 c0.6,0,1-0.4,1-1C26,27.5,25.2,26.3,24,25.6z M12.4,10.8c-0.4-0.2-0.5-0.7-0.4-1.1C12.2,9.3,12.6,9,13,9h6c0.4,0,0.8,0.3,1,0.7 c0.1,0.4,0,0.9-0.4,1.1l-3,2C16.4,12.9,16.2,13,16,13s-0.4-0.1-0.6-0.2L12.4,10.8z M15.3,20.3c0.4-0.4,1-0.4,1.4,0l4.7,4.7H10.6 L15.3,20.3z"></path>
          </g>
        </svg>
          <h1 className="text-darkMode text-5xl font-bold ml-4 dark:text-brightMode">Mis hobbies</h1>
      </div>

      <div className="relative w-full md:w-3/4 mx-auto">
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden rounded-lg">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item flex justify-center items-center absolute w-full transition-all duration-700 ease-in-out ${
                index === currentIndex ? "block" : "hidden"
              }`}
            >
              <div className="bg-brightTitle dark:bg-darkText p-8 rounded-lg shadow-lg text-center w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
                <Image
                  src={slide.imgSrc}
                  alt={slide.alt}
                  className="w-full h-56 sm:h-64 md:h-72 object-cover rounded mb-6"
                  width={1}
                  height={56}
                />
                <h3 className="text-3xl font-bold text-darkMode dark:text-brightMode mb-4">
                  {slide.title}
                </h3>
                <p className="text-gray-600 dark:text-brightTitle">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute z-30 flex justify-center space-x-3 bottom-4 w-full">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-darkText" : "bg-brightTitle"
              }`}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <button
          type="button"
          className="absolute top-1/2 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none transform -translate-y-1/2"
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-6 h-6 text-brightTitle dark:text-darkText"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </span>
        </button>

        <button
          type="button"
          className="absolute top-1/2 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none transform -translate-y-1/2"
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-brightTitle dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-6 h-6 text-brightTitle dark:text-darkText"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
