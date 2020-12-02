const express = require("express");
const router = express.Router();
const userScoreController = require("../../controllers/userscore.controller");

router.route("/")
    .get(userScoreController.findAll)
    .post(userScoreController.create);

router
    .route("/:id")
    .get(userScoreController.findById)
    .put(userScoreController.update)
    .delete(userScoreController.remove);

module.exports = router;
