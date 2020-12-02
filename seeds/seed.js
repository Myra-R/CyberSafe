var fileUrl = "password-list-top-100.txt";
var mongoose = require("mongoose");
var db = require("../models");
var fs = require("fs");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/cyber_safe_db",
    { useNewUrlParser: true }
);

var fileArr = fs.readFileSync(fileUrl, "utf8").split("\n");
var passSeed = [];
console.log("Pre array load");
for (var i = 0; i < fileArr.length; i++) {
    var obj = {
        name: fileArr[i]
    }
    passSeed.push(obj);
}
console.table(passSeed);
console.log("Post array load");

console.log("Pre db inserting of seed");
db.Pass.deleteMany({})
    .then(() => db.Pass.collection.insertMany(passSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    })
console.log("Post db inserting of seed");
