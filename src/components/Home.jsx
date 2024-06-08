import React from 'react';
import '../style/home.scss';

const Home = () => {
    return (

        <div className="home-container">
            <div class="col-12 col-md-6">
            <h1>Bonjour, je suis John Doe </h1>
            <h2>Développeur web full stack</h2>
            <button class="btn btn-primary" type="submit">En savoir plus</button>
        </div>
    </div>

        <div className="about-container">
        <div id="about">
           <h3>A propos</h3> 
           <p>Passionné par l'imformatique et les nouvelles technologies,
            j'ai suis une formation, d'<strong>intégrateur-développeur web</strong>
            au CEF.
            Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.
            </p> 
                
    </div>
</div>

    )
}

export default Home;