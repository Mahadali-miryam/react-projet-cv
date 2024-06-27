import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../style/contact.scss';
import maps from '../assets/maps.png';
import smartphone from '../assets/smartphone.png';


const SERVICE_ID = 'service_72sumdl';
const TEMPLATE_ID = 'template_dx8yxvh';
const USER_ID = 'DBqIFJc9dpmFMgkQB';


const ContactSection = ({ title, subtitle }) => (
    <div className="contact-section">
    <h1>{title}</h1>
    <h6>{subtitle}</h6>
    <div className="subtitle-style"></div>
  </div>
);

const Contact = () => {
  const [contact] = useState({
    title: 'Me contacter',
    subtitle: 'Pour me contacter en vue d’un entretien ou d’une future collaboration, merci de remplir le formulaire de contact.',
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        alert('Message envoyé avec succès !');
      }, (error) => {
        alert('Erreur lors de l’envoi du message.');
      });
    e.target.reset();
  };

  return (
        <div className="container-contact">
          <div className="form-and-maps-container">
            <ContactSection title={contact.title} subtitle={contact.subtitle} />
            <div className="form-and-map-wrapper">
              <div className="form-maps-section">
                <h4 style={{ borderBottom: '2px solid blue', paddingBottom: '20px' }}>Formulaire de contact</h4>
           
              <form onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Votre nom" required />
                <input type="email" name="email" placeholder="Votre adresse e-mail" required />
                <input type="text" name="phone" placeholder="Votre numéro de téléphone" required />
                <input type="text" name="subject" placeholder="Sujet" required />
                <textarea name="message" placeholder="Votre message" required></textarea>
          
                <button type="submit" className="btn-centre">Envoyer</button>
            
              </form>
            </div>
      <div className="google-map">
        <h4 style={{ borderBottom: '2px solid blue', paddingBottom: '20px' }}>Mes coordonnées</h4>
          <img src={maps} alt="Adresse" className="icon-maps" />
          <adress>40 Rue Laure Diebold, 69009 Lyon, France</adress> <br />
      <div className="phone-container">
        <img src={smartphone} alt="Téléphone" className="icon-smartphone" />
        <p>06 20 34 05 00</p>
      </div>
      <div className="google-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.092083293875!2d4.805528215495484!3d45.77364037910595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c1e4a1c3bdbd%3A0x40c14484fbf8f23a!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France!5e0!3m2!1sen!2sus!4v1620481940780"
                  width="150"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Map"
                ></iframe>
              
                </div>
            </div>
          </div>
        </div>
    </div>
  );
};
export default Contact; 