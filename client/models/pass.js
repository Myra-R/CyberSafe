var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var passSchema = new Schema({
    name: { type: String }
});

var Pass = mongoose.model("Password", passSchema);

module.exports = Pass;