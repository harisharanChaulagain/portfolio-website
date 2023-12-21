import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-main">
      <p>&copy; {currentYear} Hari Sharan Chaulagain. </p>
      <hr />
    </footer>
  );
};

export default Footer;
