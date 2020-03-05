const router = require("express").Router();
const playersController = require("../../controllers/playersController");
const playerTeam = require("../../controllers/playerTeamController");

router.route("/").get(playersController.findAll);

router.route("/:id").post(playerTeam.create);
router.route("/draft").post(playersController.refresh);
module.exports = router;
