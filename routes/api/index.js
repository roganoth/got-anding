const router = require("express").Router();
const playerRoutes = require("./players");
const teamRoutes = require("./teams");

router.use("/players", playerRoutes);
router.use("/teams", teamRoutes);

module.exports = router;
