const router = require("express").Router();
const userRoutes = require("./user");
const userScoreRoutes = require("./userscore")

router.use("/user", userRoutes);
router.use("/userscore", userScoreRoutes)

module.exports = router;
