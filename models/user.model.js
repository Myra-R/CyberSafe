const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    score: { type: String, required: true },
    negatives: { type: String, required: true },
    positives: { type: String, required: true }
})

const User = mongoose.model("User", userSchema)

module.exports = User;
