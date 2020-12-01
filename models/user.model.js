var Sequelize = require("sequelize");
var sequelize = require("../config/config.js");

var User = sequelize.define("user", {
    score: Sequelize.STRING,
    negatives: Sequelize.TEXT,
    positives: Sequelize.TEXT
});

User.sync();

module.exports = User;
