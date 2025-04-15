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
                const smoothieOptions = ["Banana", "Strawberry", "Mango", "Spinach"];
                const milkshakeOptions = ["Chocolate", "Vanilla", "Strawberry Syrup", "Caramel"];

                const allowed = this.type === "Smoothie" ? smoothieOptions : milkshakeOptions;
                return value.every(v => allowed.includes(v));
            },
            message: props => `Invalid ingredient(s) for ${props.value}`
        }
    }
});

module.exports = mongoose.model("Shake", schema);
