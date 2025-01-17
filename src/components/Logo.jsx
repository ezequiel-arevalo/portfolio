import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext"

const Logo = () => {
  // Acceder al tema desde el contexto
  const { theme } = useContext(ThemeContext);

  return (
    <img
      src={theme === "dark" ? "./img/logo-white.svg" : "./img/logo-black.svg"}
      alt="logo"
      width={100}
      height={100}
      className="rounded-full shadow-lg mb-5"
    />
  );
}

export default Logo;
