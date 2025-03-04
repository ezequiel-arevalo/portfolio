export const projects = [
  {
    id: 1,
    name: 'Aragoge',
    synopsis: "Es un marketplace para atletas y profesionales",
    description:
      'Marketplace que conecta atletas con entrenadores, nutricionistas y terapeutas, facilitando la contratación de servicios personalizados y brindando a profesionales una plataforma para gestionar y expandir su negocio.',
    role: 'Dueño',
    destacado: true,
    type: 'Marketplace', // Nueva propiedad: tipo de proyecto
    activity: [
      {
        title: 'Diseño UI/UX',
        subtitle: 'Definición de interfaz y experiencia de usuario.',
      },
      {
        title: 'Maquetación y desarrollo web',
        subtitle: 'Diseño responsive y adaptable.',
      },
      {
        title: 'Accesibilidad y SEO',
        subtitle: 'Verificación de accesibilidad y aplicación de buenas prácticas.',
      },
      {
        title: 'Sistemas de filtrado',
        subtitle: 'Implementación usando Tailwind CSS y Redux.',
      },
    ],
    technologies: [
      { name: 'TailwindCSS' },
      { name: 'React' },
      { name: 'Axios' },
    ],
    image: '/image/aragoge.webp',
    github: 'https://github.com/ezequiel-arevalo/aragoge/',
    deploy: 'https://ezequiel-arevalo.github.io/aragoge/',
  },
  {
    id: 2,
    name: 'Cuevana Games',
    synopsis: "Marketplace donde se venden juegos",
    description: 'Cuevana Games marketplace of games',
    role: 'Colaborador',
    destacado: true,
    type: 'Marketplace', // Nueva propiedad: tipo de proyecto
    activity: [
      {
        title: 'Diseño UI/UX',
        subtitle: 'Definición de interfaz y experiencia de usuario.',
      },
    ],
    technologies: [
      { name: 'TailwindCSS' },
      { name: 'Vue' },
    ],
    image: '/image/cuevana-games.webp',
    github: 'https://github.com/ezequiel-arevalo/CuevanaGames',
    deploy: '',
  },
  {
    id: 3,
    name: 'BookStore',
    synopsis: "BookStore donde se venden juegos",
    description: 'BookStore marketplace of games',
    role: 'Colaborador',
    destacado: true,
    type: 'Marketplace',
    activity: [
      {
        title: 'Diseño UI/UX',
        subtitle: 'Definición de interfaz y experiencia de usuario.',
      },
    ],
    technologies: [
      { name: 'Bootstrap 5' },
      { name: 'Vue' },
    ],
    image: '/image/bookstore.webp',
    github: 'https://github.com/ezequiel-arevalo/bookstore',
    deploy: '',
  },
  {
    id: 4,
    name: 'Mi Vinileria',
    synopsis: "Catalogo de productos",
    description: 'Catalogo de productos',
    role: 'Dueño',
    destacado: false,
    type: 'Catalogo',
    activity: [
      {
        title: 'Diseño UI/UX',
        subtitle: 'Definición de interfaz y experiencia de usuario.',
      },
    ],
    technologies: [
      { name: 'React' },
      { name: 'TailwindCSS' },
    ],
    image: '/image/vinileria.webp',
    github: 'https://github.com/ezequiel-arevalo/vinileria',
    deploy: 'https://github.com/ezequiel-arevalo/vinileria',
  },
];