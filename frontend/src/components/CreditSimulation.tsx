import React from 'react';
import '../styles/CreditSimulation.css';
import bg3 from "../assets/bg3.png";


const CreditSimulation: React.FC = () => {
  return (
    <div className="credit-simulation" style={{backgroundImage: `url(${bg3})`}}>
      <div className="credit-header">
        <p className="title">Félicitations !</p>
        <p className="subtitle">Votre prêt immobilier est pré-approuvé.</p>
      </div>

      <div className="credit-cards">
        {/* Left Card */}
        <div className="credit-card left-card">
          <h2 className="section-title">Votre mensualité TTC</h2>
          <p className="monthly-amount">------ Dhs / Mois</p>
          <p className="duration">Durée : (--- mois)</p>

          <button className="btn download-btn">Téléchargez proposition de crédit</button>

          <div className="info-box">
            <p>Montant crédit demandé :</p>
            <p>Total intérêts :</p>
            <p>Assurances :</p>
            <p>Taux du crédit :</p>
            <p>TEG :</p>
            <p>Montant crédit total (avec assurance) :</p>
            <p>Coût total du crédit :</p>
          </div>

          <div className="additional-info">
            <p>Expertise immobilière : <strong>GRATUIT</strong></p>
            <p>Frais de dossier : <strong>GRATUIT</strong></p>
            <p>Date de prélèvement de l’échéance :</p>
          </div>

          <button className="btn simulation-btn">Refaire ma simulation</button>
        </div>

        {/* Right Card */}
        <div className="credit-card right-card">
          <h2 className="section-title">Frais de Notaire</h2>

          <div className="info-box">
            <p>Frais d’enregistrement hypothécaires :</p>
            <p>Frais de conservation foncière :</p>
            <p>Timbre :</p>
            <p>Frais de rédaction d’acte :</p>
            <p>2 Certificats de propriété :</p>
            <p>Honoraires de notaire (estimation) :</p>
          </div>

          <div className="disclaimer">
            <p>*Estimation à titre indicatif et suivant aux calculs des frais de conservation foncière les cas au minimum</p>
            <p><strong>Offre non contractuelle</strong></p>
            <p>
              Cette offre est valable sous réserve d’une même situation financière sur les 30 prochains jours.
              En cas d’évolution, un ajustement de l’offre pourra être nécessaire.
              Les montants indiqués sont à titre indicatif.
            </p>
          </div>

          <button className="btn primary-btn">Souscrire à l’offre</button>
        </div>
      </div>
    </div>
  );
};

export default CreditSimulation;
