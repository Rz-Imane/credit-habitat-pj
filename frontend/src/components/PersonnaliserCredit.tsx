import React, { useState, useEffect } from 'react';
import '../styles/FormPage.css';

type PersonnaliserCreditProps = {
  data: any;
  setData: (fn: (prev: any) => any) => void;
  onBack: () => void;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

const PersonnaliserCredit = ({ data, setData, onBack, onSubmit }: PersonnaliserCreditProps) => {
  const [local, setLocal] = useState({
    remboursement: data.remboursement || false,
    financement: data.financement || '',
    jourrelev: data.jourrelev || '',
  });

  useEffect(() => {
  setData(prev => ({ ...prev, ...local }));
}, [local, setData]);


  return (
    <form onSubmit={onSubmit}>
      <div className="form-section">
        <div className="form-group">
          <label>Voulez-vous profiter d’un différé de remboursement ?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="remboursement"
                value="true"
                checked={local.remboursement === true}
                onChange={() => setLocal({ ...local, remboursement: true })}
              />
              Oui
            </label>
            <label>
              <input
                type="radio"
                name="remboursement"
                value="false"
                checked={local.remboursement === false}
                onChange={() => setLocal({ ...local, remboursement: false })}
              />
              Non
            </label>
          </div>
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Comment financer l’assurance prévoyance ?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="financement"
                value="par propres moyens"
                checked={local.financement === 'par propres moyens'}
                onChange={() => setLocal({ ...local, financement: 'par propres moyens' })}
              />
              Par propres moyens
            </label>
            <label>
              <input
                type="radio"
                name="financement"
                value="par crédit"
                checked={local.financement === 'par crédit'}
                onChange={() => setLocal({ ...local, financement: 'par crédit' })}
              />
              Par crédit
            </label>
          </div>
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Sélectionner le jour du prélèvement *</label>
          <select
            name="jourrelev"
            value={local.jourrelev}
            onChange={(e) => setLocal({ ...local, jourrelev: Number(e.target.value) })}
          >
            <option value="">Choisir</option>
            {Array.from({ length: 28 }, (_, i) => i + 1).map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="submit-section">
        <button type="button" className="back-btn" onClick={onBack}>
          Retour
        </button>
        <button type="submit" className="submit-btn">
          Valider et envoyer
        </button>
      </div>
    </form>
  );
};

export default PersonnaliserCredit;
