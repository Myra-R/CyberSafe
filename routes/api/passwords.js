const express = require("express");
const router = express.Router();
const passwordscontroller = require("../../controllers/passwords.controller");

router.route("")
  .get(passwordscontroller.findAll)
  .post(passwordscontroller.create);

module.exports = router;