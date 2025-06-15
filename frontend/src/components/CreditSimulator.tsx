import React, { useState } from 'react';
import '../styles/CreditSimulator.css';
import { useNavigate } from 'react-router-dom';
import bg from '../assets/bg1.jpg';

const CreditSimulator = () => {
  const navigate = useNavigate();
  const [montant, setMontant] = useState(70000);
  const [duree, setDuree] = useState(7);

  const montantMin = 70000;
  const montantMax = 10000000;
  const dureeMin = 3;
  const dureeMax = 27;

  const isMontantValide = montant >= montantMin && montant <= montantMax;
  const isDureeValide = duree >= dureeMin && duree <= dureeMax;
  const isValid = isMontantValide && isDureeValide;

  const taux = 4.5;
  const tauxMensuel = taux / 100 / 12;
  const nbMois = duree * 12;

  const mensualite = isValid
    ? (montant * tauxMensuel) / (1 - Math.pow(1 + tauxMensuel, -nbMois))
    : 0;

  const mensualiteRounded = Math.round(mensualite);
  const totalRembourse = mensualiteRounded * nbMois;
  const interets = totalRembourse - montant;

  return (
    <div className="simulator-bg" style={{ backgroundImage: `url(${bg})` }}>
      <div className="simulator-wrapper">
        <h2>Simulateur de crédit</h2>

        <div className="input-group">
          <label>Montant du crédit</label>
          <input
            type="text"
            value={montant.toLocaleString('fr-FR') + ' Dhs'}
            onChange={(e) => {
              const cleaned = e.target.value.replace(/\D/g, '');
              setMontant(Number(cleaned));
            }}
          />
          <input
            type="range"
            min={montantMin}
            max={montantMax}
            step={1000}
            value={Math.min(montant, montantMax)}
            onChange={(e) => setMontant(Number(e.target.value))}
          />
        </div>

        <div className="input-group">
          <label>Durée en années</label>
          <input
            type="text"
            value={duree + ' ans'}
            onChange={(e) => {
              const cleaned = e.target.value.replace(/\D/g, '');
              setDuree(Number(cleaned));
            }}
          />
          <input
            type="range"
            min={dureeMin}
            max={dureeMax}
            value={duree}
            onChange={(e) => setDuree(Number(e.target.value))}
          />
        </div>

        {montant < montantMin && (
          <p className="error-message">
            Le montant doit être ≥ {montantMin.toLocaleString()} Dhs
          </p>
        )}

        {montant > montantMax && (
          <p className="error-message">
            Vous pouvez simuler avec un montant supérieur à 10 000 000 Dhs dans la simulation personnalisée.
          </p>
        )}

        {(duree < dureeMin || duree > dureeMax) && (
          <p className="error-message">
            La durée doit être entre {dureeMin} et {dureeMax} ans
          </p>
        )}

        {isValid && (
          <div className="results">
            <h3>Résultat de simulation</h3>
            <div className="monthly">{mensualiteRounded} Dhs/Mois</div>
            <p className="small-text">Mensualité TTC (hors assurance)</p>

            <button className="customize-btn" onClick={() => navigate("/signup")}>
              ✔ Personnaliser ma simulation
            </button>

            <div className="summary">
              <p>Total intérêts <strong>{interets.toLocaleString()} Dhs</strong></p>
              <p>Montant total remboursé <strong>{totalRembourse.toLocaleString()} Dhs</strong></p>
              <p>Taux HT (sans assurance) <strong>{taux}%</strong></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreditSimulator;
