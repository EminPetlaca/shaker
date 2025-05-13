const Shake = require("../models/shakes");

exports.createShake = async (req, res) => {
  const { type, ingredients, customerName } = req.body;

  if (!type || !ingredients || !customerName) {
    return res.status(400).send({
      message: "Všechna pole musí být vyplněna",
    });
  }

  try {
    const newShake = new Shake({
      type,
      ingredients,
      customerName,
    });

    const result = await newShake.save();

    if (result) {
      return res.status(201).send({
        message: "Shake byl úspěšně vytvořen",
        payload: result,
      });
    }

    res.status(500).send({
      message: "Shake nebyl vytvořen",
    });
  } catch (err) {
    console.error("Chyba při vytváření shake:", err);
    res.status(500).send({
      message: "Došlo k chybě při vytváření shake",
      error: err.message,
    });
  }
};
