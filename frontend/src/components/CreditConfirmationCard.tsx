import React from 'react';
import '../styles/CreditConfirmationCard.css';
import bgform from '../assets/bgform.png';

const CreditConfirmationCard: React.FC = () => {
  return (
    <div className="page-wrapper" style={{ backgroundImage: `url(${bgform})` }}>
        <div className="card-container">
      <div className="credit__card">
        <h2>Mon récapitulatif</h2>
        <p>Finalisez votre inscription en confirmant vos données</p>

        <div className="credit-card__section">
          <div className="credit-card__section-header">
            Mon projet <a href="#">Modifier ma simulation</a>
          </div>
          <ul className="credit-card__section-list horizontal">
            <ul>
            <li>Valeur du bien immobilier</li>
            <li>Durée du crédit</li>
            </ul>
            <ul>
            <li>Montant du crédit demandé</li>
            <li>Apport personnel</li>
            </ul>
            <ul>
            <li>Type de taux</li>
            </ul>
          </ul>
        </div>

        <div className="credit-card__section">
          <div className="credit-card__section-header">
            Mon profil <a href="#">Modifier mon profil</a>
          </div>
          <ul className="credit-card__section-list horizontal">
          <ul>
            <li>Civilité</li>
            <li>Nom / Prénom</li>
            </ul>
            <ul>
            <li>Date de naissance</li>
            <li>Téléphone</li>
            </ul>
            <ul>
            <li>Client BANK OF AFRICA : Vous êtes ?</li>
            <li>Crédit en co-emprunt</li>
            </ul>
          </ul>
        </div>

        <div className="credit-card__section">
          <div className="credit-card__section-header">
            Ma situation <a href="#">Modifier ma situation</a>
          </div>
          <ul className="credit-card__section-list horizontal">
            <ul>
              <li>Mon employeur?</li>
              <li>Ancienneté dans l’emploi actuel</li>
            </ul>
            <ul>
              <li>Etes-vous en période d’essai?</li>
              <li>Revenu mensuel net</li>
            </ul>
            <ul>
              <li>Mensualité des crédits en cours</li>
              <li>Avez-vous des revenus complémentaires?</li>
            </ul>
          </ul>
        </div>

        <div className="credit-card__section">
          <div className="credit-card__section-header">
            Personnaliser mon crédit <a href="#">Modifier ma personnalisation</a>
          </div>

            <ul className="credit-card__section-list horizontal">
               <ul>
              <li>Différé de remboursement</li>
              <li>Le jour du prélèvement</li>
              </ul>
              <li>Assurance prévoyance</li>
            </ul>
        </div>
        <button className="btn souscrire-btn">Je confirme</button>
      </div>
      <button className="btn refaire-btn">Refaire ma simulation</button>

    </div>
    </div>
  );
};

export default CreditConfirmationCard;
