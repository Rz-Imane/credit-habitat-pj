import React, { useState, useEffect } from 'react';
import '../styles/FormPage.css';

type MonProjetProps = {
  data: any;
  setData: (fn: (prev: any) => any) => void;
  onNext: () => void;
  onBack: () => void;
};

const MonProjet = ({ data, setData, onNext, onBack }: MonProjetProps) => {
  const [local, setLocal] = useState({
    typeprojet: data.typeprojet || '',
    valeur_du_bien: data.valeur_du_bien || '',
    apportpersonnel: data.apportpersonnel || '',
    duree: data.duree || '',
    taux: data.taux || '',
    montant: data.montant || ''
  });

  useEffect(() => {
  setData(prev => ({ ...prev, ...local }));
}, [local, setData]);


  return (
    <>
      <div className="form-section">
        <div className="form-group">
          <label>Type de projet *</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="typeprojet"
                value="logement"
                checked={local.typeprojet === 'logement'}
                onChange={() => setLocal({ ...local, typeprojet: 'logement' })}
              />
              Achat d’un logement
            </label>
            <label>
              <input
                type="radio"
                name="typeprojet"
                value="construction"
                checked={local.typeprojet === 'construction'}
                onChange={() => setLocal({ ...local, typeprojet: 'construction' })}
              />
              Construction d’un logement
            </label>
            <label>
              <input
                type="radio"
                name="typeprojet"
                value="terrain"
                checked={local.typeprojet === 'terrain'}
                onChange={() => setLocal({ ...local, typeprojet: 'terrain' })}
              />
              Achat de terrain + construction
            </label>
            <label>
              <input
                type="radio"
                name="typeprojet"
                value="rachat"
                checked={local.typeprojet === 'rachat'}
                onChange={() => setLocal({ ...local, typeprojet: 'rachat' })}
              />
              Rachat crédit immobilier
            </label>
          </div>
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Valeur du bien (MAD) *</label>
          <input
            type="number"
            name="valeur_du_bien"
            value={local.valeur_du_bien}
            onChange={(e) => setLocal({ ...local, valeur_du_bien: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Apport personnel (MAD)</label>
          <input
            type="number"
            name="apportpersonnel"
            value={local.apportpersonnel}
            onChange={(e) => setLocal({ ...local, apportpersonnel: e.target.value })}
          />
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Durée du crédit *</label>
          <input
            type="number"
            name="duree"
            value={local.duree}
            onChange={(e) => setLocal({ ...local, duree: e.target.value })}
          />
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Type de taux souhaité *</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="taux"
                value="fixe"
                checked={local.taux === 'fixe'}
                onChange={() => setLocal({ ...local, taux: 'fixe' })}
              />
              Fixe
            </label>
            <label>
              <input
                type="radio"
                name="taux"
                value="variable"
                checked={local.taux === 'variable'}
                onChange={() => setLocal({ ...local, taux: 'variable' })}
              />
              Variable
            </label>
          </div>
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Montant du crédit demandé (MAD) *</label>
          <input
            type="number"
            name="montant"
            value={local.montant}
            onChange={(e) => setLocal({ ...local, montant: e.target.value })}
          />
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

export default MonProjet;
