const Form = require("../models/form");

// Získání všech formulářů
exports.getAllForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).send({
      message: "Formuláře načteny",
      payload: forms,
    });
  } catch (error) {
    res.status(500).send({
      message: "Chyba při načítání formulářů",
      error: error.message,
    });
  }
};

// Vytvoření nového formuláře (např. z administrace)
exports.createForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).send({ message: "Všechna pole musí být vyplněna." });
    }

    const newForm = new Form({ name, email, message });
    const savedForm = await newForm.save();

    res.status(201).send({
      message: "Formulář vytvořen",
      payload: savedForm,
    });
  } catch (error) {
    res.status(500).send({
      message: "Chyba při vytváření formuláře",
      error: error.message,
    });
  }
};

// Odeslání formuláře (např. z kontaktního formuláře)
exports.submitForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).send({ message: "Všechna pole musí být vyplněna." });
    }

    const form = new Form({ name, email, message });
    const saved = await form.save();

    res.status(201).send({
      message: "Formulář úspěšně odeslán",
      payload: saved,
    });
  } catch (error) {
    res.status(500).send({
      message: "Chyba při odesílání formuláře",
      error: error.message,
    });
  }
};

exports.deleteForm = async (req, res) => {
  try {
    const deleted = await Form.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).send({ message: "Formulář nenalezen" });
    }
    res.status(200).send({
      message: "Formulář byl smazán",
      payload: deleted
    });
  } catch (error) {
    res.status(500).send({
      message: "Chyba při mazání formuláře",
      error: error.message
    });
  }
};

