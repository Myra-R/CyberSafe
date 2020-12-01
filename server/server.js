var express = require("express");
const controllers = require("./controllers")
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));

app.use()
app.use("/api/user", controllers.user)
app.use("/api/userscore", controllers.userscore)

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
