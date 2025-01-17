import { Sun, Moon } from 'lucide-react';
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            className="btn btn-ghost btn-circle tooltip tooltip-bottom"
            data-tip="Cambiar tema"
            aria-label={`Cambiar a tema ${theme === "dark" ? "claro" : "oscuro"}`}
        >
            <label className="swap swap-rotate">
                {/* Checkbox para controlar el estado */}
                <input
                    type="checkbox"
                    className="theme-controller"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                    aria-label={`Cambiar a tema ${theme === "dark" ? "claro" : "oscuro"}`}
                />

                {/* Icono de sol */}
                <Sun
                    className="swap-on"
                    aria-hidden="true"
                />

                {/* Icono de luna */}
                <Moon
                    className="swap-off"
                    aria-hidden="true"
                />
            </label>
        </button>
    );
};
