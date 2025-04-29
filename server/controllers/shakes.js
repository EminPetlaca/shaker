const Shake = require("../models/shakes");

// Get all shakes
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

// Get shake by ID
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

// Create a new shake
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

// Update shake
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

// Delete shake
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
