const express = require('express');
const router = express.Router();
const formulaireController = require('../controllers/formulaireController');

router.post('/', formulaireController.create);
router.put('/:id', formulaireController.update);
router.get('/utilisateur/:utilisateur_id', formulaireController.getByUser);



module.exports = router;
