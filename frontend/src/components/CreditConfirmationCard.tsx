// src/components/CreditConfirmationCard.tsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/CreditConfirmationCard.css';
import bgform from '../assets/bgform.png';

const CreditConfirmationCard: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state;

  // Si l’utilisateur arrive sans données, retourne au formulaire
  React.useEffect(() => {
    if (!formData) {
      navigate('/form');
    }
  }, [formData, navigate]);

  if (!formData) return null; // Empêche l’affichage si pas de données

  // Utilitaire pour naviguer directement à l’étape voulue du formulaire
  const goToStep = (stepNumber: number) => {
    navigate('/form', { state: { ...formData, step: stepNumber } });
  };

  return (
    <div className="page-wrapper" style={{ backgroundImage: `url(${bgform})` }}>
      <div className="card-container">
        <div className="credit__card">
          <h2>Mon récapitulatif</h2>
          <p>Finalisez votre inscription en confirmant vos données</p>

          <div className="credit-card__section">
            <div className="credit-card__section-header">
              Mon projet{' '}
              <a href="#" onClick={e => { e.preventDefault(); goToStep(2); }}>
                Modifier ma simulation
              </a>
            </div>
            <ul className="credit-card__section-list horizontal">
              <ul>
                <li>Valeur du bien immobilier : {formData.valeur_du_bien}</li>
                <li>Durée du crédit : {formData.duree}</li>
              </ul>
              <ul>
                <li>Montant du crédit demandé : {formData.montant}</li>
                <li>Apport personnel : {formData.apportpersonnel}</li>
              </ul>
              <ul>
                <li>Type de taux : {formData.taux}</li>
              </ul>
            </ul>
          </div>

          <div className="credit-card__section">
            <div className="credit-card__section-header">
              Mon profil{' '}
              <a href="#" onClick={e => { e.preventDefault(); goToStep(0); }}>
                Modifier mon profil
              </a>
            </div>
            <ul className="credit-card__section-list horizontal">
              <ul>
                <li>Civilité: {formData.civilite}</li>
                <li>Nom / Prénom : {formData.nom} {formData.prenom}</li>
              </ul>
              <ul>
                <li>Date de naissance : {formData.date_naissance}</li>
                <li>Téléphone : {formData.tel}</li>
              </ul>
              <ul>
                <li>Client BANK OF AFRICA : {formData.isclient ? 'Oui' : 'Non'}</li>
                <li>Vous êtes : {formData.categorie_client}</li>
                <li>Crédit en co-emprunt : {formData.coemprunt ? 'Oui' : 'Non'}</li>
              </ul>
            </ul>
          </div>

          <div className="credit-card__section">
            <div className="credit-card__section-header">
              Ma situation{' '}
              <a href="#" onClick={e => { e.preventDefault(); goToStep(1); }}>
                Modifier ma situation
              </a>
            </div>
            <ul className="credit-card__section-list horizontal">
              <ul>
                <li>Mon employeur : {formData.employeur}</li>
                <li>Ancienneté dans l’emploi actuel : {formData.anciennete}</li>
              </ul>
              <ul>
                <li>En période d’essai : {formData.trialperiod ? 'Oui' : 'Non'}</li>
                <li>Revenu mensuel net : {formData.revenu}</li>
              </ul>
              <ul>
                <li>Mensualité des crédits en cours : {formData.mensualite}</li>
                <li>Revenus complémentaires : {formData.revenucompl ? 'Oui' : 'Non'}</li>
              </ul>
            </ul>
          </div>

          <div className="credit-card__section">
            <div className="credit-card__section-header">
              Personnaliser mon crédit{' '}
              <a href="#" onClick={e => { e.preventDefault(); goToStep(3); }}>
                Modifier ma personnalisation
              </a>
            </div>
            <ul className="credit-card__section-list horizontal">
              <ul>
                <li>Différé de remboursement : {formData.remboursement ? 'Oui' : 'Non'}</li>
                <li>Le jour du prélèvement : {formData.jourrelev}</li>
              </ul>
              <li>Assurance prévoyance : {formData.financement}</li>
            </ul>
          </div>
          <button className="btn souscrire-btn" onClick={() => navigate('/simulation', { state: formData })}>Je confirme</button>
        </div>
        <button className="btn refaire-btn" onClick={() => goToStep(0)}>
          Refaire ma simulation
        </button>
      </div>
    </div>
  );
};

export default CreditConfirmationCard;
