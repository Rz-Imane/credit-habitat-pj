const db = require('../models');
const Formulaire = db.formulaire;

exports.create = async (req, res) => {
    console.log('API HIT!');
    console.log('BODY RECUPERE:', req.body); 
  try {
    const { date_naissance } = req.body;
    if (!date_naissance || date_naissance === "Invalid date") {
      return res.status(400).json({ error: "Date de naissance obligatoire et valide au format YYYY-MM-DD" });
    }
    const newForm = await Formulaire.create(req.body);
    res.status(201).json(newForm);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur", details: err.message });
  }
};

