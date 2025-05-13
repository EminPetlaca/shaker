const express = require('express');
const router = express.Router();

// Importujeme controller pro formuláře
const formController = require('../controllers/shakes');

// Definujeme routy pro odesílání formuláře
router.post('/submit', formController.submitForm); // Odeslání formuláře
router.post('/create', formController.createForm); // Vytvoření nového formuláře

module.exports = router;