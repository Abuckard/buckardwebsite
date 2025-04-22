

// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const bcrypt = require("bcryptjs"); // Har strulat, ska kolla på det
// const jwt = require("jsonwebtoken");
// const connectDB = require("./config/db");

// const Item = require("./models/Item");
// const User = require("./models/User");




// dotenv.config();
// connectDB();

// const app = express();
// app.use(express.json()); //  Middleware för att tolka JSON
// app.use(cors()); //  Tillåt API-anrop från frontend




// //  Hämta alla objekt
// app.get("/api/items", async (req, res) => {
//     try {
//         const items = await Item.find();
//         res.json(items);
//     } catch (error) {
//         res.status(500).json({ message: "Serverfel vid hämtning av data" });
//     }
// });




// //  Hämta ett enskilt objekt
// app.get("/api/items/:id", async (req, res) => {
//     try {
//         const item = await Item.findById(req.params.id);
//         if (!item) {
//             return res.status(404).json({ message: "Objektet hittades inte" });
//         }
//         res.json(item);
//     } catch (error) {
//         res.status(500).json({ message: "Serverfel vid hämtning av objektet" });
//     }
// });




// //  Lägg till nytt objekt i databasen
// app.post("/api/items", async (req, res) => {
//     try {
//         const { text, font, color, glow, email, size, price, dimensions } = req.body;

//         if (!text || !font || !color || !glow || !email || !size || !price || !dimensions) {
//             return res.status(400).json({ message: "Alla fält måste fyllas i" });
//         }

//         const newItem = new Item({ text, font, color, glow, email, size, price, dimensions });
//         await newItem.save();

//         res.status(201).json({ message: "Objekt tillagt!", item: newItem });
//     } catch (error) {
//         res.status(500).json({ message: "Något gick fel", error: error.message });
//     }
// });












// //  Registrera användare
// app.post("/api/users/register", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const userExists = await User.findOne({ email });
//         if (userExists) {
//             return res.status(400).json({ message: "E-postadressen används redan" });
//         }


//         const user = await User.create({ email, password });

//         res.status(201).json({ message: "Användare skapad!", userId: user._id });
//     } catch (error) {
//         res.status(500).json({ message: "Serverfel", error: error.message });
//     }
// });




// //  Logga in användare
// app.post("/api/users/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const user = await User.findOne({ email });

//         if (!user) {
//             return res.status(401).json({ message: "Fel e-post eller lösenord" });
//         }

//         console.log(" Hittad användare:", user); // DEBUG

//         //  Använd matchPassword från userSchema istället för bcrypt.compare()
//         const isMatch = await user.matchPassword(password);
//         console.log("🔍 Lösenord matchar?", isMatch); // DEBUG

//         if (!isMatch) {
//             return res.status(401).json({ message: "Fel e-post eller lösenord" });
//         }

//         const token = jwt.sign(
//             { userId: user._id, email: user.email },
//             process.env.JWT_SECRET,
//             { expiresIn: "1h" }
//         );

//         res.json({ message: "Inloggning lyckades!", token });
//     } catch (error) {
//         res.status(500).json({ message: "Serverfel", error: error.message });
//     }
// });










// // Information admin





// app.get("/api/admin", async (req, res) => {
//     try {
//         const user = await User.findOne({ username: "admin" });
//         if (!user) {
//             return res.status(404).json({ message: "Admin-användare hittades inte" });
//         }
//         res.json(user);
//     } catch (error) {
//         res.status(500).json({ message: "Serverfel", error: error.message });
//     }
// });

// //  Hämta alla användare (endast e-post visas)
// app.get("/api/users", async (req, res) => {
//     try {
//         const users = await User.find({}, "email");
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({ message: "Serverfel", error: error.message });
//     }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bcrypt = require("bcryptjs"); // (Kvar även om du nämnde att det strular ibland)
const jwt = require("jsonwebtoken");
const connectDB = require("./config/db");
const path = require("path");

const Item = require("./models/Item");
const User = require("./models/User");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// === API ROUTES ===

// Hämta alla objekt
app.get("/api/items", async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: "Serverfel vid hämtning av data" });
    }
});

// Hämta ett enskilt objekt
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

// Lägg till nytt objekt
app.post("/api/items", async (req, res) => {
    try {
        const { text, font, color, glow, email, size, price, dimensions } = req.body;

        if (!text || !font || !color || !glow || !email || !size || !price || !dimensions) {
            return res.status(400).json({ message: "Alla fält måste fyllas i" });
        }

        const newItem = new Item({ text, font, color, glow, email, size, price, dimensions });
        await newItem.save();

        res.status(201).json({ message: "Objekt tillagt!", item: newItem });
    } catch (error) {
        res.status(500).json({ message: "Något gick fel", error: error.message });
    }
});

// Registrera användare
app.post("/api/users/register", async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "E-postadressen används redan" });
        }

        const user = await User.create({ email, password });

        res.status(201).json({ message: "Användare skapad!", userId: user._id });
    } catch (error) {
        res.status(500).json({ message: "Serverfel", error: error.message });
    }
});

// Logga in användare
app.post("/api/users/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Fel e-post eller lösenord" });
        }

        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: "Fel e-post eller lösenord" });
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({ message: "Inloggning lyckades!", token });
    } catch (error) {
        res.status(500).json({ message: "Serverfel", error: error.message });
    }
});

// Admin
app.get("/api/admin", async (req, res) => {
    try {
        const user = await User.findOne({ username: "admin" });
        if (!user) {
            return res.status(404).json({ message: "Admin-användare hittades inte" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Serverfel", error: error.message });
    }
});

// Hämta alla användare
app.get("/api/users", async (req, res) => {
    try {
        const users = await User.find({}, "email");
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Serverfel", error: error.message });
    }
});

// === Serve frontend från ../dist ===
app.use(express.static(path.join(__dirname, "../dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

// === Starta servern ===
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
