const express = require("express");
const router = express.Router();
const usercontroller = require("../../controllers/userController");

router.route("/")
  .get(usercontroller.findAll)
  .post(usercontroller.create);

module.exports = router;

// API routes need a lot of fine tuning, currently only match up with users, will need to fine tune once we decide on what routes we need and where