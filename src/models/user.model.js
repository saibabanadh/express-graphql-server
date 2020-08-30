const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    "firstName": { type: String, required: true },
    "lastName": { type: String, required: true }, 
    "userName": { type: String, required: true, unique: true },
    "email": { type: String, required: true, unique: true },
    "phone": { type: String, required: true },
    "address": { type: String, default: ""},
    "lastLogin": { type: String, default: Date.now() }
});

module.exports = mongoose.model("User", userSchema);
