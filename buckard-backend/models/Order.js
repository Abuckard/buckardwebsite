const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    font: String,
    color: String,
    glow: String,
    text: String,
    size: String,
    price: Number,
    date: {
        type: Date,
        default: Date.now,
    },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
