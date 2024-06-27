import React, { useState } from 'react';
import '../style/blog.scss';
import  Coder from'../assets/blog/coder.jpg'
import  Croissance from'../assets/blog/croissance.jpg'
import  Google from'../assets/blog/google.jpg'
import  Screens from'../assets/blog/screens.jpg'
import  Seo from'../assets/blog/seo.jpg'
import  Technos from'../assets/blog/technos.png'

// Fonction ou composant séparé pour l'affichage du profil
const BlogSection = ({ title, subtitle }) => {
    return (
        <div className="services-section">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>   
            <div className="subtitle-style"></div>
        </div>
    );
};

const Blog = () => {
    // Utilisation d'un hook pour gérer l'état du profil
    const [blog] = useState({
        title: 'Blog',
        subtitle: 'Retrouver ici quelques articles sur le développement web.'        
});

return (
    <div>
    <div className="image-section banner"></div>
    
    <div className="m-container">
        <div className="col-12 col-md-6">
            <BlogSection title={blog.title} subtitle={blog.subtitle}/>
        </div>
    <div className="container">

        <div className="card" style={{width: "18rem"}}>
            <img src={Coder} className="card-img-top" alt="code HTML sur un écran montrant un exemple de codage."/>
        <div className="card-body">
        <h5 className="card-title">Coder son site en HTML/CSS</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-outline-primary">Lire la suite</a>
        </div>
        <div class="card-footer text-body-secondary">
           Publié le 22 aout 2022
        </div>
    </div>

        <div className="card" style={{width: "18rem"}}>
            <img src={Croissance} className="card-img-top" alt="Graphique de croissance symbolisant la vente de produits en ligne"/>
        <div className="card-body">
        <h5 className="card-title">Vendre ses produits sur le web</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-outline-primary">Lire la suite</a>
        </div>
        <div class="card-footer text-body-secondary">
        Publié le 20 aout 2022
        </div>
    </div>

        <div className="card" style={{width: "18rem"}}>
            <img src={Google} className="card-img-top" alt="Ordinateur affichant le logo Google sur l'écran"/>
        <div className="card-body">
            <h5 className="card-title">Se positionner sur Google</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-outline-primary">Lire la suite</a>
        </div>
            <div class="card-footer text-body-secondary">
                        Publié le 1 aout 2022
                </div>
            </div>

            <div className="card" style={{width: "18rem"}}>
            <img src={Screens} className="card-img-top" alt="Plusieurs écrans affichant des sites web adaptatifs"/>
        <div className="card-body">
        <h5 className="card-title">Coder en responsive design</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-outline-primary">Lire la suite</a>
        </div>
        <div class="card-footer text-body-secondary">
        Publié le 31 juillet 2022
        </div>
    </div>

    <div className="card" style={{width: "18rem"}}>
            <img src={Seo} className="card-img-top" alt="Icône de loupe sur des mots-clés, représentant le SEO"/>
        <div className="card-body">
        <h5 className="card-title">Technique et référencement</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-outline-primary">Lire la suite</a>
        </div>
        <div class="card-footer text-body-secondary">
        Publié le 30 juillet 2022
        </div>
    </div>

    <div className="card" style={{width: "18rem"}}>
            <img src={Technos} className="card-img-top" alt="Diverses technologies de programmation illustrées par des icônes"/>
        <div className="card-body">
        <h5 className="card-title">Apprendre à coder</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-outline-primary">Lire la suite</a>
        </div>
        <div class="card-footer text-body-secondary">
        Publié le 12 juillet 2022
        </div>
    </div>
        </div>
    </div>
</div>
    );
};
export default Blog