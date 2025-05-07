import React from 'react';
import '../styles/FormPage.css';

type PersonnaliserCreditProps = {
  onBack: () => void;
};

const PersonnaliserCredit = ({ onBack }: PersonnaliserCreditProps) => {
  return (
    <>
      <div className="form-section">
        <div className="form-group">
          <label>Voulez-vous profiter d’un différé de remboursement?</label>
          <div className="radio-group">
            <label><input type="radio" name="taux" /> Oui</label>
            <label><input type="radio" name="taux" /> Non</label>
          </div>
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Comment souhaitez vous financer l’assurance prévoyance (décès) ?</label>
          <div className="radio-group">
            <label><input type="radio" name="finance" /> Par mes propres moyens</label>
            <label><input type="radio" name="finance" /> Par crédit</label>
          </div>
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Sélectionner le jour du prélèvement</label>
          <select>
            <option value="">Choisir</option>
          </select>
        </div>
        </div>

      <div className="submit-section">
        <button className="back-btn" onClick={onBack}>Retour</button>
        <button className="submit-btn">Valider</button>
      </div>

    </>
  );
};

export default PersonnaliserCredit;
