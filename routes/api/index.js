const router = require("express").Router();
const userRoutes = require("./user");
const userScoreRoutes = require("./userscore");
const passwordsRoutes = require('./passwords')

router.use("/user", userRoutes);
router.use("/userscore", userScoreRoutes);
router.use("/passwords", passwordsRoutes)

module.exports = router;
