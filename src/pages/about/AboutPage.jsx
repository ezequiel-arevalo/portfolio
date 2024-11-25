import { Book, Hammer, Brain, Package, Trophy, Globe, GraduationCap, Lightbulb, MessageCircle, School, Star } from 'lucide-react';

export const AboutPage = () => {
    return (
        <section className="bg-ghost text-ghost-content">
            <div className="container mx-auto px-4 py-12 max-w-4xl">

                {/* Encabezado Principal */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl font-semibold mb-4 mt-8">Sobre Mi</h1>
                    <div className="divider"></div>
                </div>

                {/* Frase propia de introducción */}
                <section className="text-center mb-8">
                    <blockquote className="text-lg italic font-medium">
                        "Eres tu repositorio principal: Reduce las dependencias, actualízate constantemente y no dejes de crecer."
                    </blockquote>
                    <cite className="block mt-4 text-sm text-gray-500">— Frase propia: reflexión sobre la vida y la programación.</cite>
                </section>

                <section className="mb-16">
                    <div className="flex items-center gap-2 mb-6">
                        <Brain className="w-6 h-6" />
                        <h2 className="text-2xl font-semibold">Habilidades</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="card bg-ghost shadow-lg">
                            <div className="card-body">
                                <h3 className="card-title flex items-center gap-2">
                                    <Lightbulb className="w-5 h-5" />
                                    Técnicas
                                </h3>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Frontend: React, JavaScript, HTML/CSS, Tailwind CSS.</li>
                                    <li>Herramientas: Git, Figma, herramientas de diseño UI/UX.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card bg-ghost shadow-lg">
                            <div className="card-body">
                                <h3 className="card-title flex items-center gap-2">
                                    <Star className="w-5 h-5" />
                                    Blandas
                                </h3>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Autocrítica y enfoque en la mejora continua.</li>
                                    <li>Capacidad de aprendizaje autodidacta.</li>
                                    <li>Colaboración en proyectos grupales y buena comunicación.</li>
                                    <li>Motivación por resolver problemas y facilitar procesos.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-16">
                    <div className="flex items-center gap-2 mb-6">
                        <School className="w-6 h-6" />
                        <h2 className="text-2xl font-semibold text-center">Educación y Planes Futuros</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-8">
                            <div className="card bg-ghost shadow-lg">
                                <div className="card-body min-h-[200px]">
                                    <h3 className="card-title flex items-center gap-2">
                                        <GraduationCap className="w-5 h-5" />
                                        Estudios Actuales
                                    </h3>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Técnico Superior en Diseño y Programación Web</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card bg-ghost shadow-lg">
                                <div className="card-body min-h-[200px]">
                                    <h3 className="card-title flex items-center gap-2">
                                        <Trophy className="w-5 h-5" />
                                        Certificaciones
                                    </h3>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Profesional en Gestión de Medios Digitales</li>
                                        <li>Asistente en Desarrollo y Nuevos Negocios Digitales</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="card bg-ghost shadow-lg">
                                <div className="card-body min-h-[200px]">
                                    <h3 className="card-title flex items-center gap-2">
                                        <Book className="w-5 h-5" />
                                        Libros Recomendados
                                    </h3>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Clean Code - Robert C. Martin</li>
                                        <li>Design Patterns - Gang of Four</li>
                                        <li>The Pragmatic Programmer</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card bg-ghost shadow-lg">
                                <div className="card-body min-h-[200px]">
                                    <h3 className="card-title flex items-center gap-2">
                                        <Globe className="w-5 h-5" />
                                        Idiomas
                                    </h3>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Español - Nativo</li>
                                        <li>Inglés - Básico (A1)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Este div ahora ocupa el espacio de dos columnas */}
                        <div className="card bg-ghost shadow-lg w-full md:col-span-2">
                            <div className="card-body min-h-[200px]">
                                <h3 className="card-title flex items-center gap-2">
                                    <Globe className="w-5 h-5" />
                                    Cursos realizados
                                </h3>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>
                                        <a
                                            href="https://cursos.devtalles.com/certificates/xftag3xxzq"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline">
                                            Visual Studio Code: Mejora tu velocidad para codificar
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://cursos.devtalles.com/certificates/gtctx0xz4m"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline">
                                            JavaScript Moderno: Guía para dominar el lenguaje
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://cursos.devtalles.com/certificates/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline">
                                            GIT + GitHub: Todo un sistema de control de versiones de cero
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://cursos.devtalles.com/certificates/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline">
                                            TypeScript: Tu completa guía y manual de mano.
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://cursos.devtalles.com/certificates/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline">
                                            React: De cero a experto ( Hooks y MERN )
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://cursos.devtalles.com/certificates/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline">
                                            React PRO: Lleva tus bases al siguiente nivel
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Nueva sección de Herramientas y Recursos */}
                <section className="mb-16">
                    <div className="flex items-center gap-2 mb-6">
                        <Hammer className="w-6 h-6" aria-hidden="true" />
                        <h2 className="text-2xl font-semibold">Herramientas y Recursos</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Herramientas de Desarrollo */}
                        <article className="card bg-ghost shadow-lg">
                            <div className="card-body">
                                <h3 className="card-title flex items-center gap-2">
                                    <Package className="w-5 h-5" aria-hidden="true" />
                                    Herramientas de Desarrollo
                                </h3>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>
                                        <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" className="underline">
                                            Figma - Diseño UI/UX colaborativo y creación de prototipos.
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://miro.com/" target="_blank" rel="noopener noreferrer" className="underline">
                                            Miro - Pizarra colaborativa en línea para diagramas y brainstorming.
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://trello.com/" target="_blank" rel="noopener noreferrer" className="underline">
                                            Trello - Gestión de proyectos con tableros, listas y tarjetas.
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://slack.com/" target="_blank" rel="noopener noreferrer" className="underline">
                                            Slack - Comunicación y colaboración en equipo en tiempo real.
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </article>

                        {/* Recursos Educativos */}
                        <article className="card bg-ghost shadow-lg">
                            <div className="card-body">
                                <h3 className="card-title flex items-center gap-2">
                                    <Book className="w-5 h-5" aria-hidden="true" />
                                    Recursos Educativos
                                </h3>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>
                                        <a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer" className="underline">
                                            MDN Web Docs - Documentación completa sobre tecnologías web.
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://roadmap.sh/" target="_blank" rel="noopener noreferrer" className="underline">
                                            RoadMap.sh - Mapas de ruta interactivos para aprender tecnologías de desarrollo web.
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.frontendmentor.io/" target="_blank" rel="noopener noreferrer" className="underline">
                                            Frontend Mentor - Desafíos para mejorar tus habilidades en diseño y desarrollo frontend.
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="underline">
                                            LeetCode - Plataforma para mejorar tus habilidades de programación a través de retos de algoritmos.
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </div>
                </section>

                {/* Preguntas Frecuentes (FAQ) */}
                <section className="mb-16">
                    <div className="flex items-center gap-2 mb-6">
                        <MessageCircle className="w-6 h-6" aria-hidden="true" />
                        <h2 className="text-2xl font-semibold">Preguntas Frecuentes</h2>
                    </div>

                    <div className="space-y-4">
                        <div className="collapse collapse-plus bg-ghost shadow-lg">
                            <input type="radio" name="my-accordion" />
                            <div className="collapse-title text-xl font-medium">
                                ¿En que estas trabajando actualmente?
                            </div>
                            <div className="collapse-content">
                                <p className="mt-2">
                                    Actualmente, me encuentro reforzando mis bases de programación y mi lógica, con el objetivo de enfrentar nuevos retos con mayor facilidad en el futuro. Además, estoy realizando proyectos de manera constante y activa, y tengo la intención de lanzar próximamente startups basadas en mis proyectos.
                                </p>
                            </div>
                        </div>

                        <div className="collapse collapse-plus bg-ghost shadow-lg">
                            <input type="radio" name="my-accordion" />
                            <div className="collapse-title text-xl font-medium">
                                ¿Qué te motiva en tu carrera?
                            </div>
                            <div className="collapse-content">
                                <p className="mt-2">
                                    Me motiva aprender cosas nuevas, resolver problemas y facilitar la vida de las personas a través de la tecnología.
                                    Crear herramientas que sean útiles y accesibles es mi mayor objetivo.
                                </p>
                            </div>
                        </div>

                        <div className="collapse collapse-plus bg-ghost shadow-lg">
                            <input type="radio" name="my-accordion" />
                            <div className="collapse-title text-xl font-medium">
                                ¿Qué te gustaría estudiar mas adelante?
                            </div>
                            <div className="collapse-content">
                                <p className="mt-2">
                                    Me gustaría continuar mi formación en áreas como Análisis de Sistemas o Ingeniería en Sistemas.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </section>
    );
};
