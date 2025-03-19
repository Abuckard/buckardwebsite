const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db"); // ✅ Kopplar upp till MongoDB
const Item = require("./models/Item"); // ✅ Importera modellen

dotenv.config();
connectDB(); // 🔹 Anslut till MongoDB

const app = express();
app.use(express.json()); // 🔹 Middleware för att tolka JSON

app.use(cors());

// Testroute
app.get("/api/items", async (req, res) => {
    try {
        const items = await Item.find(); // Hämtar alla objekt från databasen
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: "Serverfel vid hämtning av data" });
    }
});

app.get("/api/items/:id", async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: "Objektet hittades inte" });
        }
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: "Serverfel vid hämtning av objektet" });
    }
});

// 🔹 NY POST-route för att spara data i MongoDB
app.post("/api/items", async (req, res) => {
    try {
        const { text, font, color, glow, email, size, price, dimensions } = req.body;

        if (!text || !font || !color || !glow || !email || !size || !price || !dimensions) {
            return res.status(400).json({ message: "Alla fält måste fyllas i" });
        }

        const newItem = new Item({ text, font, color, glow, email, size, price, dimensions }); // 📌 Sparar hela objektet
        await newItem.save();

        res.status(201).json({ message: "Objekt tillagt!", item: newItem });
    } catch (error) {
        res.status(500).json({ message: "Något gick fel", error: error.message });
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
