import React,{ useState }from 'react';
import '../style/home.scss';
import johnDoeAbout from '../assets/john-doe-about.jpg'; 

// Fonction ou composant séparé pour l'affichage du profil
const ProfileSection = ({ nom, role, bio }) => {
    return (
        <div>
            <h1>{nom}</h1>
            <h2>{role}</h2>
            {bio}
        </div>
    );
};

const Home = () => {
    // Utilisation d'un hook pour gérer l'état du profil
    const [profile] = useState({
        nom: ' Bonjour, je suis John Doe',
        role: 'Développeur web full stack',
        bio: (
            <div>
            <p>
                Passionné par l'informatique et les nouvelles technologies,
                j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF.
                Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.
            </p>       
            <p>
                Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.
            </p>    
            <p>   
                J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
            </p>
            </div>
        )
    });

    return (
        <div className="main-container">
            <div className="home-container">
             <div className="col-12 col-md-6">
              <ProfileSection nom={profile.nom} role={profile.role}/>
              <button className="btn btn-primary" type="submit">En savoir plus</button>
            </div>
        </div>

        <div className="about-image-container">
            <div className="about-section"> 
                <h2 style={{ borderBottom: '2px solid blue', paddingBottom: '20px' }}>À propos</h2>   
                <ProfileSection bio={profile.bio} />
            </div>

        <div className="img-section"> 
            <img src={johnDoeAbout} alt="John Doe" />
                <h3>Compétences</h3>
                <div className="progress-bar-container">
                    <div className="progress-label">HTML5 90%</div>
                    <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"style={{ marginBottom: '10px' }}>
                        <div className="progress-bar bg-danger" style={{width: "90%"}}></div>
                </div>

                <div className="progress-label">CSS3 80%</div>
                    <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"style={{ marginBottom: '10px' }}>
                        <div className="progress-bar bg-info" style={{width: "80%"}}></div>
                </div>

                <div className="progress-label">JAVASCRIPT 70%</div>
                    <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar bg-warning"style={{width: "70%"}}></div>
                </div>  
                <div className="progress-label">PHP 60%</div>
                    <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"style={{ marginBottom: '10px' }}>
                        <div className="progress-bar bg-success" style={{width: "60%"}}></div>
                </div>

                <div className="progress-label">REACT 50%</div>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar "style={{width: "50%"}}></div>
                 </div>  
                 
                </div>
            </div>
        </div>
    </div>
);
}

export default Home;