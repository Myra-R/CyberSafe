const express = require("express");
const router = express.Router();
const usercontroller = require("../../controllers/user.controller");
const userScoreController = require("../../controllers/userscore.controller")

router.route("/")
  .get(usercontroller.findAll)
  .post(usercontroller.create);

router
  .route("/:id")
  .get(userScoreController.findById)
  .put(userScoreController.update)
  .delete(userScoreController.remove);

module.exports = router;

// API routes need a lot of fine tuning, currently only match up with users, will need to fine tune once we decide on what routes we need and where