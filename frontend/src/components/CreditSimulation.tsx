import React from 'react'; 
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/CreditSimulation.css';
import bg3 from "../assets/bg3.png";
import MinimalFooter from './MinimalFooter';

// Fonction pour calculer les frais de notaire au Maroc
function calcFraisNotaire(valeurBienRaw: any) {
  const valeurBien = Number(valeurBienRaw) || 0;
  const honoraires = Math.max(valeurBien * 0.01 * 1.2, 2500); // 1% + TVA (20%) min 2500 Dhs
  const droitsEnregistrement = valeurBien * 0.04;
  const conservationFonc = valeurBien * 0.015;
  const timbre = 200;
  const redactionActe = 750; // valeur médiane entre 500 et 1000
  const certificats = 200;   // 100 x 2
  const divers = 750;        // valeur médiane entre 500 et 1000

  const total = honoraires + droitsEnregistrement + conservationFonc + timbre + redactionActe + certificats + divers;
  return {
    honoraires: Math.round(honoraires),
    droitsEnregistrement: Math.round(droitsEnregistrement),
    conservationFonc: Math.round(conservationFonc),
    timbre,
    redactionActe,
    certificats,
    divers,
    total: Math.round(total),
  };
}

const CreditSimulation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state;

  // On calcule l'assurance ici pour la passer dans le PDF !
  const insurance = formData?.apportpersonnel
    ? Math.round(Number(formData.apportpersonnel) * 0.02)
    : 0;

  const handleDownload = async () => {
    const payload = { ...formData, assurance: insurance };
    const res = await fetch('/api/proposition/pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = "proposition.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  React.useEffect(() => {
    if (!formData) navigate('/form');
  }, [formData, navigate]);

  if (!formData) return null;

  // Exemple de calculs (remplace par les vrais formules si besoin)
  const totalInterest = formData.montant && formData.duree && formData.taux
    ? Math.round(Number(formData.montant) * Number(formData.duree) * 0.04)
    : "---";
  const monthlyAmount = formData.mensualite || "---";
  const teg = "5.32%";
  const totalWithInsurance = formData.montant && insurance !== 0
    ? Number(formData.montant) + Number(insurance)
    : "---";
  const frais = calcFraisNotaire(formData.valeur_du_bien);

  return (
    <div className="credit-simulation" style={{ backgroundImage: `url(${bg3})` }}>
      <div className="footer-push">
        <div className="credit-header">
          <p className="title">Félicitations !</p>
          <p className="subtitle">Votre prêt immobilier est pré-approuvé.</p>
        </div>

        <div className="credit-cards">
          {/* Carte gauche : infos crédit */}
          <div className="credit-card left-card">
            <h2 className="section-title">Votre mensualité TTC</h2>
            <p className="monthly-amount">{monthlyAmount} Dhs / Mois</p>
            <p className="duration">Durée : {formData.duree || "---"} mois</p>

            <button className="btn download-btn" onClick={handleDownload}>
              Téléchargez proposition de crédit
            </button>

            <div className="info-box">
              <p>Montant crédit demandé : {formData.montant} Dhs</p>
              <p>Total intérêts : {totalInterest} Dhs</p>
              <p>Assurances : {insurance} Dhs</p>
              <p>Taux du crédit : {formData.taux}</p>
              <p>TEG : {teg}</p>
              <p>Montant crédit total (avec assurance) : {totalWithInsurance} Dhs</p>
              <p>Coût total du crédit : {formData.valeur_du_bien} Dhs</p>
            </div>

            <div className="additional-info">
              <p>Expertise immobilière : <strong>GRATUIT</strong></p>
              <p>Frais de dossier : <strong>GRATUIT</strong></p>
              <p>Date de prélèvement de l’échéance : {formData.jourrelev}</p>
            </div>

            <button className="btn simulation-btn" onClick={() => navigate("/form")}>
              Refaire ma simulation
            </button>
          </div>

          {/* Carte droite : frais de notaire */}
          <div className="credit-card right-card">
            <h2 className="section-title">Frais de Notaire</h2>
            <div className="info-box">
              <p>Frais de notaire (honoraires) : {frais.honoraires} Dhs</p>
              <p>Droits d’enregistrement : {frais.droitsEnregistrement} Dhs</p>
              <p>Frais de conservation foncière : {frais.conservationFonc} Dhs</p>
              <p>Timbre fiscal : {frais.timbre} Dhs</p>
              <p>Frais de rédaction d’acte : {frais.redactionActe} Dhs</p>
              <p>Certificats de propriété : {frais.certificats} Dhs</p>
              <p>Frais divers : {frais.divers} Dhs</p>
              <hr style={{ margin: "8px 0" }} />
              <p style={{ fontWeight: 'bold', fontSize: 17 }}>
                Total estimé : {frais.total} Dhs
              </p>
            </div>
            <div className="disclaimer">
              <p>*Estimation à titre indicatif – les montants varient selon la nature du bien et la ville.</p>
              <p><strong>Offre non contractuelle</strong></p>
              <p>
                Cette offre est valable sous réserve d’une même situation financière sur les 30 prochains jours.
                En cas d’évolution, un ajustement de l’offre pourra être nécessaire.
                Les montants indiqués sont à titre indicatif.
              </p>
            </div>
            <button className="btn primary-btn" onClick={() => navigate("/merci")}>Souscrire à l’offre</button>
          </div>
        </div>
      </div>
      <MinimalFooter />
    </div>
  );
};

export default CreditSimulation;
