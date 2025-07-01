import React, { useState } from 'react';

type CinData = {
  nom: string;
  prenom: string;
  cin: string;
  adresse: string;
};

type Props = {
  onNext: (cinData: CinData) => void;
};

const Step1CIN: React.FC<Props> = ({ onNext }) => {
  const [cinData, setCinData] = useState<CinData>({
    nom: "",
    prenom: "",
    cin: "",
    adresse: ""
  });

  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCinData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cinData.nom || !cinData.prenom || !cinData.cin || !cinData.adresse) {
      setError("Veuillez remplir tous les champs.");
      return;
    }
    setError("");
    onNext(cinData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: 700,
        margin: "60px auto",
        background: "none",
        boxShadow: "none",
        padding: 0,
      }}
    >
      <div className="form-header">
        <h3 className="form-title" style={{ background: "none" }}>
          Saisissez vos informations de carte d'identité nationale
        </h3>
      </div>
      <div className="form-section">
        <div className="form-group">
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            name="nom"
            id="nom"
            value={cinData.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="prenom">Prénom</label>
          <input
            type="text"
            name="prenom"
            id="prenom"
            value={cinData.prenom}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form-section">
          <div className="form-group">
            <label htmlFor="cin">Numéro de CIN</label>
            <input
              type="text"
              name="cin"
              id="cin"
              value={cinData.cin}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group" style={{ flex: "1 1 100%" }}>
            <label htmlFor="adresse">Adresse</label>
            <textarea
              name="adresse"
              id="adresse"
              value={cinData.adresse}
              onChange={handleChange as any}
              required
              rows={3}
              style={{ resize: "vertical", minHeight: 50 }}
            />
          </div>
        </div>

      {error && <div className="small-text" style={{ color: "#c00" }}>{error}</div>}
      <div className="submit-section">
        <button type="submit" className="submit-btn">
          Suivant
        </button>
      </div>
    </form>
  );
};

export default Step1CIN;
