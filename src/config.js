const mongoose = require("mongoose");

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/loginTut")
.then(() => {
    console.log("Database connected successfully ✅");
})
.catch(() => {
    console.log("Database connection failed ❌");
});


// Schema
const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


// Collection / Model
const collection = mongoose.model("users", LoginSchema);

module.exports = collection;
