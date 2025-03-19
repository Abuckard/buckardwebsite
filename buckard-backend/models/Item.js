const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    text: { type: String, required: true },
    font: { type: String, required: true },
    color: { type: String, required: true },
    glow: { type: String, required: true },
    email: { type: String, required: true },
    size: { type: String, required: true },
    price: { type: Number, required: true },
    dimensions: { type: String, required: true },


});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
