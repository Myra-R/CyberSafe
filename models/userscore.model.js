const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScoreSchema = new Schema({
    score: { type: Number, required: true },
    negatives: { type: [String], required: true },
    positives: { type: [String], required: true }
});

const UserScore = mongoose.model("UserScore", userScoreSchema);

module.exports = UserScore