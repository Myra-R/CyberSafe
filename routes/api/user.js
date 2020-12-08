const express = require("express");
const router = express.Router();
const usercontroller = require("../../controllers/user.controller");

router.route("/")
  .get(usercontroller.findAll)
  .post(usercontroller.create);

router
  .route("/:id")
  .get(usercontroller.findById)
  .put(usercontroller.update)
  .delete(usercontroller.remove);

module.exports = router;