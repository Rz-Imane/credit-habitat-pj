const express = require('express');
const PDFDocument = require('pdfkit');
const router = express.Router();

// POST /api/proposition/pdf
router.post('/pdf', (req, res) => {
  const PDFDocument = require('pdfkit');
  const doc = new PDFDocument();

  const data = req.body; // <--- récupère les données du client

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="proposition.pdf"');
  doc.pipe(res);

  doc.fontSize(20).text("Votre Proposition de Crédit", { align: 'center' });
  doc.moveDown();

  doc.fontSize(14).text(`Nom: ${data.nom || ''} ${data.prenom || ''}`);
  doc.text(`Montant crédit demandé: ${data.montant || ''} Dhs`);
  doc.text(`Durée du crédit: ${data.duree || ''} mois`);
  doc.text(`Type de taux: ${data.taux || ''}`);
  doc.text(`Apport personnel: ${data.apportpersonnel || ''} Dhs`);
  doc.text(`Valeur du bien: ${data.valeur_du_bien || ''} Dhs`);
  doc.text(`Mensualité: ${data.mensualite || ''} Dhs/mois`);
  doc.text(`Assurance: ${data.assurance || ''} Dhs`);
  doc.moveDown();

  doc.text("Contact client:");
  doc.text(`Téléphone: ${data.tel || ''}`);
  doc.text(`Date de naissance: ${data.date_naissance || ''}`);
  doc.moveDown();

  console.log("Données reçues pour PDF :", req.body);

  doc.fontSize(12).text("Cette proposition est indicative et n’a pas de valeur contractuelle.", { align: 'center' });

  doc.end();
});


module.exports = router;
