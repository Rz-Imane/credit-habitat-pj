import React from 'react';
import '../styles/FormPage.css';

type MonProfilProps = {
  data: any;
  setData: (fn: (prev: any) => any) => void;
  onNext: () => void;
};

const MonProfil = ({ data, setData, onNext }: MonProfilProps) => {
  const [touched, setTouched] = React.useState(false);

  const handleChange = (field: string, value: any) => {
    // Corrige les booléens pour isclient et coemprunt
    if (field === "isclient" || field === "coemprunt") {
      value = value === "true" ? true : value === "false" ? false : value;
    }
    setData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Validation :
  const errors = {
    civilite: !data.civilite,
    prenom: !data.prenom,
    nom: !data.nom,
    date_naissance: !data.date_naissance || !/^\d{4}-\d{2}-\d{2}$/.test(data.date_naissance),
    tel: !data.tel,
    isclient: typeof data.isclient !== 'boolean',
    categorie_client: !data.categorie_client,
    pays_residence: data.categorie_client === 'mre' && !data.pays_residence,
    activite_professionnelle: data.categorie_client === 'professionnel' && !data.activite_professionnelle,
    coemprunt: typeof data.coemprunt !== 'boolean',
  };
  const hasError = Object.values(errors).some(Boolean);

  const handleNext = () => {
    setTouched(true);
    if (!hasError) {
      onNext();
    }
  };

  return (
    <>
      <div className="form-section">
        <div className="form-group">
          <label>Civilité *</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="civilite" value="M." checked={data.civilite === 'M.'} onChange={() => handleChange('civilite', 'M.')} /> M.
            </label>
            <label>
              <input type="radio" name="civilite" value="Mme" checked={data.civilite === 'Mme'} onChange={() => handleChange('civilite', 'Mme')} /> Mme
            </label>
            <label>
              <input type="radio" name="civilite" value="Mlle" checked={data.civilite === 'Mlle'} onChange={() => handleChange('civilite', 'Mlle')} /> Mlle
            </label>
          </div>
          {touched && errors.civilite && <div className="warning-msg">Ce champ est requis.</div>}
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Prénom *</label>
          <input type="text" name="prenom" value={data.prenom} onChange={e => handleChange('prenom', e.target.value)} />
          {touched && errors.prenom && <div className="warning-msg">Ce champ est requis.</div>}
        </div>
        <div className="form-group">
          <label>Nom *</label>
          <input type="text" name="nom" value={data.nom} onChange={e => handleChange('nom', e.target.value)} />
          {touched && errors.nom && <div className="warning-msg">Ce champ est requis.</div>}
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Date de naissance *</label>
          <input type="date" name="date_naissance" value={data.date_naissance} onChange={e => handleChange('date_naissance', e.target.value)} />
          {touched && errors.date_naissance && (
            <div className="warning-msg">Format attendu : YYYY-MM-DD.</div>
          )}
        </div>
        <div className="form-group">
          <label>Téléphone *</label>
          <input type="tel" name="tel" value={data.tel} onChange={e => handleChange('tel', e.target.value)} />
          {touched && errors.tel && <div className="warning-msg">Ce champ est requis.</div>}
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Êtes-vous un client BANK OF AFRICA ? *</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="isclient" value="true" checked={data.isclient === true} onChange={e => handleChange('isclient', e.target.value)} /> Oui
            </label>
            <label>
              <input type="radio" name="isclient" value="false" checked={data.isclient === false} onChange={e => handleChange('isclient', e.target.value)} /> Non
            </label>
          </div>
          {touched && errors.isclient && <div className="warning-msg">Obligatoire.</div>}
        </div>
        <div className="form-group">
          <label>Vous êtes *</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="categorie_client" value="particulier" checked={data.categorie_client === 'particulier'} onChange={() => handleChange('categorie_client', 'particulier')} /> Particulier
            </label>
            <label>
              <input type="radio" name="categorie_client" value="mre" checked={data.categorie_client === 'mre'} onChange={() => handleChange('categorie_client', 'mre')} /> Marocain résident à l’étranger
            </label>
            <label>
              <input type="radio" name="categorie_client" value="professionnel" checked={data.categorie_client === 'professionnel'} onChange={() => handleChange('categorie_client', 'professionnel')} /> Professionnel
            </label>
          </div>
          {touched && errors.categorie_client && <div className="warning-msg">Ce champ est requis.</div>}
        </div>

        {data.categorie_client === 'mre' && (
          <div className="form-group">
            <label>Pays de résidence *</label>
            <input type="text" name="pays_residence" value={data.pays_residence} onChange={e => handleChange('pays_residence', e.target.value)} />
            {touched && errors.pays_residence && <div className="warning-msg">Ce champ est requis pour les MRE.</div>}
          </div>
        )}

        {data.categorie_client === 'professionnel' && (
          <div className="form-group">
            <label>Activité professionnelle *</label>
            <input type="text" name="activite_professionnelle" value={data.activite_professionnelle} onChange={e => handleChange('activite_professionnelle', e.target.value)} />
            {touched && errors.activite_professionnelle && <div className="warning-msg">Ce champ est requis pour les professionnels.</div>}
          </div>
        )}
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Souhaitez-vous souscrire à un crédit en co-emprunt ? *</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="coemprunt" value="true" checked={data.coemprunt === true} onChange={e => handleChange('coemprunt', e.target.value)} /> Oui
            </label>
            <label>
              <input type="radio" name="coemprunt" value="false" checked={data.coemprunt === false} onChange={e => handleChange('coemprunt', e.target.value)} /> Non
            </label>
          </div>
          {touched && errors.coemprunt && <div className="warning-msg">Ce champ est requis.</div>}
        </div>
      </div>

      <div className="submit-section">
        <button type="button" className="submit-btn" onClick={handleNext}>
          Valider l’étape
        </button>
      </div>

      {/* Style warning local rapide */}
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

export default MonProfil;
