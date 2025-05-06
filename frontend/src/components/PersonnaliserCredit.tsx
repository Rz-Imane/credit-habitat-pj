import React from 'react';
import '../styles/FormPage.css';

type PersonnaliserCreditProps = {
  onBack: () => void;
};

const PersonnaliserCredit = ({ onBack }: PersonnaliserCreditProps) => {
  return (
    <div>
      <h2>Personnaliser mon crédit (contenu à venir)</h2>
      <div className="submit-section">
        <button className="back-btn" onClick={onBack}>Retour</button>
        <button className="submit-btn">Valider</button>
      </div>
    </div>
  );
};

export default PersonnaliserCredit;
