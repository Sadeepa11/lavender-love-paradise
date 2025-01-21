
import '../assets/css/Footer.css';  // You'll need to create this CSS file



const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            {/* Add your logo image here */}
            {/* <img src="/src/assets/Logo/devLogo.png" alt="Modulavers Systems Logo" className='logo' /> */}
          </div>
          <div className="footer-text">
            © {currentYear} All Rights Reserved | Developed by{' '}
            <a className="developer-name" href='https://modulaverssystemscom.vercel.app/'  >Modulavers Systems</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;