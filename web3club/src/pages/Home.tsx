import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import mediumIcon from './medium.svg';
import instagramIcon from './instagram.svg';
import linkedinIcon from './linkedin.svg';
import telegramIcon from './telegram.svg';
import githubIcon from './github.svg';
import twitterIcon from './twitter.svg';
import discordIcon from './discord.svg';
import gmailIcon from './gmail.svg';
import '../fonts/fonts.css';
import bg1 from './bg1.png'; // Import the background image
import WhatsInIt from './WhatsInIt';

const Home: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Audiowide';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <div style={styles.brand}>Wallstreet DAO</div>
        <div style={styles.navLinks}>
          <Link to="/blog" style={styles.navLink} className="nav-link">Blogs</Link>
          <Link to="/events-calendar" style={styles.navLink} className="nav-link">Events Calendar</Link>
          <Link to="/project-showcase" style={styles.navLink} className="nav-link">Project Showcase</Link>
          <Link to="/news" style={styles.navLink} className="nav-link">News</Link>
          <Link to="/mint-nft" style={styles.navLink} className="nav-link">Mint NFT</Link>
          <Link to="/digiboard" style={styles.navLink} className="nav-link">Digiboard</Link>
          <div style={styles.dropdown}>
            <button onClick={toggleDropdown} style={styles.dropdownButton} className="nav-link">
              More
            </button>
            {isDropdownOpen && (
              <div style={styles.dropdownMenu}>
                <Link to="/reviews" style={styles.dropdownItem} className="dropdown-item">Review</Link>
                <Link to="/stress-test" style={styles.dropdownItem} className="dropdown-item">Stress Test</Link>
              </div>
            )}
          </div>
        </div>
        <div style={styles.socialLinks}>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <img src={discordIcon} alt="Discord" style={styles.icon} className="social-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" style={styles.icon} className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" style={styles.icon} className="social-icon" />
          </a>
          <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
            <img src={mediumIcon} alt="Medium" style={styles.icon} className="social-icon" />
          </a>
          <a href="mailto:example@gmail.com">
            <img src={gmailIcon} alt="Gmail" style={styles.icon} className="social-icon" />
          </a>
          <a href="https://github.com/">
            <img src={githubIcon} alt="GitHub" style={styles.icon} className="social-icon" />
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer">
            <img src={telegramIcon} alt="Telegram" style={styles.icon} className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" style={styles.icon} className="social-icon" />
          </a>
        </div>
      </nav>
      <div style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            <span style={styles.whiteText}>the </span>
            <span style={styles.gradientText}>Wallstreet DAO</span>
          </h1>
          <p style={styles.heroSubtitle}>The first of its kind university DAO community, based KLH Uni</p>
        </div>
      </div>
      <WhatsInIt />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#121212',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "'Audiowide', sans-serif",
    minHeight: '100vh',
  } as React.CSSProperties,
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Slightly transparent background
    backdropFilter: 'blur(10px)',
    borderRadius: '10px',
    position: 'fixed', // Change to fixed to overlay on top of the hero section
    width: '100%', // Make navbar full width
    top: 0,
    zIndex: 1000,
  } as React.CSSProperties,
  brand: {
    fontFamily: 'Moonhouse, sans-serif', // Apply custom font here
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#90f542',
  } as React.CSSProperties,
  navLinks: {
    display: 'flex',
    alignItems: 'center',
  } as React.CSSProperties,
  navLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '0.9rem',
    margin: '0 1rem', // Adjusted margin around nav links
    transition: 'color 0.3s ease-in-out',
  } as React.CSSProperties,
  dropdown: {
    position: 'relative',
    marginLeft: '1rem', // Added margin to separate "More" button from nav links
  } as React.CSSProperties,
  dropdownButton: {
    background: 'none',
    border: 'none',
    color: '#ffffff',
    fontSize: '0.9rem',
    cursor: 'pointer',
  } as React.CSSProperties,
  dropdownMenu: {
    position: 'absolute',
    top: '100%', // Position the dropdown below the "More" button
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
  } as React.CSSProperties,
  dropdownItem: {
    color: '#ffffff',
    textDecoration: 'none',
    display: 'block',
    padding: '12px 16px',
    textAlign: 'left',
  } as React.CSSProperties,
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  } as React.CSSProperties,
  icon: {
    width: '2rem',
    height: '2rem',
    margin: '0 0.5rem',
    transition: 'transform 0.3s ease-in-out',
  } as React.CSSProperties,
  heroSection: {
    backgroundImage: `url(${bg1})`, // Set bg1.png as background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh', // Take full viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Relative positioning for absolute children
  } as React.CSSProperties,
  heroContent: {
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black background
    padding: '1rem',
    borderRadius: '8px',
    maxWidth: '80%',
  } as React.CSSProperties,
  heroTitle: {
    fontFamily: 'Glitch Goblin, sans-serif', // Apply custom font here
    fontSize: '7rem',
    marginBottom: '0.5rem',
    display: 'inline-block',
  } as React.CSSProperties,
  gradientText: {
    background: `linear-gradient(90deg, #90f542, lime)`, // Lime yellow gradient background
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  } as React.CSSProperties,
  whiteText: {
    color: '#ffffff',
  } as React.CSSProperties,
  heroSubtitle: {
    fontSize: 'rem',
  } as React.CSSProperties,
};

const globalStyles = document.createElement('style');
globalStyles.innerHTML = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #121212;
    color: #ffffff;
    font-family: 'Audiowide', sans-serif;
    min-height: 100vh;
  }
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .visible {
    opacity: 1 !important;
  }
  .nav-link:hover {
    color: #cafc5d !important;
  }
  .dropdown-item:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffffff;
  }
  .social-icon:hover {
    transform: scale(1.2);
  }
`;
document.head.appendChild(globalStyles);

export default Home;
