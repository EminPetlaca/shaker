const express = require('express');
const router = express.Router();

// Importujeme controller pro formuláře
const formController = require('../controllers/form');

// Definujeme routy pro odesílání formuláře
router.get('/', formController.getAllForms)
router.post('/submit', formController.submitForm); // Odeslání formuláře
router.post('/create', formController.createForm); // Vytvoření nového formuláře
router.delete('/:id', formController.deleteForm);

module.exports = router;