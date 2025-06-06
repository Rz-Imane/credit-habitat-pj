import React from "react";
import "../styles/creditoffer.css";
import svg1 from "../assets/frais.svg"; 
import svg2 from "../assets/checkmark.svg";


const CreditOfferSection = () => {
  return (
    <section className="credit-offer-section">
      <div className="offer-top">
        <h2>OFFRE EXCLUSIVE EN LIGNE</h2>
        <div className="offer-features">
          <div className="feature-item">
            <img src={svg1} alt="Frais de dossier" />
            <p>
              <strong>Frais de dossier</strong>
              <br />
              Gratuits
            </p>
          </div>
          <div className="feature-item">
            <img src={svg1} alt="Frais d'expertise" />
            <p>
              <strong>Frais d'expertise immobilière</strong>
              <br />
              Gratuits
            </p>
          </div>
          <div className="feature-item">
            <img src={svg1} alt="Accord instantané" />
            <p>
              <strong>Accord de principe</strong>
              <br />
              Instantané
            </p>
          </div>
        </div>
      </div>


      <div className="offer-options">
        <h3>
          Des options de modulation de votre crédit pour s’adapter à vos
          contraintes
        </h3>
        <div className="options-features">
          <div className="option-item">
            <img src={svg2} alt="Personnalisation" />
            <p>
              Personnalisation de la date
              <br />
              de prélèvement de votre mensualité
            </p>
          </div>
          <div className="option-item">
            <img src={svg2} alt="Suspension" />
            <p>
              Possibilité de suspension du
              <br />
              remboursement d’une mensualité
            </p>
          </div>
          <div className="option-item">
            <img src={svg2} alt="Révision" />
            <p>
              Révision de vos échéances à la baisse ou à la hausse
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditOfferSection;
