const router = require("express").Router();
const playerRoutes = require("./players");
const teamRoutes = require("./teams");
const path = require("path");

router.use("/players", playerRoutes);
router.use("/teams", teamRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
