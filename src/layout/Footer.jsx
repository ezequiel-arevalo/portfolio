const Footer = () => {
  return (
    <footer
      className="sr-only"
      role="contentinfo"
      aria-label="Información de copyright"
    >
      <small>&copy; {new Date().getFullYear()} Ezequiel Arevalo</small>
    </footer>
  );
};

export default Footer;