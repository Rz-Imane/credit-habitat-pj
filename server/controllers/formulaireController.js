const db = require('../models');
const Formulaire = db.formulaire;


// POST /api/formulaire
exports.create = async (req, res) => {
  try {
    console.log('Payload reçu:', req.body);
    const { date_naissance, utilisateur_id, ...rest } = req.body;
    if (!date_naissance || date_naissance === "Invalid date") {
      return res.status(400).json({ error: "Date de naissance obligatoire et valide au format YYYY-MM-DD" });
    }
    // On crée avec l’utilisateur associé
    const newForm = await Formulaire.create({
      date_naissance,
      utilisateur_id, 
      ...rest
    });
    res.status(201).json(newForm);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur", details: err.message });
  }
};



// PUT /api/formulaire/:id
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const record = await Formulaire.findByPk(id);
    if (!record) return res.status(404).json({ error: "Not found" });
    await record.update(req.body);
    res.json(record);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur", details: err.message });
  }
};


exports.getByUser = async (req, res) => {
  try {
    const { utilisateur_id } = req.params;
    const formulaire = await Formulaire.findOne({ where: { utilisateur_id } });
    if (!formulaire) return res.status(404).json({ error: "Aucun formulaire trouvé" });
    res.json(formulaire);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};


