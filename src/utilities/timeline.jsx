import { BookOpen, Calendar } from "lucide-react";

export const education = [
  {
    date: "(2015 - 2020)",
    title: "Instituto Megly (Educación Secundaria)",
    content: (
      <p>Bachiller en economía y administración</p>
    ),
    icon: <BookOpen className="w-4 h-4 text-white" />
  },
  {
    date: "(2022 - 2024)",
    title: "Escuela Da Vinci Educación Universitaria o superior",
    content: (
      <ul className="list-disc ml-5">
        <li>Técnico Superior en Diseño y Programación Web</li>
        <li>Gestión de Medios Digitales</li>
        <li>Asistente en Desarollo y Nuevos Negocios Digitales</li>
      </ul>
    ),
    icon: <BookOpen className="w-4 h-4 text-white" />
  }
];

export const experience = [
  {
    date: "2025",
    title: "Freelance",
    content: (
      <p>
        Contribución a proyectos open source, proyectos propios.
      </p>
    ),
    icon: <Calendar className="w-4 h-4 text-white" />
  }
];