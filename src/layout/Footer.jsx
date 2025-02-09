const Footer = () => {
  return (
    <footer
      className="footer footer-center p-4 text-base-content"
      role="contentinfo"
      aria-label="Información de copyright"
    >
      <small>&copy; {new Date().getFullYear()} Ezequiel Arevalo</small>
    </footer>
  );
};

export default Footer;
