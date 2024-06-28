import React, { useState } from 'react';
import '../style/projects.scss';
import FreshFood from '../assets/portfolio/fresh-food.jpg';
import RestaurantJaponais from '../assets/portfolio/restaurant-japonais.jpg';
import EspaceBienEtre from '../assets/portfolio/espace-bien-etre.jpg';

// affiche la section titre et sous-titre de chaque projet
const ProjectsSection = ({ title, subtitle }) => {
    return (
        <div className="services-section">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>   
            <div className="subtitle-style"></div>
        </div>
    );
};

//composant principal affiche tous les projets
const Projects = () => {
    // Utilisation d'un hook pour gérer l'état des projets
    const [projects] = useState([
        {
            id: 1,
            title: 'Fresh food',
            img: FreshFood,
            description: "Réalisation d'un site avec commande en ligne.",
            technologies: 'Site réalisé avec PHP et MySQL',
            alt:"Légumes frais et colorés" , 
        },  

        {
            id: 2,
            title: 'Restaurant-Japonais',
            img: RestaurantJaponais,
            description: "Réalisation d'un site vitrine.",
            technologies: 'Site réalisé avec WordPress',
            alt: "Différents sushis" ,
        },
        {
            id: 3,
            title: 'Espace-Bien-Etre',
            img: EspaceBienEtre,
            description: "Réalisation d'un site vitrine pour un praticien de bien-être.",
            technologies: 'Site réalisé avec HTML/CSS',
            alt: "Statue, lotus et galets au coucher de soleil évoquant le calme" 
        },
    ]);

    return (
        <div>
            <div className="image-section banner"></div>
            <div className="m-container">
                <div className="col-12 col-md-6">
                    <ProjectsSection title="Portfolio" subtitle="Voici quelques-unes de mes réalisations."/>
                </div>
            </div>
            <div className="container">
                {projects.map((project) => (
                    <div className="card" style={{width: "18rem"}} key={project.id}>
                        <img src={project.img} className="card-img-top" alt={project.title}/>
                        <div className="card-body">
                            <h5 className="card-title">{project.title}</h5>
                            <p className="card-text">{project.description}</p>
                            <button className="btn btn-outline-primary">voir</button>
                        </div>
                        <div className="card-footer text-body-secondary">
                            {project.technologies}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;