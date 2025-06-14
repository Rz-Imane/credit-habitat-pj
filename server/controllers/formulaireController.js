const db = require('../models');
const Formulaire = db.formulaire;

// Création
// POST /api/formulaire
exports.create = async (req, res) => {
  try {
    const { date_naissance } = req.body;
    if (!date_naissance || date_naissance === "Invalid date") {
      return res.status(400).json({ error: "Date de naissance obligatoire et valide au format YYYY-MM-DD" });
    }
    const newForm = await Formulaire.create(req.body);
    res.status(201).json(newForm); // renvoie l'objet avec son id
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


