import React from 'react';
import '../styles/FormPage.css';

type MonProjetProps = {
  onBack: () => void;
};

const MonProjet = ({ onBack }: MonProjetProps) => {
  return (
    <>
      <div className="form-section">
      <div className="form-group">
        <label>Type de projet</label>
        <div className="radio-group">
          <label><input type="radio" name="projet" /> Achat d’un logement</label>
          <label><input type="radio" name="projet" /> Construction d’un logement (le terrain doit être en propriété)</label>
          <label><input type="radio" name="projet" /> Achat de terrain avec construction</label>
          <label><input type="radio" name="projet" /> Rachat crédit immobilier</label>
        </div>
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Valeur du bien immobilier</label>
          <input type="text" placeholder="Text" />
        </div>
        <div className="form-group">
          <label>Apport personnel</label>
          <input type="text" placeholder="Text" />
        </div>
      </div>

      <div className="form-section">
        <label>Durée du crédit</label>
        <div className="radio-group">
          <label><input type="radio" name="duree" /> En année</label>
          <label><input type="radio" name="duree" /> En mois</label>
        </div>
        <input type="text" placeholder="Durée du crédit" />
      </div>

      <div className="form-section">
        <label>Quel type de taux souhaitez-vous ?</label>
        <div className="radio-group">
          <label><input type="radio" name="taux" /> Fixe</label>
          <label><input type="radio" name="taux" /> Variable</label>
        </div>
      </div>

      <div className="form-section">
        <p>Montant du crédit demandé</p>
        <p className="small-text">Possibilité de modifier le montant</p>
      </div>

      <div className="submit-section">
        <button className="back-btn" onClick={onBack}>Retour</button>
        <button className="submit-btn">Valider</button>
      </div>
    </>
  );
};

export default MonProjet;
