const express = require("express");
const User = require("../models/User");

const router = express.Router();

// 🟢 Registrera användare
router.post("/register", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Kolla om användaren redan finns
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "E-postadressen används redan" });
        }

        // Skapa ny användare
        const user = await User.create({ email, password });

        if (user) {
            res.status(201).json({ message: "Användare skapad", userId: user._id });
        } else {
            res.status(400).json({ message: "Ogiltiga användaruppgifter" });
        }
    } catch (error) {
        res.status(500).json({ message: "Serverfel", error: error.message });
    }
});

const bcrypt = require("bcryptjs");

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Hämta användaren från databasen
        const user = await User.findOne({ email });

        // Kolla om användaren finns och lösenordet stämmer
        if (user && (await user.matchPassword(password))) {
            res.status(200).json({ message: "Inloggning lyckades!", userId: user._id });
        } else {
            res.status(401).json({ message: "Fel e-post eller lösenord" });
        }
    } catch (error) {
        res.status(500).json({ message: "Serverfel", error: error.message });
    }
});


module.exports = router;
