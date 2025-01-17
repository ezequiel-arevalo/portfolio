import { BookUser, FileUser } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section
            className="h-[80vh] flex flex-col justify-center items-center text-center min-h-screen"
            aria-labelledby="hero-heading"
            aria-describedby="hero-description"
            id="inicio"
        >
            {/* Imagen del perfil */}
            <motion.div
                className="mb-4 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-4 border-[#323232]"
                animate={{
                    boxShadow: [
                        '0px 0px 10px rgba(0, 0, 0, 0.4)',
                        '0px 0px 20px rgba(0, 0, 0, 0.6)',
                        '0px 0px 10px rgba(0, 0, 0, 0.6)',
                        '0px 0px 10px rgba(0, 0, 0, 0.4)',
                    ],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity, // Mantener animación constante
                    repeatType: 'loop',
                    ease: "easeInOut",
                }}
                role="img"
                aria-label="Foto de perfil de Ezequiel Arevalo"
            >
                <motion.img
                    src="./img/logo.webp"
                    alt="Foto de Ezequiel Arevalo"
                    className="w-full h-full object-cover"
                    animate={{
                        rotate: [0, 15, -15, 0], // Rotación de la imagen
                    }}
                    transition={{
                        duration: 2,
                        repeat: 1, // Se ejecuta 2 veces en total
                        ease: "easeInOut",
                    }}
                />
            </motion.div>



            {/* Badge de estado */}
            <span className="bg-[#f1fcf2] rounded-full border border-[#90e5a3] text-[#1f7634] px-4 py-1.5 mb-3 mt-2" role="status" aria-live="polite">
                Disponible
            </span>

            {/* Título y descripción */}
            <h1 className="text-4xl font-bold mb-4">
                ¡Hola! Soy Ezequiel Arevalo
            </h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto text-center">
                Soy <strong className="font-semibold">desarrollador web</strong> enfocado en <strong className="font-semibold">buenas prácticas, rendimiento y mejora continua</strong>, siempre con un enfoque en <strong className="font-semibold">la honestidad y la calidad en cada proyecto</strong>.
            </p>



            {/* Controles interactivos */}
            <div className="flex flex-row gap-2">
                {/* Botón para contacto */}
                <div className="dropdown dropdown-hover">
                    <button
                        id="contact-dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        className="btn m-1 flex items-center gap-2"
                    >
                        Contáctame <BookUser size={20} aria-hidden="true" />
                    </button>
                    <ul
                        role="menu"
                        aria-labelledby="contact-dropdown"
                        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                    >
                        <li>
                            <a
                                href="mailto:ezequiel.thomas.arevalo@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                role="menuitem"
                            >
                                Email
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/ezequiel-arevalo/"
                                target="_blank"
                                rel="noopener noreferrer"
                                role="menuitem"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/ezequiel-arevalo/"
                                target="_blank"
                                rel="noopener noreferrer"
                                role="menuitem"
                            >
                                Github
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Botón para descargar CV */}
                <div className="dropdown dropdown-hover">
                    <button
                        id="cv-dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        className="btn m-1 flex items-center gap-2"
                    >
                        Curriculum <FileUser size={20} aria-hidden="true" />
                    </button>
                    <ul
                        role="menu"
                        aria-labelledby="cv-dropdown"
                        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                    >
                        <li>
                            <a
                                href="./pdf/es/Ezequiel_Arevalo_CV.pdf"
                                role="menuitem"
                            >
                                Español
                            </a>
                        </li>
                        <li>
                            <a
                                href="./pdf/en/Ezequiel_Arevalo_CV.pdf"
                                role="menuitem"
                            >
                                English
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;