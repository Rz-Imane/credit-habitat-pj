import React from 'react';
import '../styles/FormPage.css';

type MaSituationProps = {
  onNext: () => void;
  onBack: () => void;
};
const MaSituation = ({ onNext, onBack }: MaSituationProps) => {
  return (
    <>
      <div className="form-section">
        <div className="form-group">
          <label>Mon employeur</label>
          <input type="text" placeholder="Text" />
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Revenu Mensuel net</label>
          <input type="text" placeholder="Text" />
        </div>
        <div className="form-group">
          <label>Mensualité des crédits en cours</label>
          <input type="text" placeholder="Text" />
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Ancienneté dans l'emploi actuel</label>
          <select>
            <option value="">Choisir</option>
            <option value="moins6">Moins de 6 mois</option>
            <option value="6-12">6 à 12 mois</option>
            <option value="plus12">Plus de 12 mois</option>
          </select>
        </div>
        <div className="form-group">
          <label>Êtes-vous en période d’essai ?</label>
          <div className="radio-group">
            <label><input type="radio" name="essai" />Oui</label>
            <label><input type="radio" name="essai" />Non</label>
          </div>
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Avez-vous des revenus complémentaires ?</label>
          <div className="radio-group">
            <label><input type="radio" name="revenus" />Oui</label>
            <label><input type="radio" name="revenus" />Non</label>
          </div>
        </div>
      </div>

      <div className="submit-section">
        <button className="back-btn" onClick={onBack}>Retour</button>
        <button className="submit-btn" onClick={onNext}>Valider</button>
      </div>

    </>
  );
};

export default MaSituation;
