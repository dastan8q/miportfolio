export type Locale = 'es' | 'en';

export const defaultLocale: Locale = 'es';

export const projectIds = [
  'todo-app',
  'Tecnologica',
  'JustWork',
  'PickurFit',
] as const;

export type ProjectId = (typeof projectIds)[number];

export type ExperienceItem = {
  date: string;
  title: string;
  description: string;
};

export type HobbySlide = {
  title: string;
  alt: string;
  description: string;
};

const es = {
  meta: {
    title: 'Mario Santacruz | Ingeniero de software',
    description: 'Estudiante de ingenieria de software con metas.',
  },
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    projects: 'Mis Proyectos',
    experience: 'Experiencia',
    hobbies: 'Mis Hobbies',
    stacks: 'Mis stacks',
    contact: 'Contactame',
  },
  languageSwitch: {
    switchTo: 'Cambiar a inglés',
  },
  hero: {
    title: 'INGENIERO DE SOFTWARE',
  },
  footer: {
    madeBy: 'Hecho por Mario Santa',
  },
  about: {
    heading: '¡Hola! soy Mario Santacruz',
    tagline: [
      'Ingeniero de software con enfoque en desarrollo backend',
      'que resuelve problemas de manera eficiente buscando soluciones creativas',
      'que impulsan proyectos innovadores',
    ],
  },
  projects: {
    heading: 'Mis proyectos',
    itemLabel: 'Proyecto',
    imageAltPrefix: 'Imagen del proyecto',
    sourceCode: 'Source code',
    demo: 'Demo',
    descriptions: {
      'todo-app':
        'Todo-app es una herramienta de lista de tareas por hacer, con categorias para llevar orden de cada tarea.',
      Tecnologica:
        'Una plataforma web de venta de cursos online relacionados con la tecnología, con distintas funciones que contemplan un CRUD con varios modelos, interfaces, clases, etc. Donde se aplica muchos conceptos de POO.',
      JustWork:
        'Just Work! es una aplicación web de redes profesionales, definida para tener una fácil conexión entre profesionales que buscan trabajo y empresas que ofrecen esos empleos.',
      PickurFit:
        'PickurFit es una aplicación web que facilita el proceso de generar atuendos en el día a día según diferentes parámetros como el clima, los gustos del usuario, colores, etc... incorpora redes neuronales para la generación, dashboard, calendario, armario, recomendador de prendas, chatbot, entre más funcionalidades.',
    } as Record<ProjectId, string>,
  },
  experience: {
    heading: 'Experiencia',
    academicHeading: 'Experiencia Académica',
    workHeading: 'Experiencia Laboral',
    academic: [
      {
        date: 'Julio 2026',
        title: 'Universidad Cooperativa de Colombia',
        description:
          'Me gradué como Ingeniero de Software con mención de honor por tener el mejor promedio de la carrera, fue un camino de aprendizaje que me dio las bases para resolver problemas a través del software de manera ética y responsable.',
      },
      {
        date: 'Agosto 2021',
        title: 'Cambridge Academy - San Juan de Pasto',
        description:
          'Me forme en una academia de ingles donde presente un examen internacional con calificaciones de B2 y C1 en los diferentes modulos de ingles.',
      },
      {
        date: 'Septiembre 2009',
        title: 'Colegio San Francisco de Asis - San Juan de Pasto',
        description:
          'Estudie toda la primaria y bachillerato en el Colegio San Francisco de asis donde aprendí a ser más y mejor persona.',
      },
    ] as ExperienceItem[],
    work: [
      {
        date: 'Abril 2026',
        title: 'Ingeniero backend en Sipyme',
        description:
          'Participé en el desarrollo de una aplicación web ERP llamada Sipyme, enfocada en pequeñas y medianas empresas. Me enfoqué en el backend con Django REST framework y PostgreSQL, utilicé patrones de diseño, realicé pruebas unitarias, documenté APIs y realicé el control de versiones con Git y GitHub.',
      },
      {
        date: 'Diciembre 2025',
        title: 'Mentor en programación con Python',
        description:
          'Enseñé las bases de programación para estudiantes de Latinoamérica inscritos al programa PYLATINO, organizado por Uniandes en colaboración con Stanford. Hice el seguimiento de estudiantes asignados a una clase en la plataforma Code in Place.',
      },
    ] as ExperienceItem[],
  },
  hobbies: {
    heading: 'Mis hobbies',
    slideLabel: 'Diapositiva',
    slides: [
      {
        title: 'Videojuegos',
        alt: 'Videojuegos',
        description:
          'Los videojuegos son un pasatiempo que disfruto mucho. Me gusta todo tipo de juegos, desde el triple A, hasta juegos Indie. Pero, mi juego favorito, que de hecho es el primero que jugué aproximadamente en 2008, es Prince of Persia The Two Thrones.',
      },
      {
        title: 'Películas y series',
        alt: 'Películas y series',
        description:
          'Ver películas y series, es un pasatiempo que despeja mi mente. Mi género de películas favorito es el suspenso; por otro lado, el género que más me gusta en las series es el drama. No tengo una película favorita, pero me gusta mucho Nocturnal Animals.',
      },
      {
        title: 'Parkour',
        alt: 'PK',
        description:
          'En 2017 con 12 años conocí el Parkour. Una disciplina que se basa en superar obstáculos con tu cuerpo, dure más de 1 año y medio entrenando. A día de hoy me gustaría seguir practicándolo, pero por algunas cuestiones lo he dejado a un lado.',
      },
    ] as HobbySlide[],
  },
  stacks: {
    heading: 'Mis stacks',
    learningHeading: 'Stacks en proceso de aprender',
  },
  contact: {
    heading: 'Contáctame',
    socialHeading: 'Mis redes sociales',
    body: '¡Ahora que visitaste mi portafilio! Si tienes preguntas, proyectos nuevos o simplemente quieres hablar conmigo, no dudes en contactarme por estos medios.',
    whatsapp: 'Escríbeme por WhatsApp',
  },
};

