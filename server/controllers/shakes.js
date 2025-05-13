const Shake = require("../models/shakes");
const Form = require("../models/form");

// Funkce pro vytvoření formuláře
exports.createForm = async (req, res) => {
  console.log("Přijatá data:", req.body); // Logujeme, co přijímáme
  try {
    const newForm = new Form({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    const savedForm = await newForm.save();
    res.status(201).send({
      message: 'Formulář byl úspěšně odeslán!',
      payload: savedForm
    });
  } catch (error) {
    console.error('Chyba při ukládání formuláře:', error);
    res.status(500).send({
      message: 'Došlo k chybě při ukládání formuláře',
      error: error.message
    });
  }
};

// Funkce pro odeslání formuláře s validací
exports.submitForm = async (req, res, next) => {
  const { name, email, message } = req.body;

  // Validace: Zkontrolujeme, zda všechna pole obsahují data
  if (!name || !email || !message) {
    return res.status(400).send({
      message: "Všechna pole musí být vyplněna",
    });
  }

  try {
    // Vytvoření nového formuláře
    const newForm = new Form({
      name,
      email,
      message,
    });

    // Uložení formuláře do databáze
    const savedForm = await newForm.save();

    // Odpověď pro úspěšné uložení
    if (savedForm) {
      return res.status(201).send({
        message: "Formulář byl úspěšně odeslán",
        payload: savedForm,
      });
    }

    res.status(500).send({
      message: "Formulář nebyl odeslán",
    });
  } catch (err) {
    console.error("Chyba při odesílání formuláře:", err);
    res.status(500).send({
      message: "Došlo k chybě při odesílání formuláře",
      error: err.message,
    });
  }
};

// Získání všech shake
exports.getAllShakes = async (req, res, next) => {
  try {
    const data = await Shake.find();
    if (data && data.length !== 0) {
      return res.status(200).send({
        message: "Shakes found",
        payload: data,
      });
    }
    res.status(404).send({
      message: "No shakes found",
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

// Získání shake podle ID
exports.getShakeById = async (req, res, next) => {
  try {
    const data = await Shake.findById(req.params.id);
    if (data) {
      return res.status(200).send({
        message: "Shake found",
        payload: data,
      });
    }
    res.status(404).send({
      message: "Shake not found",
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

// Vytvoření nového shake
exports.createShake = async (req, res, next) => {
  try {
    const data = new Shake({
      type: req.body.type,
      ingredients: req.body.ingredients,
      customerName: req.body.customerName,
    });

    const result = await data.save();
    if (result) {
      return res.status(201).send({
        message: "Shake created",
        payload: result,
      });
    }

    res.status(500).send({
      message: "Shake not created",
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

// Aktualizace shake
exports.updateShake = async (req, res, next) => {
  try {
    const data = {
      type: req.body.type,
      ingredients: req.body.ingredients,
      customerName: req.body.customerName,
    };

    const result = await Shake.findByIdAndUpdate(req.params.id, data, { new: true });
    if (result) {
      return res.status(200).send({
        message: "Shake updated",
        payload: result,
      });
    }

    res.status(500).send({
      message: "Shake not updated",
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

// Smazání shake
exports.deleteShake = async (req, res, next) => {
  try {
    const result = await Shake.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        message: "Shake deleted",
        payload: result,
      });
    }

    res.status(500).send({
      message: "Shake not deleted",
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
