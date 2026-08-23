const mongoose = require("mongoose");

// Set MONGODB_URI to use MongoDB Atlas. Without it, retain the project's local database.
const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/loginTut";

async function connectDatabase() {
    try {
        await mongoose.connect(mongoUri, {
            serverSelectionTimeoutMS: 5000
        });
        console.log("Database connected successfully.");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        throw error;
    }
}

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

LoginSchema.index({ name: 1 }, { unique: true });

const collection = mongoose.model("users", LoginSchema);

module.exports = { collection, connectDatabase };
