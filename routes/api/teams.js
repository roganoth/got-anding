const router = require("express").Router();
const teamController = require("../../controllers/teamController");

router.route("/").post(teamController.create);
router.route("/").delete(teamController.deleteTeam);

module.exports = router;
