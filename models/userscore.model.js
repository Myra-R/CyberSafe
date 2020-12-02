const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScoreSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const UserScore = mongoose.model("Userscore", userScoreSchema);

module.exports = UserScore