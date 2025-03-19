const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const User = require("./models/User");

dotenv.config();
connectDB();

const createAdmin = async () => {
    try {
        const existingAdmin = await User.findOne({ username: "admin" });
        if (existingAdmin) {
            console.log("Admin-användare finns redan!");
            process.exit();
        }

        const hashedPassword = await bcrypt.hash("password", 10);

        const admin = new User({
            username: "admin",
            email: "admin@example.com", // ✅ Lägg till en e-postadress här
            password: hashedPassword,
        });

        await admin.save();
        console.log("Admin-användare skapad!");
        process.exit();
    } catch (error) {
        console.error("Något gick fel:", error);
        process.exit(1);
    }
};

createAdmin();
