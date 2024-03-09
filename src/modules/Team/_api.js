const express = require("express");
const { all_teams, add_team, Update_team, delete_team } = require("./_controller");

let router = express.Router();

router.get("/team", all_teams);
router.post("/team", add_team);
router.put('/team/:id',Update_team)
router.delete('/team/:id',delete_team)

module.exports = router;