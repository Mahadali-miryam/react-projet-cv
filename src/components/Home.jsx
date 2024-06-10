import React from 'react';
import '../style/home.scss';
import johnDoeAbout from '../assets/john-doe-about.jpg'; 

const Home = () => {
    return (
        <div className="main-container">
            <div className="home-container">
             <div className="col-12 col-md-6">
                <h1>Bonjour, je suis John Doe </h1>
                <h2>Développeur web full stack</h2>
                <button className="btn btn-primary" type="submit">En savoir plus</button>
            </div>
        </div>

        <div className="about-image-container">
            <div className="about-section">
                <h3>À propos</h3>
                    <p>Passionné par l'imformatique et les nouvelles technologies,
                    j'ai suis une formation, d'<strong>intégrateur-développeur web</strong> au CEF.
                    Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.
                    </p> 
                    <p>Basé à lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong></p>
                    <p>J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
                    </div>
                <div className="img-section">   
                <img src={johnDoeAbout} alt="John Doe" />
                </div>
            </div>
        </div>
        

    )
}

export default Home;