var Sequelize = require("sequelize");
var sequelize = require("../config/config.js");

var Userscore = sequelize.define("userscore", {
    email: Sequelize.STRING,
    password: Sequelize.STRING
});

Userscore.sync();

module.exports = Userscore;
