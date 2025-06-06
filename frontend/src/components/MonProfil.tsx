import React, { useState, useEffect } from 'react';
import '../styles/FormPage.css';

type MonProfilProps = {
  data: any;
  setData: (fn: (prev: any) => any) => void;
  onNext: () => void;
};

const MonProfil = ({ data, setData, onNext }: MonProfilProps) => {
  const [local, setLocal] = useState({
    civilite: data.civilite || '',  
    prenom: data.prenom || '',
    nom: data.nom || '',
    date_naissance: data.date_naissance || '',
    tel: data.tel || '',
    isclient: data.isclient || false,
    categorie_client: data.categorie_client || '',
    coemprunt: data.coemprunt || false,
    activite_professionnelle: data.activite_professionnelle || '',
    pays_residence: data.pays_residence || ''
  });

  const [showError, setShowError] = useState(false);

  // Sync vers parent à chaque changement
  useEffect(() => {
  setData(prev => ({ ...prev, ...local }));
}, [local, setData]);


  // Validation sur la date (YYYY-MM-DD)
  const handleNext = () => {
  console.log('Date saisie:', local.date_naissance);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(local.date_naissance)) {
    alert('Veuillez saisir une date de naissance valide (YYYY-MM-DD)');
    return;
  }
  onNext();
};


  return (
    <>
      <div className="form-section">
        <div className="form-group">
          <label>Civilité</label>
          <div className="radio-group">
          <label>
            <input
              type="radio"
              name="civilite"
              value="M."
              checked={local.civilite === 'M.'}
              onChange={() => setLocal({ ...local, civilite: 'M.' })}
            />
            M.
          </label>
          <label>
            <input
              type="radio"
              name="civilite"
              value="Mme"
              checked={local.civilite === 'Mme'}
              onChange={() => setLocal({ ...local, civilite: 'Mme' })}
            />
            Mme
          </label>
          <label>
            <input
              type="radio"
              name="civilite"
              value="Mlle"
              checked={local.civilite === 'Mlle'}
              onChange={() => setLocal({ ...local, civilite: 'Mlle' })}
            />
            Mlle
          </label>
        </div>

        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Prénom *</label>
          <input
            type="text"
            name="prenom"
            value={local.prenom}
            onChange={e => setLocal({ ...local, prenom: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Nom *</label>
          <input
            type="text"
            name="nom"
            value={local.nom}
            onChange={e => setLocal({ ...local, nom: e.target.value })}
          />
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Date de naissance *</label>
          <input
            type="date"
            name="date_naissance"
            value={local.date_naissance}
            onChange={e => setLocal({ ...local, date_naissance: e.target.value })}
          />
          {showError && (
            <div style={{ color: "red", marginTop: 8 }}>
              Veuillez saisir une date de naissance valide (YYYY-MM-DD)
            </div>
          )}
        </div>
        <div className="form-group">
          <label>Téléphone *</label>
          <input
            type="tel"
            name="tel"
            value={local.tel}
            onChange={e => setLocal({ ...local, tel: e.target.value })}
          />
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Êtes-vous un client BANK OF AFRICA ?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="isclient"
                value="true"
                checked={local.isclient === true}
                onChange={() => setLocal({ ...local, isclient: true })}
              />
              Oui
            </label>
            <label>
              <input
                type="radio"
                name="isclient"
                value="false"
                checked={local.isclient === false}
                onChange={() => setLocal({ ...local, isclient: false })}
              />
              Non
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Vous êtes *</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="categorie_client"
                value="particulier"
                checked={local.categorie_client === 'particulier'}
                onChange={() => setLocal({ ...local, categorie_client: 'particulier' })}
              />
              Particulier
            </label>
            <label>
              <input
                type="radio"
                name="categorie_client"
                value="mre"
                checked={local.categorie_client === 'mre'}
                onChange={() => setLocal({ ...local, categorie_client: 'mre' })}
              />
              Marocain résident à l’étranger
            </label>
            <label>
              <input
                type="radio"
                name="categorie_client"
                value="professionnel"
                checked={local.categorie_client === 'professionnel'}
                onChange={() => setLocal({ ...local, categorie_client: 'professionnel' })}
              />
              Professionnel
            </label>
          </div>
        </div>

        {local.categorie_client === 'mre' && (
          <div className="form-group">
            <label>Pays de résidence *</label>
            <input
              type="text"
              name="pays_residence"
              value={local.pays_residence}
              onChange={e => setLocal({ ...local, pays_residence: e.target.value })}
            />
          </div>
        )}

        {local.categorie_client === 'professionnel' && (
          <div className="form-group">
            <label>Activité professionnelle *</label>
            <input
              type="text"
              name="activite_professionnelle"
              value={local.activite_professionnelle}
              onChange={e => setLocal({ ...local, activite_professionnelle: e.target.value })}
            />
          </div>
        )}
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Souhaitez-vous souscrire à un crédit en co-emprunt ?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="coemprunt"
                value="true"
                checked={local.coemprunt === true}
                onChange={() => setLocal({ ...local, coemprunt: true })}
              />
              Oui
            </label>
            <label>
              <input
                type="radio"
                name="coemprunt"
                value="false"
                checked={local.coemprunt === false}
                onChange={() => setLocal({ ...local, coemprunt: false })}
              />
              Non
            </label>
          </div>
        </div>
      </div>

      <div className="submit-section">
        <button
          type="button"
          className="submit-btn"
          onClick={handleNext}
        >
          Valider l’étape
        </button>
      </div>
    </>
  );
};

export default MonProfil;
