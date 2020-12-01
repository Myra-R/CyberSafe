var express = require("express");
const controllers = require("./controllers")
var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use()
// app.use("/api/user", controllers.user)
// app.use("/api/userscore", controllers.userscore)

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