export type Dictionary = typeof es;

const en: Dictionary = {
  meta: {
    title: 'Mario Santacruz | Software Engineer',
    description: 'Software engineering student with goals.',
  },
  nav: {
    home: 'Home',
    about: 'About me',
    projects: 'My Projects',
    experience: 'Experience',
    hobbies: 'My Hobbies',
    stacks: 'My stacks',
    contact: 'Contact me',
  },
  languageSwitch: {
    switchTo: 'Switch to Spanish',
  },
  hero: {
    title: 'SOFTWARE ENGINEER',
  },
  footer: {
    madeBy: 'Made by Mario Santa',
  },
  about: {
    heading: "Hi! I'm Mario Santacruz",
    tagline: [
      'Software engineer focus in backend development',
      'who solves problems efficiently seeking creative solutions',
      'that drive innovative projects',
    ],
  },
  projects: {
    heading: 'My projects',
    itemLabel: 'Project',
    imageAltPrefix: 'Image of the project',
    sourceCode: 'Source code',
    demo: 'Demo',
    descriptions: {
      'todo-app':
        'Todo-app is a to-do list tool with categories to keep every task organized.',
      Tecnologica:
        'A web platform for selling online technology courses, with features that include a CRUD with several models, interfaces, classes and more, applying many OOP concepts.',
      JustWork:
        'Just Work! is a professional networking web application, designed to make it easy to connect professionals looking for work with companies offering those jobs.',
      PickurFit:
        'PickurFit is a web application that streamlines generating everyday outfits based on different parameters such as the weather, the user preference, colors and more... it incorporates neural networks for generation, a dashboard, calendar, wardrobe, clothing recommender, chatbot, among other features.',
    },
  },
  experience: {
    heading: 'Experience',
    academicHeading: 'Academic experience',
    workHeading: 'Work experience',
    academic: [
      {
        date: 'July 2026',
        title: 'Universidad Cooperativa de Colombia',
        description:
          'I graduated as a Software Engineer with an honorary mention for having the best GPA of my program. It was a learning journey that gave me the foundations to solve problems through software in an ethical and responsible way.',
      },
      {
        date: 'August 2021',
        title: 'Cambridge Academy - San Juan de Pasto',
        description:
          'I trained at an English academy where I took an international exam, scoring B2 and C1 across the different English modules.',
      },
      {
        date: 'September 2009',
        title: 'Colegio San Francisco de Asis - San Juan de Pasto',
        description:
          'I studied all of elementary and high school at Colegio San Francisco de Asis, where I learned to be a better person.',
      },
    ],
    work: [
      {
        date: 'April 2026',
        title: 'Backend engineer at Sipyme',
        description:
          'I took part in the development of a web ERP application called Sipyme, focused on small and medium-sized businesses. I worked on the backend with Django REST framework and PostgreSQL, applied design patterns, wrote unit tests, documented APIs and handled version control with Git and GitHub.',
      },
      {
        date: 'December 2025',
        title: 'Programming mentor with Python',
        description:
          'I taught the fundamentals of programming to students from across Latin America enrolled in the PYLATINO program, organized by Uniandes in collaboration with Stanford. I tracked the students assigned to a class on the Code in Place platform.',
      },
    ],
  },
  hobbies: {
    heading: 'My hobbies',
    slideLabel: 'Slide',
    slides: [
      {
        title: 'Video games',
        alt: 'Video games',
        description:
          'Video games are a hobby I really enjoy. I like all kinds of games, from AAA titles to indie games. But my favorite one, which is actually the first game I ever played back in 2008, is Prince of Persia: The Two Thrones.',
      },
      {
        title: 'Movies and series',
        alt: 'Movies and series',
        description:
          'Watching movies and series is a hobby that clears my mind. My favorite movie genre is thriller; on the other hand, the genre I enjoy most in series is drama. I do not have a favorite movie, but I really like Nocturnal Animals.',
      },
      {
        title: 'Parkour',
        alt: 'PK',
        description:
          'I discovered Parkour in 2017 when I was 12. A discipline based on overcoming obstacles with your body; I trained for more than a year and a half. Today I would like to keep practicing it, but for various reasons I have set it aside.',
      },
    ],
  },
  stacks: {
    heading: 'My stacks',
    learningHeading: "Stacks I'm learning",
  },
  contact: {
    heading: 'Contact me',
    socialHeading: 'My social networks',
    body: 'Now that you have visited my portfolio! If you have questions, new projects, or simply want to talk with me, do not hesitate to reach out through these channels.',
    whatsapp: 'Message me on WhatsApp',
  },
};

export const dictionaries: Record<Locale, Dictionary> = { es, en };

export function isLocale(value: unknown): value is Locale {
  return value === 'es' || value === 'en';
}
