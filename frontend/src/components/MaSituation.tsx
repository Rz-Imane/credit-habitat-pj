import React, { useState, useEffect } from 'react';
import '../styles/FormPage.css';

type MaSituationProps = {
  data: any;
  setData: (fn: (prev: any) => any) => void;
  onNext: () => void;
  onBack: () => void;
};

const MaSituation = ({ data, setData, onNext, onBack }: MaSituationProps) => {
  const [local, setLocal] = useState({
    employeur: data.employeur || '',
    revenu: data.revenu || '',
    mensualite: data.mensualite || '',
    anciennete: data.anciennete || '',
    trialperiod: data.trialperiod || false,
    revenucompl: data.revenucompl || false
  });

  useEffect(() => {
  setData(prev => ({ ...prev, ...local }));
}, [local, setData]);


  return (
    <>
      <div className="form-section">
        <div className="form-group">
          <label>Mon employeur *</label>
          <input
            type="text"
            name="employeur"
            value={local.employeur}
            onChange={(e) => setLocal({ ...local, employeur: e.target.value })}
          />
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Revenu mensuel net (MAD) *</label>
          <input
            type="number"
            name="revenu"
            value={local.revenu}
            onChange={(e) => setLocal({ ...local, revenu: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Mensualité des crédits en cours (MAD)</label>
          <input
            type="number"
            name="mensualite"
            value={local.mensualite}
            onChange={(e) => setLocal({ ...local, mensualite: e.target.value })}
          />
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Ancienneté dans l’emploi actuel *</label>
          <select
            name="anciennete"
            value={local.anciennete}
            onChange={(e) => setLocal({ ...local, anciennete: e.target.value })}
          >
            <option value="">Choisir</option>
            <option value="moins6">Moins de 6 mois</option>
            <option value="6-12">6 à 12 mois</option>
            <option value="plus12">Plus de 12 mois</option>
          </select>
        </div>
        <div className="form-group">
          <label>En période d’essai ?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="trialperiod"
                value="true"
                checked={local.trialperiod === true}
                onChange={() => setLocal({ ...local, trialperiod: true })}
              />
              Oui
            </label>
            <label>
              <input
                type="radio"
                name="trialperiod"
                value="false"
                checked={local.trialperiod === false}
                onChange={() => setLocal({ ...local, trialperiod: false })}
              />
              Non
            </label>
          </div>
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Revenus complémentaires ?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="revenucompl"
                value="true"
                checked={local.revenucompl === true}
                onChange={() => setLocal({ ...local, revenucompl: true })}
              />
              Oui
            </label>
            <label>
              <input
                type="radio"
                name="revenucompl"
                value="false"
                checked={local.revenucompl === false}
                onChange={() => setLocal({ ...local, revenucompl: false })}
              />
              Non
            </label>
          </div>
        </div>
      </div>

      <div className="submit-section">
        <button type="button" className="back-btn" onClick={onBack}>
          Retour
        </button>
        <button type="button" className="submit-btn" onClick={onNext}>
          Valider l’étape
        </button>
      </div>
    </>
  );
};

export default MaSituation;