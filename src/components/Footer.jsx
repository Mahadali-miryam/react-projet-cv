import React, {useEffect } from 'react';
import { Link } from 'react-router-dom';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import twitter from '../assets/twitter.png';

function Footer() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        document.getElementById('backToTopBtn').style.display = 'block';
      } else {
        document.getElementById('backToTopBtn').style.display = 'none';
      }
    };

    // écouteur d'événement scroll
    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return (
    <footer>
      <div className="footer-container">
    <div className="footer-content">
      <div className="footer-column">
            <p>John Doe</p>
            <p>40 Rue Laure Diebold 69009 Lyon, France</p>
            <p>Téléphone:0620304050</p>
            <div>
            <div className="social-icons">
              <a href="https://github.com/John-Doe " target="_blank" rel="noopener noreferrer">
                <img className="github-logo" src={github} alt="logo github" />
              </a>   
              <a href="https://twitter.com/John-Doe " target="_blank" rel="noopener noreferrer">
                <img className="twitter-logo" src={twitter} alt="logo twitter" />
              </a> 
              <a href="https://www.linkedin.com/in/John-Doe" target="_blank" rel="noopener noreferrer">
              <img className="linkedin-logo" src={linkedin} alt="logo linkedin" />
              </a> 
             
             
            </div>
          </div>  
        </div>
      </div>  
          <div className="footer-column">
            <p>Liens utiles</p>
            <ul>
              <li><Link to="/home">Accueil</Link></li>
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Me contacter</Link></li>
              <li><Link to="/legalMentions">Mentions légales</Link></li>
            </ul>
          </div>
        
         
        <div className="footer-column">
            <p>Mes dernières Réalisations</p>
            <ul>
              <li><Link to="/projects#1.">Fresh food</Link></li>
              <li><Link to="/projects#2.">Restaurant Akira</Link></li>
              <li><Link to="/projects#3.">Espace bien etre</Link></li>
            </ul>
          </div>
         
          <div className="footer-column">
            <p>Mes derniers Articles</p> 
            <ul>
              <li><Link to="/blog#1">Coder son site en HTML/CSS</Link></li>
              <li><Link to="/blog#2">Vendre ses produits sur le web</Link></li>
              <li><Link to="/blog#3">Se positionner sur Google</Link></li>
            </ul>  
        </div>
      </div>  
  
    <div className="bg-dark text-white text-center p-3">
      <p>©Designed by John Doe</p>
    </div>
    <button id="backToTopBtn" onClick={scrollToTop}>↑</button>
    </footer>
  );
}

export default Footer;