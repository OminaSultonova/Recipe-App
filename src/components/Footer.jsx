// Footer.js
import { Container } from 'react-bootstrap';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';
import '../index.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="social-icons">
          <a href="https://www.facebook.com">
            <Facebook size={30} />
          </a>
          <a href="https://www.twitter.com">
            <Twitter size={30} />
          </a>
          <a href="https://www.instagram.com">
            <Instagram size={30} />
          </a>
        </div>
      </Container>
      <div className="copyright">
        <Container>
          <p>&copy; {currentYear} Yummy Recipes, Omina. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
