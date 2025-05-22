const express = require('express');
const router = express.Router();
const { Formulaire } = require('../models');

// Save form
router.post('/', async (req, res) => {
  try {
    const formulaire = await Formulaire.create(req.body);
    res.status(201).json(formulaire);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur lors de la sauvegarde." });
  }
});

// Get form by ID
router.get('/:id', async (req, res) => {
  try {
    const formulaire = await Formulaire.findByPk(req.params.id);
    if (!formulaire) return res.status(404).json({ error: "Introuvable" });
    res.json(formulaire);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur serveur." });
  }
});

module.exports = router;
