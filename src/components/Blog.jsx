import React from 'react';
import '../style/blog.scss';
import  Coder from'../assets/blog/coder.jpg'
import  Croissance from'../assets/blog/croissance.jpg'
import  Google from'../assets/blog/google.jpg'
import  Screens from'../assets/blog/screens.jpg'
import  Seo from'../assets/blog/seo.jpg'
import  Technos from'../assets/blog/technos.png'


// Données des articles stockées dans un tableau d'objets pour faciliter la gestion
const articles = [
  {
    id: 1,
    title: 'Coder son site en HTML/CSS',
    img: Coder,
    date: 'Publié le 22 août 2022',
    alt: 'code HTML sur un écran montrant un exemple de codage.',
    content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },

  {
    id: 2,
    title: 'Vendre ses produits sur le web',
    img: Croissance,
    date: 'Publié le 20 aout 2022',
    alt: 'Graphique de croissance symbolisant la vente de produits en ligne.',
    content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
 
  {
    id: 3,
    title: 'Se positionner sur Google',
    img: Google,
    date: 'Publié le 1 aout 2022',
    alt: 'Ordinateur affichant le logo Google sur l\' écran.',
    content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },

  {
    id: 4,
    title: 'Coder en responsive design',
    img: Screens,
    date: ' Publié le 31 juillet 2022 ',
    alt: 'Plusieurs écrans affichant des sites web adaptatifs.',
    content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },

  {
    id: 5,
    title: 'Technique et référencement',
    img: Seo,
    date: ' Publié le 31 juillet 2022 ',
    alt: 'Icône de loupe sur des mots-clés, représentant le SEO.',
    content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },

  {
    id: 6,
    title: 'Apprendre à coder',
    img: Technos,
    date: ' Publié le 12 juillet 2022 ',
    alt: 'Diverses technologies de programmation illustrées par des icônes.',
    content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },

];


// Composant fonctionnel pour afficher le titre et le sous-titre de la section blog
const BlogSection = ({ title, subtitle }) => {
    return (
        <div className="services-section">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>   
            <div className="subtitle-style"></div>
        </div>
    );
};

// Composant principal Blog qui utilise le tableau d'articles pour générer dynamiquement la liste des articles
const Blog = () => {
  return (
    <div>
      <div className="image-section banner"></div>
      <div className="m-container">
        <div className="col-12 col-md-6">
          <BlogSection title="Blog" subtitle="Retrouver ici quelques articles sur le développement web." />
        </div>
        <div className="container">
          {articles.map((article) => (
            <article key={article.id} className="card" style={{ width: '18rem' }}>
              <img src={article.img} className="card-img-top" alt={article.alt} />
              <div className="card-body">
                <header>
                  <h5 className="card-title">{article.title}</h5>
                </header>
                <section>
                  <p className="card-text">{article.content}</p>
                  <button className="btn btn-primary">Lire la suite</button>
                </section>
                </div>
                <footer>
                  <div className="card-footer text-body-secondary">{article.date}</div>
                </footer>
              
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;