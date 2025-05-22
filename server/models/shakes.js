const mongoose = require("mongoose");

const schema = mongoose.Schema({
    type: {
        type: String,
        enum: ["Smoothie", "Milkshake"],
        required: true
    },
    ingredients: {
        type: [String],
        required: true,
        validate: {
            validator: function (value) {
                const smoothieOptions = ["Banán", "Borůvka", "Jablko", "Cukr","Jahoda", "Kiwi","Malina","Med","Meruňka",];
                const milkshakeOptions = ["Banán", "Bílá Čokoláda", "Čokoláda", "Jahoda","Lotus", "Cukr", "Malina","Oreo","Zmrzlina",];

                const allowed = this.type === "Smoothie" ? smoothieOptions : milkshakeOptions;
                return value.every(v => allowed.includes(v));
            },
            message: props => `Invalid ingredient(s) for ${props.value}`
        }
    },
    customerName: {
        type: String,
        required: true,
        minlength: 2
    }
});

module.exports = mongoose.model("Shake", schema);