import React, { useState } from 'react';
import '../style/projects.scss';
import  FreshFood from'../assets/portfolio/fresh-food.jpg'
import  RestaurantJaponais from'../assets/portfolio/restaurant-japonais.jpg'
import  EspaceBienEtre from'../assets/portfolio/espace-bien-etre.jpg'


// Fonction ou composant séparé pour l'affichage du profil
const ProjectsSection = ({ title, subtitle }) => {
    return (
        <div className="services-section">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>   
            <div className="subtitle-style"></div>
        </div>
    );
};

const Projects = () => {
    // Utilisation d'un hook pour gérer l'état du profil
    const [projects] = useState({
        title: 'Portfolio',
        subtitle: 'Voici quelques-unes de mes réalisations.'        
});

return (
    <div>
    <div className="image-section banner"></div>
    
    <div className="m-container">
        <div className="col-12 col-md-6">
            <ProjectsSection title={projects.title} subtitle={projects.subtitle}/>
        </div>
    </div>
    <div className="container">  
<div className="card" style={{width: "18rem"}}>
    <img src={FreshFood} className="card-img-top" alt="Légumes frais et colorés."/>
    <div className="card-body">
        <h5 className="card-title">Fresh food</h5>
        <p className="card-text">Réalisation d'un site avec commande en ligne.</p>
        <a href="#" className="btn btn-outline-primary">voir</a>
    </div>
    <div class="card-footer text-body-secondary">
    Site réalisé avec PHP et MySQL
  </div>
</div>

<div className="card" style={{width: "18rem"}}>
    <img src={RestaurantJaponais} className="card-img-top" alt="Différents sushis"/>
    <div className="card-body">
        <h5 className="card-title">Restaurant-Japonais</h5>
        <p className="card-text">Réalisation d'un site vitrine.</p>
        <a href="#" className="btn btn-outline-primary">voir</a>
    </div>
    <div class="card-footer text-body-secondary">
    Site réalisé avec WordPress
  </div>
</div>

<div className="card" style={{width: "18rem"}}>
    <img src={EspaceBienEtre} className="card-img-top" alt="Statue, lotus et galets au coucher de soleil évoquant le calme"/>
    <div className="card-body">
        <h5 className="card-title">Espace-Bien-Etre</h5>
        <p className="card-text">Réalisation d'un site vitrine pour un praticien de bien-etre.</p>
        <a href="#" className="btn btn-outline-primary">voir</a>
    </div>
    <div class="card-footer text-body-secondary">
    Site réalisé avec HTML/CSS
  </div>
</div>
</div>
</div>
    );
};

export default Projects;