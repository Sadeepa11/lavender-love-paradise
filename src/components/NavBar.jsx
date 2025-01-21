import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Track mobile view
  const location = useLocation();

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle window resize to detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navStyles = {
    nav: {
      position: 'sticky',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: isScrolled ? 'white' : 'transparent',
      boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
      transition: 'all 0.3s ease',
      zIndex: 1000,
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#8B5CF6',
      textDecoration: 'none',
    },
    link: {
      color: '#8B5CF6',
      textDecoration: 'none',
      padding: '8px 16px',
      borderRadius: '4px',
      transition: 'all 0.2s ease',
      fontWeight: 500,
    },
    activeLink: {
      backgroundColor: 'rgba(139, 92, 246, 0.1)',
      color: '#6D28D9',
    },
    menuButton: {
      background: 'none',
      border: 'none',
      color: '#8B5CF6',
      cursor: 'pointer',
      padding: '8px',
    },
    mobileNav: {
      display: isOpen ? 'flex' : 'none',
      flexDirection: 'column',
      position: 'absolute',
      top: '70px',
      left: 0,
      width: '100%',
      backgroundColor: 'white',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      padding: '16px 0',
    },
    mobileLink: {
      color: '#8B5CF6',
      textDecoration: 'none',
      padding: '12px 24px',
      textAlign: 'center',
      transition: 'background-color 0.2s ease',
    },
  };

  const links = [
    { path: '/', label: 'Home' },
    { path: '/flowers', label: 'Flowers' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav style={navStyles.nav}>
      <div style={navStyles.container}>
        <Link to="/" style={navStyles.logo}>
          LavenderLove Paradise
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '32px' }}>
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  ...navStyles.link,
                  ...(location.pathname === link.path ? navStyles.activeLink : {}),
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            style={navStyles.menuButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <div style={navStyles.mobileNav}>
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  ...navStyles.mobileLink,
                  backgroundColor: location.pathname === link.path
                    ? 'rgba(139, 92, 246, 0.1)'
                    : 'transparent',
                }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
