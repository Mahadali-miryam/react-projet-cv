    import React, { useState } from 'react';
    import maps from '../assets/maps.png';
    import smartphone from '../assets/smartphone.png';
    import email from '../assets/email.png';


    const LegalSection = ({ title }) => {
        return (
            <div className="services-section">
                <h1>{title}</h1>  
                <div className="subtitle-style"></div> 
            </div>
            
        );
    };

    const LegalMentions = () => {
        const [legalInfo] = useState({
            title:'Mentions legales '
        });       

    return (
    <div >
        <div className="m-container">
            <div className="col-12 col-md-6">
                <LegalSection title={legalInfo.title} />
            </div> 
</div>
        
    <div className="accordion" id="accordionMentionsLegales">
    <div className="accordion-item">
        <h2 class="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"aria-expanded="true" aria-controls="collapseOne">
            L’éditeur du site
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionMentionsLegales">
        <div class="accordion-body">
            <h4>John Doe</h4>
                <div className="coordinates">
                    <address><img src={maps} alt="Adresse" className="icon-maps" />
                        40 Rue Laure Diebold 
                        69009 Lyon, France</address>
                </div>
                <div className="phone">
                <p> <a href="tel:+33620340500"><img src={smartphone} alt="Téléphone" className="icon-smartphone" />06 20 30 40 50</a></p>
            
                <div className="email">
                <p> <a href="mailto:john.doe@gmail.com"><img src={email} alt="enveloppe" className="icon-email" />
                    john.doe@gmail.com</a></p>
                </div>
            </div>
        </div>
    </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            L’hébergeur
            </button>
            </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionMentionsLegales">
            <h4>Always Data</h4>
                <div className="coordinates">
                    <address><img src={maps} alt="Adresse" className="icon-maps" />
                        91 rue du Faubourg Saint Honoré 
                        75008 Paris</address>
                </div>
        
                <div className="email">
                    <p> <a href="mailto:www.alwaysdata.com"><img src={email} alt="enveloppe" className="icon-email" />
                    www.alwaysdata.com</a></p>
                </div>
        </div>
                <div class="accordion-body">
            </div>
        </div>

                 <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Crédits
                        </button>
                    </h2>
                            <h4>Crédits</h4>
                                <p>Site développé par John Doe, étudiant du CEF. </p> 
                                <p>Les images libres de droit sont issues du site <a href="https://pixabay.com" target="_blank"rel="noopener noreferrer">Pixabay</a></p>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionMentionsLegales">
                                <div class="accordion-body">
                            </div>           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
} 


    export default LegalMentions;