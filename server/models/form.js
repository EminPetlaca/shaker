const mongoose = require('mongoose');

// Definice schématu pro formulář
const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

const Form = mongoose.model('Form', formSchema);

module.exports = Form;