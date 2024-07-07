import React, { useState } from 'react';
import '../style/services.scss';
import ordi from '../assets/ordi.png'; 
import code from '../assets/code.png'; 
import search from '../assets/search.png'; 

const ServicesSection = ({ title, subtitle }) => {
    return (
        <div className="services-section">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>   
            <div className="subtitle-style"></div>
        </div>
    );
};

const Services = () => {
    // Utilisation d'un hook pour gérer l'état du profil
    const [services] = useState({
        title: 'Mon offre de services ',
        subtitle: 'Voici les prestations sur lesquelles je peux intervenir'        
});

    return (
        <div>   
            <div className="image-section banner"></div>
                <div className="m-container">
                    <div className="col-12 col-md-6">
                        <ServicesSection title={services.title} subtitle={services.subtitle}/>
                    </div>
                </div>

            <div className="container">
                <div className="box">
                    <img src={ordi} alt="ordi" className="ordi service-icon"/>
                        <h2>ux design</h2>
                            <p>L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur.
                        Son but est d'offrir une expérience de navigation optimale à l'internaute. </p>
                </div>

                <div className="box">
                    <img src={code} alt="Logo 2" className="code service-icon"/>
                        <h2>Développeur WEB</h2>
                            <p>Le <strong>développement de sites web</strong>repose sur l'utilisation des languages HTML, CSS,
                        JavaScript et PHP. </p>
                </div>

                <div className="box">
                    <img src={search} alt="Logo 3" className="search service-icon"/>
                        <h2>Référencement</h2>
                            <p>Le <strong>référencement naturel d'un site</strong>, aussi appelé SEO, 
                        consiste à metttre des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs de recherche.</p>
                </div>
            </div>    
        </div>
    );
};

export default Services;
