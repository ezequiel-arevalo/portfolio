import { createContext, useEffect, useState } from "react";

// Crear el contexto para el tema
export const ThemeContext = createContext();

// Proveedor del tema
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light"); // Tema predeterminado

    // Función para alternar entre los temas
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    // Guardar el tema en localStorage y aplicarlo al cargar
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "light";
        setTheme(storedTheme);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
