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
    trialperiod: typeof data.trialperiod === "boolean" ? data.trialperiod : false,
    revenucompl: typeof data.revenucompl === "boolean" ? data.revenucompl : false,
  });
  const [touched, setTouched] = useState(false);

  // Met à jour le parent à chaque modif locale
  useEffect(() => {
    setData(prev => ({ ...prev, ...local }));
  }, [local, setData]);

  // Validation des champs obligatoires
  const errors = {
    employeur: !local.employeur,
    revenu: !local.revenu,
    mensualite: !local.mensualite,
    anciennete: !local.anciennete,
    trialperiod: typeof local.trialperiod !== "boolean",
    revenucompl: typeof local.revenucompl !== "boolean",
  };
  const hasError = Object.values(errors).some(Boolean);

  const handleNext = () => {
    setTouched(true);
    if (!hasError) {
      onNext();
    }
  };

  const handleChangeBool = (field: string, value: string) => {
    setLocal({ ...local, [field]: value === "true" });
  };

  return (
    <>
      <div className="form-section">
        <div className="form-group">
          <label>Mon employeur *</label>
          <input
            type="text"
            name="employeur"
            value={local.employeur}
            onChange={e => setLocal({ ...local, employeur: e.target.value })}
          />
          {touched && errors.employeur && <div className="warning-msg">Ce champ est requis.</div>}
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Revenu mensuel net (MAD) *</label>
          <input
            type="number"
            name="revenu"
            value={local.revenu}
            onChange={e => setLocal({ ...local, revenu: e.target.value })}
          />
          {touched && errors.revenu && <div className="warning-msg">Ce champ est requis.</div>}
        </div>
        <div className="form-group">
          <label>Mensualité des crédits en cours (MAD)</label>
          <input
            type="number"
            name="mensualite"
            value={local.mensualite}
            onChange={e => setLocal({ ...local, mensualite: e.target.value })}
          />
          {touched && errors.mensualite && <div className="warning-msg">Ce champ est requis.</div>}
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Ancienneté dans l’emploi actuel *</label>
          <select
            name="anciennete"
            value={local.anciennete}
            onChange={e => setLocal({ ...local, anciennete: e.target.value })}
          >
            <option value="">Choisir</option>
            <option value="moins6">Moins de 6 mois</option>
            <option value="6-12">6 à 12 mois</option>
            <option value="plus12">Plus de 12 mois</option>
          </select>
          {touched && errors.anciennete && <div className="warning-msg">Ce champ est requis.</div>}
        </div>
        <div className="form-group">
          <label>En période d’essai ? *</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="trialperiod"
                value="true"
                checked={local.trialperiod === true}
                onChange={e => handleChangeBool('trialperiod', e.target.value)}
              />
              Oui
            </label>
            <label>
              <input
                type="radio"
                name="trialperiod"
                value="false"
                checked={local.trialperiod === false}
                onChange={e => handleChangeBool('trialperiod', e.target.value)}
              />
              Non
            </label>
          </div>
          {touched && errors.trialperiod && <div className="warning-msg">Ce champ est requis.</div>}
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Revenus complémentaires ? *</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="revenucompl"
                value="true"
                checked={local.revenucompl === true}
                onChange={e => handleChangeBool('revenucompl', e.target.value)}
              />
              Oui
            </label>
            <label>
              <input
                type="radio"
                name="revenucompl"
                value="false"
                checked={local.revenucompl === false}
                onChange={e => handleChangeBool('revenucompl', e.target.value)}
              />
              Non
            </label>
          </div>
          {touched && errors.revenucompl && <div className="warning-msg">Ce champ est requis.</div>}
        </div>
      </div>

      <div className="submit-section">
        <button type="button" className="back-btn" onClick={onBack}>
          Retour
        </button>
        <button type="button" className="submit-btn" onClick={handleNext}>
          Valider l’étape
        </button>
      </div>

      {/* Style warning rapide */}
      <style>{`
        .warning-msg {
          color: #c40f0f;
          font-size: 13px;
          margin-top: 3px;
        }
      `}</style>
    </>
  );
};

export default MaSituation;
