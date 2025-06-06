const express = require('express');
const router = express.Router();
const formulaireController = require('../controllers/formulaireController');

router.post('/', formulaireController.create);

module.exports = router;
