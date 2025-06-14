import React from 'react';
import '../styles/FormPage.css';

type MonProfilProps = {
  data: any;
  setData: (fn: (prev: any) => any) => void;
  onNext: () => void;
};

const MonProfil = ({ data, setData, onNext }: MonProfilProps) => {
  const handleChange = (field: string, value: any) => {
    setData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(data.date_naissance)) {
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
                checked={data.civilite === 'M.'}
                onChange={() => handleChange('civilite', 'M.')}
              /> M.
            </label>
            <label>
              <input
                type="radio"
                name="civilite"
                value="Mme"
                checked={data.civilite === 'Mme'}
                onChange={() => handleChange('civilite', 'Mme')}
              /> Mme
            </label>
            <label>
              <input
                type="radio"
                name="civilite"
                value="Mlle"
                checked={data.civilite === 'Mlle'}
                onChange={() => handleChange('civilite', 'Mlle')}
              /> Mlle
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
            value={data.prenom}
            onChange={e => handleChange('prenom', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Nom *</label>
          <input
            type="text"
            name="nom"
            value={data.nom}
            onChange={e => handleChange('nom', e.target.value)}
          />
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Date de naissance *</label>
          <input
            type="date"
            name="date_naissance"
            value={data.date_naissance}
            onChange={e => handleChange('date_naissance', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Téléphone *</label>
          <input
            type="tel"
            name="tel"
            value={data.tel}
            onChange={e => handleChange('tel', e.target.value)}
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
                checked={data.isclient === true}
                onChange={() => handleChange('isclient', true)}
              /> Oui
            </label>
            <label>
              <input
                type="radio"
                name="isclient"
                value="false"
                checked={data.isclient === false}
                onChange={() => handleChange('isclient', false)}
              /> Non
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
                checked={data.categorie_client === 'particulier'}
                onChange={() => handleChange('categorie_client', 'particulier')}
              /> Particulier
            </label>
            <label>
              <input
                type="radio"
                name="categorie_client"
                value="mre"
                checked={data.categorie_client === 'mre'}
                onChange={() => handleChange('categorie_client', 'mre')}
              /> Marocain résident à l’étranger
            </label>
            <label>
              <input
                type="radio"
                name="categorie_client"
                value="professionnel"
                checked={data.categorie_client === 'professionnel'}
                onChange={() => handleChange('categorie_client', 'professionnel')}
              /> Professionnel
            </label>
          </div>
        </div>

        {data.categorie_client === 'mre' && (
          <div className="form-group">
            <label>Pays de résidence *</label>
            <input
              type="text"
              name="pays_residence"
              value={data.pays_residence}
              onChange={e => handleChange('pays_residence', e.target.value)}
            />
          </div>
        )}

        {data.categorie_client === 'professionnel' && (
          <div className="form-group">
            <label>Activité professionnelle *</label>
            <input
              type="text"
              name="activite_professionnelle"
              value={data.activite_professionnelle}
              onChange={e => handleChange('activite_professionnelle', e.target.value)}
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
                checked={data.coemprunt === true}
                onChange={() => handleChange('coemprunt', true)}
              /> Oui
            </label>
            <label>
              <input
                type="radio"
                name="coemprunt"
                value="false"
                checked={data.coemprunt === false}
                onChange={() => handleChange('coemprunt', false)}
              /> Non
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
