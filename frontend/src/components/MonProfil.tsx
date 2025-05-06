import React from 'react';
import '../styles/FormPage.css';

type MonProfilProps = {
  onNext: () => void;
};
const MonProfil = ({ onNext }: MonProfilProps) => {
    return (
    <>
      <div className="form-section" >
        <div className="form-group">
          <label>Civilité</label>
          <div className="radio-group">
            <label><input type="radio" name="civility" />M.</label>
            <label><input type="radio" name="civility" />Mme</label>
            <label><input type="radio" name="civility" />Mlle</label>
          </div>
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Prénom</label>
          <input type="text" placeholder="Text" />
        </div>
        <div className="form-group">
          <label>Nom</label>
          <input type="text" placeholder="Text" />
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Date de naissance</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Téléphone</label>
          <input type="tel" placeholder="+212 (__) ___ __ __" />
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Êtes-vous un client BANK OF AFRICA ?</label>
          <div className="radio-group">
            <label><input type="radio" name="client" />Oui</label>
            <label><input type="radio" name="client" />Non</label>
          </div>
        </div>

        <div className="form-group">
          <label>Vous êtes ?</label>
          <div className="radio-group">
            <label><input type="radio" name="type" />Particulier</label>
            <label><input type="radio" name="type" />Marocain résident à l’étranger</label>
            <label><input type="radio" name="type" />Professionnel</label>
          </div>
        </div>
      </div>

      <div className="terms">
        <label><input type="checkbox" />J’ai lu et j’accepte les termes de conditions d’utilisation</label>
        <label><input type="checkbox" />J’accepte de recevoir les offres professionnelles de BANK OF AFRICA</label>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Souhaitez-vous souscrire à un crédit en co-emprunt ?</label>
          <div className="radio-group">
            <label><input type="radio" name="co-loan" />Oui</label>
            <label><input type="radio" name="co-loan" />Non</label>
          </div>
        </div>
      </div>

      <div className="submit-section">
        <button className="submit-btn" onClick={onNext}>Valider</button>
      </div>
    </>
  );
};

export default MonProfil;
